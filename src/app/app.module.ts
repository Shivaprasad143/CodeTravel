import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule} from 'ng2-bootstrap';
import { AppComponent } from './app.component';
import { DCSComponent } from './dcs/dcs.component';
import { HCMComponent } from './hcm/hcm.component';
import { FinanceComponent } from './finance/finance.component';
import { EmployeeComponent } from './employee/employee.component';
import { HelperComponent } from './helper/helper.component';
import { TravelRequestComponent } from './dcs/travel-request/travel-request.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    DCSComponent,
    HCMComponent,
    FinanceComponent,
    EmployeeComponent,
    HelperComponent,
    HelperComponent,
    TravelRequestComponent,
    TravelRequestComponent,     
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    [AlertModule.forRoot()],
    RouterModule.forRoot([
      {path:'CreateRequest',component:TravelRequestComponent},
      {path:'Welcome',component:HelperComponent },
      {path:'**',redirectTo:'Welcome',pathMatch:'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
