import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyAuthGuard } from '../auth.guard';
import { LoginComponent } from '../login/login.component';
import { TestComponent } from '../test/test.component';

const routes:Routes=[
  {path:'login',component:LoginComponent},
  {path:'test',component:TestComponent, canActivate:[MyAuthGuard]},
  {path:'**',component:LoginComponent},
  {path:'',component:LoginComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
