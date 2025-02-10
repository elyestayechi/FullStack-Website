import { Component, OnInit } from '@angular/core';
import { FormulaireContact } from 'src/app/Models/FormulaireContact';
import { FormulaireContactService } from 'src/app/Services/formulaire-contact.service';

@Component({
  selector: 'app-formulaire-contact',
  templateUrl: './formulairecontact.component.html',
  styleUrls: ['./formulairecontact.component.css']
})
export class FormulaireContactComponent implements OnInit {
  formulairesContact: FormulaireContact[] = [];
  errorMessage: any;
  newFormulaireContact: FormulaireContact = new FormulaireContact();

  constructor(private formulaireContactService: FormulaireContactService) {}

  ngOnInit(): void {
    this.getAllFormulairesContact();
  }

  getAllFormulairesContact(): void {
    this.formulaireContactService.getAllFormulaireContacts().subscribe(
      (data: FormulaireContact[]) => {
        this.formulairesContact = data;
      },
      (error) => {
        this.errorMessage = error;
        console.error('There was an error!', error);
      }
    );
  }

  addFormulaireContact(): void {
    this.newFormulaireContact.dateSoumission = new Date(); // Set the current date

    this.formulaireContactService.createFormulaireContact(this.newFormulaireContact).subscribe(
      (response) => {
        this.getAllFormulairesContact();
        this.newFormulaireContact = new FormulaireContact();
      },
      (error) => {
        this.errorMessage = error;
        console.error('Error adding formulaire contact:', error);
      }
    );
  }

  deleteFormulaireContact(id: number): void {
    this.formulaireContactService.deleteFormulaireContact(id).subscribe(() => {
      this.getAllFormulairesContact();
    });
  }

  clearForm(): void {
    this.newFormulaireContact = new FormulaireContact();
  }
}
