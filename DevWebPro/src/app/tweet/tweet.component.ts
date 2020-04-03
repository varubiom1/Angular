import { Component, OnInit } from '@angular/core';
import {Tweet} from '../models/tweet.model';
@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
 
  listaTweets = [];
   nuevoTweet:Tweet;


  constructor() {
    this.nuevoTweet={
      id: -1,
      texto: "",
      autor: ""
    };
    let miTweet={
      id: 1,
      texto: "Creando nuestro primer tweet..emotional!",
      autor: "JaiVaneTiven"
    };
    let miTweet2={
      id: 2,
      texto: "RICO PA RICO",
      autor: "Jai"
    };
    this.listaTweets.push(miTweet);
    this.listaTweets.push(miTweet2);
    console.log("LISTA:",this.listaTweets); 
   }

   adicionarNuevoTweet(){
     this.listaTweets.push(this.nuevoTweet);
   }

  ngOnInit(): void {
  }

}
