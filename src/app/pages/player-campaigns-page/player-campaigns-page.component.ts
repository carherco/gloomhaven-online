import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Campaign } from 'src/app/data/campaign';

@Component({
  selector: 'app-player-campaigns-page',
  templateUrl: './player-campaigns-page.component.html',
  styleUrls: ['./player-campaigns-page.component.css']
})
export class PlayerCampaignsPageComponent implements OnInit {

  campaigns: Campaign[] = [];
  campaigns$!: Observable<Campaign[]>;

  constructor(private afs: AngularFirestore) { }

  ngOnInit(): void {
    let firebaseItemsCollection: AngularFirestoreCollection<Campaign>;
    firebaseItemsCollection = this.afs.collection<Campaign>('campaigns', ref => ref.where('playersIds', 'array-contains', 'pJIag00RhLUTDPuKFyb45iKBI1A3'));
    // firebaseItemsCollection.valueChanges().subscribe(
    //   items => this.campaigns = items
    // );
    this.campaigns$ = firebaseItemsCollection.valueChanges();
  }

}
