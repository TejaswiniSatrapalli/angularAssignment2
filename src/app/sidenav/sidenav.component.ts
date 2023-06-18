import { Component, EventEmitter, Output } from '@angular/core';

interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
    
    }

    export const navbarData=[
      {
         
      routeLink:'dashboard',
      icon:'fa fa-th-large',
      label:'Dashboard'
      },
      {
      routeLink:'product Categories',
      icon:'fa fa-dot-circle-o',
      label:'Product Categories'
      },
      {
       routeLink:'leads',
      icon:'fa fa-bar-chart',
      label:'Lead management'
      
      },
       {
      
       routeLink:'compagins',
       icon:'fa fa-envelope',
          label:'Compagins'
       },
      {
      
      routeLink:'applications',
      
      icon:'fa fa-pencil',
       label:'Applications'
      },
      {
      routeLink:' my contacts',
      icon:'fa fa-users',
      label:' My contacts'
      },
      {
      routeLink:'claims',
      icon:'fa fa-address-card-o',
      label:'Claims'
      },
      {
      
       routeLink:'twitter',
       icon:'fa fa-twitter',
       label:'Twitter'
      },
       {
         
      routeLink:'settings',
       icon:'fa fa-cog',
      label:'Settings'
      
      },
      {
       routeLink:'darkmode',
       icon:'fa fa-toggle-off',
       label:'Darkmode'
       },
       {
       routeLink:'logout',
       icon:'fa fa-sign-out',
       label:'Logout'
       }
      
      
      
      
      ]
      
      
      

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {


  @Output() onToggleSideNav:EventEmitter<SideNavToggle>=new EventEmitter();
collapsed=false;
screenWidth=0;
navData=navbarData;
constructor() { }
  ngOnInit(): void {
 }
 toggleCollapse():void
 
 {
  
  this.collapsed=!this.collapsed;
  
  this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth});
  }

}
