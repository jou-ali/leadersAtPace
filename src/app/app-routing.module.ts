import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmbedComponent } from './embed/embed.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'glug',component:HomeComponent
  },
  {
    path:'embed',component:EmbedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
