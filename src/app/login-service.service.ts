import { Injectable } from '@angular/core';
import axios from 'axios';


  export interface Owner {
    id: number,
    userName: string,
    password: string,}

    @Injectable({
      providedIn: 'root'
    })
  export class LoginServiceService {

    getOneOwner(userName: string): Owner {
      throw new Error('Method not implemented.');
    }
    private baseUrl = 'http://localhost:9000'; // Remplacez par l'URL de votre backend Java
  
    constructor() { }
  
    register(username: string, password: string) {
      const body = { username, password };
      return axios.post(`${this.baseUrl}/register`, body);
    }
  
    login(username: string, password: string) {
      const body = { username, password };
      return axios.post(`${this.baseUrl}/authorize`, body);
    }
  }