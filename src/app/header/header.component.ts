import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isSidebarOpen=false;
  toggleSidebar(){
    this.isSidebarOpen=!this.isSidebarOpen;
  }
  public isMenuOpen: boolean = false;
  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen; 
  }
}

  const darkModeToggle = document.getElementById('darkModeToggle');

if (darkModeToggle) {
    darkModeToggle.addEventListener('change', (event) => {
        const isChecked = (event.target as HTMLInputElement).checked;
        if (isChecked) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    });
  

    
  
    

}
