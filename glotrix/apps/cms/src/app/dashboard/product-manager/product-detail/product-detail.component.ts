import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../../shared';

@Component({
  selector: 'gt-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  images: string[] = [
    "https://upload.wikimedia.org/wikipedia/commons/9/9e/Timisoara_-_Regional_Business_Centre.jpg",
    "http://www.timisoaranight.gruzphoto.eu/IMG_8554.jpg",
    "https://speakzeasy.files.wordpress.com/2015/05/twa_blogpic_timisoara-4415.jpg"
  ];

  product: IProduct = {
    name: "Televisor Samsung Smart 49", price: 1500.49, quantity: 50, category: "Eletronica",
    description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
  };

  constructor() { }

  ngOnInit() {
  }

}
