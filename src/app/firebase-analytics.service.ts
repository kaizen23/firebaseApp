import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/performance';
export const config =
{
  apiKey: 'AIzaSyCWvWWnBZ0J6WCTc7lTTWgFVMBUkShzkxU',
  authDomain: 'retail-e2a47.firebaseapp.com',
  databaseURL: 'https://retail-e2a47.firebaseio.com',
  projectId: 'retail-e2a47',
  storageBucket: 'retail-e2a47.appspot.com',
  messagingSenderId: '813012940042',
  appId: '1:813012940042:web:c6889495844de62376b6f3',
  measurementId: 'G-XW9CS356NP'
}


@Injectable({
  providedIn: 'root'
})
export class FirebaseAnalyticsService {
  private static firebaseAnalyticsInstance;

  private startTime: Date;


  initializeApp(): void {
    firebase.initializeApp(config);
    FirebaseAnalyticsService.firebaseAnalyticsInstance = firebase.analytics();
  }

  setUserInfo(): void {
    FirebaseAnalyticsService.firebaseAnalyticsInstance.setUserProperties({
      'rola': 'test',
      'gdzie': 'gdzie',
      'userName': 'user',
      'tenant': 'tenant'
    });
  }

  changeUserRole(roleName: string, where: string): void {
    FirebaseAnalyticsService.firebaseAnalyticsInstance.setUserProperties({
      'rola': roleName,
      'gdzie': where,
      'userName': 'user',
      'tenant': 'tenatn'    
    });
  }

  setStartTime(): void {
    this.startTime = new Date();
  }

  setDurationTime(moduleName: string): void {
    // tslint:disable-next-line:max-line-length
    FirebaseAnalyticsService.firebaseAnalyticsInstance.logEvent((moduleName), { engagement_time_msec: 50 });
  }
}
