import { Component } from '@angular/core';
import { FormulaireContact } from 'src/app/Models/FormulaireContact';
import { FormulaireContactService } from 'src/app/Services/formulaire-contact.service';
import { CursefilterService } from 'src/app/Services/cursefilter.service';

@Component({
  selector: 'app-formulairecontactf',
  templateUrl: './formulairecontactf.component.html',
  styleUrls: ['./formulairecontactf.component.css']
})
export class FormulairecontactfComponent {
  newFormulaireContact: FormulaireContact = new FormulaireContact();

  constructor(
    private formulaireContactService: FormulaireContactService,
    private curseFilterService: CursefilterService
  ) {}

  addFormulaireContact(): void {
    // Filter out curse words from the message
    const filteredMessage = this.curseFilterService.filterCurseWords(this.newFormulaireContact.message);

    // Check if the filtered message is different from the original message
    if (filteredMessage !== this.newFormulaireContact.message) {
      // Show alert for bad words
      alert('Your message contains inappropriate language. Please review and submit again.');
      return; // Exit the function without saving
    }

    // Add the formulaire contact
    this.newFormulaireContact.dateSoumission = new Date(); // Set the current date
    this.formulaireContactService.createFormulaireContact(this.newFormulaireContact).subscribe(
      (response) => {
        // Handle success
        console.log('Formulaire contact added successfully:', response);
        // Show success alert
        alert('Formulaire contact added successfully!');
        // Clear the form after successful submission
        this.clearForm();
      },
      (error) => {
        // Handle error
        console.error('Error adding formulaire contact:', error);
        // Show error alert
        alert('Failed to add formulaire contact. Please try again later.');
      }
    );
  }

  clearForm(): void {
    // Clear the form fields after successful or unsuccessful submission
    this.newFormulaireContact = new FormulaireContact();
  }
}
