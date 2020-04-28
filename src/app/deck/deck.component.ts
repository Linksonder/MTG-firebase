import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ScryfallService } from '../scryfall.service';
import { Deck } from '../model/deck';
import { DeckService } from '../deck.service';


@Component({
  selector: 'mtg-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit {

  @Input()
  public nr: Number;

  public deck: Deck;
  public deck$: Observable<Deck>;
  public importtext: String;

  constructor(
    private firestore: AngularFirestore, 
    private deckService: DeckService) {
  }

  ngOnInit(): void {
    //this.firestore.collection<Deck>('decks').doc<Deck>("" + this.nr).valueChanges()
  }
    
  import(){
 
  }
}
