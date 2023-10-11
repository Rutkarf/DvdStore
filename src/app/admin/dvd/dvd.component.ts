import { Component, OnInit } from '@angular/core';
import { DvdServiceService } from '../../dvd-service.service';
import { GenreEnum } from '../../utils/enum/GenreEnum';

export interface Dvd {
  id: number,
  name: string,
  genre: GenreEnum,
  prix: GLfloat,
  descriptif:string,
  imgPath: string
}

@Component({
  selector: 'app-dvd',
  templateUrl: './dvd.component.html',
  styleUrls: ['./dvd.component.css']
})

export class DvdComponent implements OnInit {

  //TODO avoir un composant qui en fonction de l'id que j'ai dans l'url affiche le bon dvd
  dvds : Array<Dvd>  = []
  
  dvdToShow : Array<Dvd> = []
  dvdToUpDate: any
  genreFilter: string = ''
 

  
  constructor(private dvdServiceService : DvdServiceService) {

  }

  

  async ngOnInit() {
    this.dvds = await this.dvdServiceService.getAllDvd()
    this.dvdToShow = this.dvds

  }
  
  onSubmit() {
    // Vous pouvez ajouter ici la logique de traitement du formulaire, par exemple, envoyer les données au serveur.
    console.log('Données soumises :', this.dvdToUpDate);
  }
 

  handleUpdateClickButton = async (id: number) => {
    
   try {this.dvdToUpDate= this.dvdServiceService.getOneDvd(id);
   }catch (errot){
    console.error('error fetching DVD:');
   }
    // const foundDvd = this.dvds.find((dvd) => dvd.id === id);
    // if (foundDvd !== undefined) {
    //   this.dvdToUpDate = foundDvd;
    // }
  }
  isListView: boolean = true;
  toggleView() {
    
    this.isListView = !this.isListView;
  }
 
 // dvdToUpDate = dvd
  
} 
