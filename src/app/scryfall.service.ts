import { Injectable } from '@angular/core';
import { Card } from './model/card';

@Injectable({
  providedIn: 'root'
})
export class ScryfallService {

  constructor() { }

  public getCardsByName(names: string[]){

    //split names into ammount and name
    let cards = names.map(name => this.split(name));

    //create a fetch request for each card name
    let requests = cards.map(card => fetch("https://api.scryfall.com/cards/named?exact=" + card.name)
      .then(res => res.json())
      .then(data => {
          //create a unique card for each card
          let result = [];
          for(let i = 0; i < card.ammount; i++){
              result.push(this.mapToCard(data));
          }
          return result;
      }));
  
      //wait till all the requests resolve
      return Promise.all(requests).then(res => {
        let deck = [];
        //push all cards into the deck
        res.forEach((cards: any[]) => {
            cards.forEach(c => deck.push(c));
        })
        return deck;
    })
  }

  private mapToCard(data){
    return {
      name: data.name,
      image: data.image_uris.normal
    } as Card;
  }

  private split(str){
    return { 
        ammount: str.substring(0,str.indexOf(' ')),
        name: str.substring(str.indexOf(' ')+1),
    }
  }
  
}
