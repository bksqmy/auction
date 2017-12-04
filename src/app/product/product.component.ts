import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public products: Array<ProductInfo>;
  constructor() {
  }
  ngOnInit() {
    this.products = [
      new ProductInfo(1, '第一个商品', 899, 3.5, '这是一个垃圾电脑', ['电子产品', '家电']),
      new ProductInfo(2, '第二个商品', 899, 3.5, '这是一个垃圾电脑', ['电子产品', '家电']),
      new ProductInfo(3, '第三个商品', 899, 3.5, '这是一个垃圾电脑', ['电子产品', '家电']),
      new ProductInfo(4, '第四个商品', 899, 3.5, '这是一个垃圾电脑', ['电子产品', '家电']),
      new ProductInfo(5, '第五个商品', 899, 3.5, '这是一个垃圾电脑', ['电子产品', '家电']),
      new ProductInfo(6, '第六个商品', 899, 3.5, '这是一个垃圾电脑', ['电子产品', '家电'])
    ];
  }

}

export class ProductInfo {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {

  }
}

