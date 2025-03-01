import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  selectedItem: any
  items: any[] = []
  categories: string[] = []
  showItem: boolean = false;
  public constructor(private itemSrv: ItemService) { }

  ngOnInit(): void {
    this.getAllItems()
    this.getAllCategories()
  }



  setSelectedItem(item: any) {
    this.selectedItem = item
    this.showItem = true
    document.body.classList.add('modal-open');
  }

  closeModal() {
    this.showItem = false;
    document.body.classList.remove('modal-open');
  }

  getAllItems() {
    this.itemSrv.findAll().then((data: any) => {
      this.items = data
    })
  }

  getAllCategories() {
    this.itemSrv.http.get('items/categories').then((data: any) => {
      this.categories = data
    })
  }

}
