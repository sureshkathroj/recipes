import { Component, OnInit, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  constructor(private service: CommonService, private router: Router) { }
  menuItems:any;
  ngOnInit(): void {
    this.getMenuItems();
  }


  getMenuItems () {
    this.service.getAllRecipes().subscribe(res => {
      console.log('menu:', res)
      this.menuItems = res;
    })
  }

   menuItem(id:number){
    this.router.navigate(['/recipe', id]);
  }
}
