import { FirebaseAnalyticsService } from './firebase-analytics.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'firebaseApp';
  constructor(public firebase: FirebaseAnalyticsService) { }

  ngOnInit(): void {
    this.firebase.initializeApp();
    this.firebase.setUserInfo();
  }
}
