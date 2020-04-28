import { Card } from './card';

export class Deck
{
    nr: Number;
    cards: Card[];
    
    constructor(nr: Number, cards: Card[])
    {
        this.nr = nr;
        this.cards = cards;
    }
}