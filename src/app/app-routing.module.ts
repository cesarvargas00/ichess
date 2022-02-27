import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IchessComponent } from './ichess/ichess.component';

const routes: Routes = [
  {
    path: 'chess',
    component: IchessComponent,
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
