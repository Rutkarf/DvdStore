import { Injectable } from '@angular/core';
import axios from 'axios';




export interface ClientGetAllDTO{
         id: number;
         nom:string,
         prenom: string,
         adresse: string,
         email: string,
}
@Injectable({
         providedIn: 'root'
})

export class ClientServiceService{

constructor(){}
// Effectuer la requête HTTP pour afficher les clients 
         getAllClient = async () : Promise<Array<ClientGetAllDTO>> =>{
console.log("listClient")
return (await axios.get('http://localhost:9000/dvds/user/all')).data;
}
// Effectuer la requête HTTP pour afficher un client
getOneClient =async (id:number) : Promise<ClientGetAllDTO> => {
         console.log("oneClient")
         return (await axios.get('http://localhost:9000/dvds/user/'+ id)).data;
       }

addClient(client: ClientGetAllDTO) : Promise<void> {
        // Effectuer la requête HTTP pour ajouter le client au serveur
        return axios.post('http://localhost:9000/dvds/user/', client);
      }
}