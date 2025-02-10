import { Component, OnInit } from '@angular/core';
import { Servic } from '../../Models/Servic';
import { ServicService } from '../../Services/servic.service';

@Component({
  selector: 'app-servic-management',
  templateUrl: './servic.component.html',
  styleUrls: ['./servic.component.css']
})
export class ServicComponent implements OnInit {
  services: Servic[] = [];
  errorMessage: string = '';
  newService: Servic = new Servic();
  isEditMode: boolean = false;

  constructor(private serviceService: ServicService) { }

  ngOnInit(): void {
    this.getAllServices();
  }

  getAllServices(): void {
    this.serviceService.getAllServices().subscribe(
      (data: Servic[]) => {
        this.services = data;
      },
      (error) => {
        this.errorMessage = error.message;
        console.error('Error fetching services:', error);
      }
    );
  }

  addService(): void {
    this.serviceService.createService(this.newService).subscribe(
      (response) => {
        this.getAllServices();
        this.newService = new Servic();
      },
      (error) => {
        this.errorMessage = error.message;
        console.error('Error adding service:', error);
      }
    );
  }

  editService(service: Servic): void {
    this.newService = { ...service }; // Clone the service to edit
    this.isEditMode = true;
  }

  updateService(): void {
    this.serviceService.updateService(this.newService.id, this.newService).subscribe(
      (response) => {
        this.getAllServices();
        this.newService = new Servic();
        this.isEditMode = false;
      },
      (error) => {
        this.errorMessage = error.message;
        console.error('Error updating service:', error);
      }
    );
  }

  deleteService(id: number): void {
    this.serviceService.deleteService(id).subscribe(
      () => {
        this.getAllServices();
      },
      (error) => {
        this.errorMessage = error.message;
        console.error('Error deleting service:', error);
      }
    );
  }

  clearForm(): void {
    this.newService = new Servic();
    this.isEditMode = false;
  }
}