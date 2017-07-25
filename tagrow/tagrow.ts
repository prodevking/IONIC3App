import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, Events, Tabs, Platform, Searchbar, ToastController, AlertController } from 'ionic-angular';
import { ViewChild, ElementRef, HostListener } from '@angular/core';
import { Cordova } from '@cordova'
import { Keyboard } from 'ionic-native';

@Component({
  selector: 'tagrow',
  templateUrl: 'tagrow.html',
})

export class TagRow {
  @Input() fruits: string[];

  constructor(public platform: Platform, 
    public navCtrl: NavController, 
    public navParams: NavParams,
    public events: Events,
    private toastCtrl: ToastController,
    public keyboard: Keyboard,
    public alertCtrl: AlertController) {
  }

  openDialog(fruit) {
    let alert = this.alertCtrl.create({
      title: fruit,
      buttons: ['OK']
    });
    alert.present();
  }
}