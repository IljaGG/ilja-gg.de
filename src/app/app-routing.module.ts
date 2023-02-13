import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { StartPageComponent } from './start-page/start-page.component';

const routes: Routes = [

  { path: '', component: StartPageComponent },
  { path: 'impressum', component: ImpressumComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
