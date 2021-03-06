import { Component, OnInit, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  constructor(private service: CommonService) { }
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
}
