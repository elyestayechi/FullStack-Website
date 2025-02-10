import { Component } from '@angular/core';
import { Servic } from 'src/app/Models/Servic';
import { ServicService } from 'src/app/Services/servic.service';

@Component({
  selector: 'app-servicf',
  templateUrl: './servicf.component.html',
  styleUrls: ['./servicf.component.css']
})
export class ServicfComponent {
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

  
}