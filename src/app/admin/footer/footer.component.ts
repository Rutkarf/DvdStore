import { Component } from '@angular/core';
import  { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  title = 'angular-recap';
  searchText = 'Votre Recherche';
  isListView: boolean = true;
  handleSearchInput = (event: any) => {
    this.searchText = event.target.value
    
  }
  handleButtonSearchClick = () => {
    console.log(this.searchText)
  }

  constructor(private router: Router) { }
goToHome() {
  this.router.navigate(['']);
}

goToLogin() {
  this.router.navigate(['login']);
}

goToHomeStore() {
  this.router.navigate(['HomeStore']);
}

goToClient() {
  this.router.navigate(['user/all']);
}

goToDvd() {
  this.router.navigate(['dvd']);
}
}
