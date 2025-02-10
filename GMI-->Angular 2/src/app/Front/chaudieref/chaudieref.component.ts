import { Component } from '@angular/core';
import { Chaudiere } from 'src/app/Models/Chaudiere';
import { ChaudiereService } from 'src/app/Services/chaudiere.service';

@Component({
  selector: 'app-chaudieref',
  templateUrl: './chaudieref.component.html',
  styleUrls: ['./chaudieref.component.css']
})
export class ChaudierefComponent {
  chaudieres: Chaudiere[] = [];
  errorMessage: any;
  newChaudiere: Chaudiere = new Chaudiere();
  isEditMode: boolean = false;

  constructor(private chaudiereService: ChaudiereService) {}

  ngOnInit(): void {
    this.getAllChaudieres();
  }

  getAllChaudieres(): void {
    this.chaudiereService.getAllChaudieres().subscribe(
      (data: Chaudiere[]) => {
        this.chaudieres = data;
      },
      (error) => {
        this.errorMessage = error;
        console.error('There was an error!', error);
      }
    );
  }

}
