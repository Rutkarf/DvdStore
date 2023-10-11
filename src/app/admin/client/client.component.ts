import { Component, NgModule, OnInit } from '@angular/core';
import { ClientServiceService } from '../../client-service.service';


export interface Client {
  id: number,
  nom: string,
  prenom: string,
  adresse: string,
  email: string,
}

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})

export class ClientComponent implements OnInit {
  clients: Array<Client> = [];
  clientToShow: Array<Client> = [];
  clientToUpDate: Client = {
    id: 0,
    nom: '',
    prenom: '',
    adresse: '',
    email: '',
  };

  constructor(private clientServiceService: ClientServiceService) {}

  async ngOnInit() {
    this.clients = await this.clientServiceService.getAllClient()
    this.clientToShow = this.clients;
  }

  onSubmit() {
    // Vous pouvez ajouter ici la logique de traitement du formulaire, par exemple, envoyer les données au serveur.
    console.log('Données soumises :', this.clientToUpDate);
  }

  handleUpdateClickButton = (id: number) => {
    const foundClient = this.clients.find((client) => client.id === id);
    if (foundClient !== undefined) {
      this.clientToUpDate = foundClient;
    }
  }
}

