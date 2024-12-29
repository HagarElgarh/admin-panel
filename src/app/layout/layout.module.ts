import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { RouterModule } from '@angular/router';
import { LayoutRoutingModule } from './layout-routing.module';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [HeaderComponent, SidebarComponent, MainContentComponent],
  imports: [CommonModule, RouterModule, LayoutRoutingModule,ToastrModule.forRoot()],
  exports: [HeaderComponent, SidebarComponent, MainContentComponent],
})
export class LayoutModule { }
