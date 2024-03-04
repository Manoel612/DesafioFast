import { Component } from '@angular/core';
import { WorkshopInterface } from '../../interfaces/WorkshopInterface';
import { WorkshopsService } from '../../services/workshops.service';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule, MatExpansionPanel} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import { RecordsService } from '../../services/records.service';
import { CollaboratorInterface } from '../../interfaces/CollaboratorInterface';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { RecordComponent } from '../../components/record/record.component';

@Component({
  selector: 'app-workshops',
  standalone: true,
  imports: [
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatExpansionModule,
    MatDividerModule,
    MatDialogModule
  ],
  templateUrl: './workshops.component.html',
  styleUrl: './workshops.component.css'
})
export class WorkshopsComponent {

  workshops: WorkshopInterface[] = [];
  workshopsGeneral: WorkshopInterface[] = [];
  
  columns = ["Id" , "Nome", "Buttons"];
  panelOpenState = false;
  
  constructor( private workshopsService: WorkshopsService, private recordsService: RecordsService, public dialog: MatDialog) {}
  
  ngOnInit(): void {
    this.workshopsService.GetAllWorkshops().subscribe(response => {

      const data = response.data;

      data.map((item) => {
        item.realizationDate = new Date(item.realizationDate).toLocaleDateString('pt-Br');
      });

      this.workshops = data;
      this.workshopsGeneral = data;
      console.log(data);
    });
  }
  
  search(event: Event){
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();
    
    console.log(value);
    
    this.workshops = this.workshopsGeneral.filter(workshop => {
      return workshop.name.toLowerCase().includes(value);
    });
  }

  deleteProcess(id: number){
    this.workshopsService.DeleteWorkshop(id).subscribe(response => {
      console.log(response);
      this.workshopsService.GetAllWorkshops().subscribe(response => {

        const data = response.data;
  
        data.map((item) => {
          item.realizationDate = new Date(item.realizationDate).toLocaleDateString('pt-Br');
        });
  
        this.workshops = data;
        this.workshopsGeneral = data;
        console.log(data);
      });
    });
  }

  openDialog(workshopId: number) {
    const dialogRef = this.dialog.open(RecordComponent, 
      {
        width: '600px',
        data: {propWorkshopId: workshopId}
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
