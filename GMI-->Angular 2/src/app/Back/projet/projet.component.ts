import { Component, OnInit } from '@angular/core';
import { Projet } from 'src/app/Models/Projet';
import { ProjetService } from 'src/app/Services/projet.service';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {
  projets: Projet[] = [];
  errorMessage: string = '';
  newProjet: Projet = new Projet();
  isEditMode: boolean = false;

  constructor(private projetService: ProjetService) { }

  ngOnInit(): void {
    this.getAllProjets();
  }

  getAllProjets(): void {
    this.projetService.getAllProjets().subscribe(
      (data: Projet[]) => {
        this.projets = data;
      },
      (error) => {
        this.errorMessage = error.message;
        console.error('Error fetching projets:', error);
      }
    );
  }

  addProjet(): void {
    this.projetService.createProjet(this.newProjet).subscribe(
      (response) => {
        this.getAllProjets();
        this.newProjet = new Projet();
      },
      (error) => {
        this.errorMessage = error.message;
        console.error('Error adding projet:', error);
      }
    );
  }

  editProjet(projet: Projet): void {
    this.newProjet = { ...projet }; // Clone the projet to edit
    this.isEditMode = true;
  }

  updateProjet(): void {
    this.projetService.updateProjet(this.newProjet.id, this.newProjet).subscribe(
      (response) => {
        this.getAllProjets();
        this.newProjet = new Projet();
        this.isEditMode = false;
      },
      (error) => {
        this.errorMessage = error.message;
        console.error('Error updating projet:', error);
      }
    );
  }

  deleteProjet(id: number): void {
    this.projetService.deleteProjet(id).subscribe(
      () => {
        this.getAllProjets();
      },
      (error) => {
        this.errorMessage = error.message;
        console.error('Error deleting projet:', error);
      }
    );
  }

  clearForm(): void {
    this.newProjet = new Projet();
    this.isEditMode = false;
  }
}