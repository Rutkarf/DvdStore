import { DvdServiceService } from '../../dvd-service.service';
import { GenreEnum } from '../../utils/enum/GenreEnum';
import { Component, OnInit } from '@angular/core';

export interface Dvd {
  id: number,
  name: string,
  genre: GenreEnum,
  prix: GLfloat,
  descriptif:string,
  imgPath: string
}
@Component({
  selector: 'app-home-dvd',
  templateUrl: './home-dvd.component.html',
  styleUrls: ['./home-dvd.component.css']
})
export class HomeDvdComponent implements OnInit{
  //TODO avoir un composant qui en fonction de l'id que j'ai dans l'url affiche le bon dvd
  dvds : Array<Dvd>  = [
  ]

  dvdToShow : Array<Dvd> = []

  genreFilter: string = ''

  //private dvdServiceService : DvdServiceService
  constructor(private dvdServiceService : DvdServiceService) {

  }

  handleGenreClickButton = (genre : string) => {
    this.dvdToShow = this.dvds.filter((value) => {
      return value.genre === genre
    })
  }


  async ngOnInit() {
    this.dvds = await this.dvdServiceService.getAllDvd()
    this.dvdToShow = this.dvds

  }
  isListView: boolean = true;
  toggleView() {
    this.isListView = !this.isListView;
  }
}
