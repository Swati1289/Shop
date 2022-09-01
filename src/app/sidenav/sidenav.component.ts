import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Input() sideNavStatus:boolean=false;
  sideNavList=[
    {
      id:1,
      name:'Home',
      icon:'fa-solid fa-house',
      navig:''
    },

    {
      id:2,
      name:'LogIn as Admin',
      icon:'fa-solid fa-person-circle-check',
      navig:'adminlogin'
    },
    {
      id:3,
      name:'My Products',
      icon:'fa-solid fa-box',
      navig:'myProd'
    },
    {
      id:4,
      name:'My Card',
      icon:'fa-solid fa-credit-card',
      navig:'myCard'
    },
    {
      id:5,
      name:'Setting',
      icon:'fa-solid fa-gear',
      navig:'#'
    },
    {
      id:6,
      name:'About Us',
      icon:'fa-solid fa-circle-info',
      navig:'aboutus'
    },
    {
      id:7,
      name:'Contact',
      icon:'fa-solid fa-phone',
      navig:'contactus'
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
