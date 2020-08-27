import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private products =[{
    id:1,
    name:'Pollo',
    description: 'Es un pollo',
    price:123,
    category:'Pollos'
  },{
    id:2,
    name:'Pavo',
    description: 'Es un Pavo',
    price:12,
    category:'Aves'
  }];

  getAllProducts(){
    return this.products;
  }

  getProductById(id){
    return this.products.filter(product => product.id == id);
  }



  constructor() { }
}
