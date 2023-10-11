import { Component, NgModule, OnInit } from '@angular/core';
import { ClientServiceService } from '../../client-service.service'
export interface Client {
  id: number,
  nom: string,
  prenom: string,
  adresse: string,
  email: string,
}
@Component({
  selector: 'app-nouveau-client',
  templateUrl: './nouveau-client.component.html',
  styleUrls: ['./nouveau-client.component.css']
})

export class NouveauClientComponent implements OnInit {
  clients: Array<Client> = [];
  newClient: Client = { 
    id: 0,
    nom: '',
    prenom: '',
    adresse: '',
    email: '',}



  constructor(private clientServiceService: ClientServiceService) { }
 
  async ngOnInit() {
    this.clients = await this.clientServiceService.getAllClient();
    this.newClient = { 
      id: 0,
      nom: '',
      prenom: '',
      adresse: '',
      email: '',}
  
  }
  onSubmit() {
     this.addClient(this.newClient);
  }
  addClient(newClient: Client) {
    throw new Error('Method not implemented.');
  }
  handleUpdateClickButton = async (id: number) => {
    // Convertir le client en un objet ClientGetAllDTO
    const clientGetAllDTO = this.newClient; // Assuming there's a toClientGetAllDTO() method
  
    // Ajouter le client au serveur
    await this.clientServiceService.addClient(clientGetAllDTO);
  
    // Recharger la liste des clients
    this.clients = await this.clientServiceService.getAllClient();
  }
  // handleUpdateClickButton = (id: number) => { async add(client: Client) {
  //   // Convertir le client en un objet ClientGetAllDTO
  //   const clientGetAllDTO = newClient.toClientGetAllDTO();

  //   // Ajouter le client au serveur
  //   await this.clientServiceService.add(clientGetAllDTO);

  //   // Recharger la liste des clients
  //   this.clients = await this.clientServiceService.getAllClient();
  // }}
  
}
