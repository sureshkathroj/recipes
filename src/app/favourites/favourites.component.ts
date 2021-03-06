import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Favourites } from '../favourites';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  constructor(private service: CommonService) { }
  favourites: Favourites[];
  ngOnInit(): void {
    this.getFavourites();
  }

  getFavourites () {
    this.service.getFavourites().subscribe(res => {
      this.favourites = res;
      console.log(this.favourites);
    })
  }

}
