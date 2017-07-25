import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Home } from './home';
import { TagRow } from './tagrow/tagrow';

@NgModule({
  declarations: [
    Home,
    TagRow
  ],
  imports: [
    IonicPageModule.forChild(Home),
  ],
  exports: [
    Home
  ]
})
export class HomeModule {}
