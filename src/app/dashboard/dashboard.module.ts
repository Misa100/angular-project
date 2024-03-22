import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { NgChartsModule } from 'ng2-charts';

import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SidenavWrapperComponent } from './sidenav-wrapper/sidenav-wrapper.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InfoComponent } from './info/info.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    SidenavWrapperComponent,
    DashboardComponent,
    InfoComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatFormFieldModule,
    NgChartsModule,
    MatInputModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
