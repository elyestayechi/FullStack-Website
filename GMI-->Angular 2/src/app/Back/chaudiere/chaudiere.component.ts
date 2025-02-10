import { Component, OnInit } from '@angular/core';
import { Chaudiere } from 'src/app/Models/Chaudiere';
import { ChaudiereService } from 'src/app/Services/chaudiere.service';

@Component({
  selector: 'app-chaudiere',
  templateUrl: './chaudiere.component.html',
  styleUrls: ['./chaudiere.component.css']
})
export class ChaudiereComponent implements OnInit {
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

  addChaudiere(): void {
    this.chaudiereService.createChaudiere(this.newChaudiere).subscribe(
      (response) => {
        this.getAllChaudieres();
        this.newChaudiere = new Chaudiere();
      },
      (error) => {
        this.errorMessage = error.message;
        console.error('Error adding projet:', error);
      }
    );
  }
  

  editChaudiere(id: number): void {
    const chaudiere = this.chaudieres.find(c => c.id === id);
    if (chaudiere) {
      this.newChaudiere = { ...chaudiere };
      this.isEditMode = true;
    }
  }

  updateChaudiere(): void {
    this.chaudiereService.updateChaudiere(this.newChaudiere.id, this.newChaudiere).subscribe(
      (response) => {
        this.getAllChaudieres();
        this.clearForm();
      },
      (error) => {
        this.errorMessage = error;
        console.error('Error updating chaudiere:', error);
      }
    );
  }

  deleteChaudiere(id: number): void {
    this.chaudiereService.deleteChaudiere(id).subscribe(() => {
      this.getAllChaudieres();
    });
  }

  clearForm(): void {
    this.newChaudiere = new Chaudiere();
    this.isEditMode = false;
  }
 
}
