export class Chaudiere {
    id!: number;
    modele!: string;
    numeroSerie!: string;
    dateInstallation!: Date; // Use ISO string format for dates
    dateDerniereMaintenance!: Date; // Use ISO string format for dates
    description!: string; // New field for description
  }
  