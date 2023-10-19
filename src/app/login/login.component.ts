import { Component, OnInit } from '@angular/core';
import { LoginServiceService, Owner} from '../login-service.service';


export interface OwnerGetAllDTO {
  id: number,
  userName: string,
  password: string,
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  owner: Owner = {
    id: 0,
    userName: '',
    password: ''
  };
  constructor(private loginServiceService : LoginServiceService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  onSubmit() {
    // Vous pouvez ajouter ici la logique de traitement du formulaire, par exemple, envoyer les données au serveur.
    console.log('Données soumises :', this.owner);
  }
  handleUpdateClickButton = async (userName: string) => {
    try {
      const ownerData = await this.loginServiceService.getOneOwner(userName);
      // Maintenant, vous avez les données de l'owner, vous pouvez les stocker dans 'owner' ou faire autre chose avec elles.
      this.owner = ownerData;
    } catch (error) {
      console.error('error fetching Owner:', error);
    }}
}
