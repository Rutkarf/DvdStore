
import { Injectable } from '@angular/core';
import axios from 'axios';
import { GenreEnum } from './utils/enum/GenreEnum';



export interface DvdGetAllDTO {
  id: number,
  name: string,
  genre: GenreEnum,
  prix:GLfloat,
  descriptif: string,
  imgPath: string
}

@Injectable({
  providedIn: 'root'
})
export class DvdServiceService {

  
constructor(){}

   getAllDvd = async () : Promise<Array<DvdGetAllDTO>> => {
    console.log("List")
    return (await axios.get('http://localhost:9000/dvds')).data;
  }

  getOneDvd =async (id:number) : Promise<DvdGetAllDTO> => {
    console.log("one")
    return (await axios.get('http://localhost:9000/dvds/'+ id)).data;
  }
}
