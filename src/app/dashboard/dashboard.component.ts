import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public admin: boolean;
  public username: string;
  public navLinks: any;
  public role: string;
  public chatbotOpen: boolean;

  public navInfo: any = [
    {
      role: 'user',
      links: [
        {tag: 'View Main Policy Table', link: './viewPolicyTable'},
        {tag: 'View Profile', link: './viewProfile'},
      ]
    },
    {
      role: 'admin',
      links: [
        {tag: 'View Policy Table', link: './viewPolicyTable'},
        {tag: 'View Profile', link: './viewProfile'},
        {tag: 'Add Policy', link: './addPolicy'},
      ]
    },
  ]
  constructor(public router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.closeBot();
    this.username = JSON.parse(localStorage.getItem('currentUser')).username;
    this.admin = JSON.parse(localStorage.getItem('currentUser')).admin;
    this.admin==true?this.role = 'admin':this.role = 'user';
    this.navLinks = this.navInfo.find(element => {
      return element.role === this.role;
    });

  }

  logout()
  {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  openBot() {
    document.getElementById("chatbot").style.display = "block";
    this.chatbotOpen = true;
  }
  
  closeBot() {
    document.getElementById("chatbot").style.display = "none";
    this.chatbotOpen = false;
  }


}
