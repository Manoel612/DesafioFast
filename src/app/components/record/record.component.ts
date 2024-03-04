import { Component, Inject, Input, OnInit } from '@angular/core';
import { RecordsService } from '../../services/records.service';
import { CollaboratorInterface } from '../../interfaces/CollaboratorInterface';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-record',
  standalone: true,
  imports: [
    MatTableModule,
    MatCardModule
  ],
  templateUrl: './record.component.html',
  styleUrl: './record.component.css'
})
export class RecordComponent implements OnInit {

  collaboratorsInWorkshop: CollaboratorInterface[] = [];
  props: any;

  columns = ["Id" , "Nome"];

  constructor( @Inject(MAT_DIALOG_DATA) public data: any, private recordService: RecordsService){}

  ngOnInit(): void {
    this.props = this.data;
    this.collaboratorsList(this.data.propWorkshopId)
  }

  collaboratorsList(workshopId: number){
    this.recordService.GetAllCollaboratorsInWorkshop(workshopId).subscribe(response => {
      const data = response.data;
      this.collaboratorsInWorkshop = data;
      console.log(data);
    })
  }
}
