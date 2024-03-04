import { Component, OnInit } from '@angular/core';
import { CollaboratorsService } from '../../services/collaborators.service';
import { CollaboratorInterface } from '../../interfaces/CollaboratorInterface';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  collaborators: CollaboratorInterface[] = [];
  collaboratorsGeneral: CollaboratorInterface[] = [];

  columns = ["Id" , "Nome", "Buttons"];

  constructor( private collaboratorsService: CollaboratorsService){}
  
  ngOnInit(): void {
      this.collaboratorsService.GetAllCollaborators().subscribe(response => {
        this.collaborators = response.data;
        this.collaboratorsGeneral = response.data;
        console.log(response.data);
      })
  }

  search(event: Event){
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    console.log(value)

    this.collaborators = this.collaboratorsGeneral.filter(collaborator => {
      return collaborator.name.toLowerCase().includes(value);
    })
  }

  
}
