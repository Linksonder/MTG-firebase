import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Deck } from './model/deck';
import { ScryfallService } from './scryfall.service';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  //room = Vl4v1aVen8hAU6B9CwX9
  private roomId = "Vl4v1aVen8hAU6B9CwX9";
  room: AngularFirestoreDocument;


  constructor(private firestore: AngularFirestore, private scryfall: ScryfallService) { 

    //deafult room!
    this.room = firestore.collection('rooms').doc('Vl4v1aVen8hAU6B9CwX9');

  }

  importDeck(playerNr, importText: string){
    let names = importText.split('\n');
    names = names.filter(n => n != "" ); //remove empty lines
    return this.scryfall.getCardsByName(names)
      .then((cards) => {
        this.room.collection('players').doc(playerNr).collection('deck').set(deck);
        return true;
      })
  }

  updateDeck(playerNr, cardNames: string[]){
    this.scryfall.getCardsByName(cardNames);
    this.room.collection('players').doc(playerNr).collection('deck').set(deck);
  }



  getDeck(deckNr){

  }
}
