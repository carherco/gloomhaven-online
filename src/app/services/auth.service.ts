import { Injectable, NgZone, OnDestroy, Optional } from '@angular/core';
import { Auth, authState, signInAnonymously, signOut, User as FirebaseUser, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
// import { auth } from 'firebase/app';
// import firebase from 'firebase/compat/app';
// import { AngularFireAuth } from '@angular/fire/compat/auth';
// import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { User } from '../model/player';
import { EMPTY, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { traceUntilFirst } from '@angular/fire/performance';

@Injectable({
  providedIn: 'root'
})

export class AuthService implements OnDestroy {
  userData: any; // Save logged in user data
  private readonly userDisposable: Subscription|undefined;
  private user!: Observable<FirebaseUser | null>;

  constructor(
    //public afs: AngularFirestore,   // Inject Firestore service
    @Optional() private auth: Auth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    console.log('servicio auth');
    if (auth) {
      this.user = authState(this.auth);
      this.userDisposable = authState(this.auth).pipe(
        traceUntilFirst('auth'),
        map(u => !!u)
      ).subscribe(isLoggedIn => {
        console.log(isLoggedIn);
      });
      this.user.subscribe( u => {
        if (u) {
              this.userData = u;
              localStorage.setItem('user', JSON.stringify(this.userData));
              JSON.parse(localStorage.getItem('user')!);

            } else {
              localStorage.removeItem('user');
              JSON.parse(localStorage.getItem('user')!);
            }
      });
    }
  }

  ngOnDestroy(): void {
    if (this.userDisposable) {
      this.userDisposable.unsubscribe();
    }
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  // Sign in with Google
  login() {
    console.log('login!!!!');
    signInWithPopup(this.auth, new GoogleAuthProvider())
    .then((result) => {
      this.ngZone.run(() => {
         this.router.navigate(['players']);
       });
    })
    .catch((error) => {
      console.log(error);
      window.alert(error);
    });
  }

  async loginAnonymously() {
    return await signInAnonymously(this.auth);
  }

  // Sign out
  logout() {
    signOut(this.auth).then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']);
    });
  }

}
