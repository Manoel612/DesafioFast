import { Component, Inject, Input, OnInit } from '@angular/core';
import { RecordsService } from '../../services/records.service';
import { CollaboratorInterface } from '../../interfaces/CollaboratorInterface';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-record',
  standalone: true,
  imports: [
    MatTableModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './record.component.html',
  styleUrl: './record.component.css'
})
export class RecordComponent implements OnInit {

  collaboratorsInWorkshop: CollaboratorInterface[] = [];
  collaboratorsGeneral: CollaboratorInterface[] = [];

  props: any;

  columns = ["Id" , "Nome"];

  constructor( @Inject(MAT_DIALOG_DATA) public data: any, private recordService: RecordsService){}

  workshopId: number = this.data.propWorkshopId;

  ngOnInit(): void {
    this.props = this.data;
    this.collaboratorsList(this.data.propWorkshopId);
  }
  
  search(event: Event){
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();
    
    this.collaboratorsInWorkshop = this.collaboratorsGeneral.filter(collaborator => {
      return collaborator.name.toLowerCase().includes(value);
    })
  }
  
  collaboratorsList(workshopId: number){
    this.recordService.GetAllCollaboratorsInWorkshop(workshopId).subscribe(response => {
      const data = response.data;
      this.collaboratorsInWorkshop = data;
      this.collaboratorsGeneral = data;
    });
  }
  
}
