import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/services/manager/manager.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  products: any = [];

  constructor(private manager: ManagerService) {}
  ngOnInit(): void {
    this.loadData()
  }
  
  loadData() {
    this.manager.get("https://fakestoreapi.com/products")
    .subscribe(value => {
      console.log(Object.values(value));
      this.products = value 
      console.log(this.products);
    })
  }
}
