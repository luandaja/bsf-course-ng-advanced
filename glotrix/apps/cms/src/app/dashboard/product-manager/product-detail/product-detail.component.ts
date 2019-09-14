import { Component, OnInit } from '@angular/core';

import { Product } from '../../../models/Product';
import { FieldType } from '@glotrix/ui/forms';
@Component({
  selector: 'gt-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  entries: FieldType[];
  product: Product = {
    name: 'Televisor Samsung Smart 49',
    price: 1500.49,
    quantity: 50,
    category: 'Eletronica',
    images: [
      {
        name: 'image 1',
        url:
          'https://upload.wikimedia.org/wikipedia/commons/9/9e/Timisoara_-_Regional_Business_Centre.jpg'
      },
      { name: 'image 2', url: 'http://www.timisoaranight.gruzphoto.eu/IMG_8554.jpg' },
      {
        name: 'image 3',
        url:
          'https://speakzeasy.files.wordpress.com/2015/05/twa_blogpic_timisoara-4415.jpg'
      }
    ],
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
  };

  constructor() { }

  ngOnInit() {
    this.entries = this.getEntrys(this.product);
  }
  getEntrys(product: Product) {
    const entries: FieldType[] = [
      {
        controlType: 'textbox',
        value: product.name,
        key: 'name',
        label: 'Name',
        order: 1,
        col: 'col-sm-12',
        validations: {
          minlength: {
            message: 'Name must be at least three characters.',
            value: 3
          },
          required: {
            message: 'Name is required.',
            value: true
          },
          maxlength: {
            message: 'Name cannot exceed 30 characters.',
            value: 30
          }
        }
      },
      {
        controlType: 'textblock',
        value: product.description,
        key: 'description',
        label: 'Description',
        rows: 5,
        order: 2,
        col: 'col-sm-12',
        validations: {
          minlength: {
            message: 'Name must be at least three characters.',
            value: 3
          },
          required: {
            message: 'Name is required.',
            value: true
          },
          maxlength: {
            message: 'Name cannot exceed 30 characters.',
            value: 30
          }
        }
      },
      {
        //This should be a currency entry. TBD
        controlType: 'textbox',
        value: product.price.toString(),
        key: 'price',
        label: 'Price',
        order: 3,
        col: 'col-sm-3',
        validations: {
          minlength: {
            message: 'Price must be at least three characters.',
            value: 2
          },
          required: {
            message: 'Price is required.',
            value: true
          }
        }
      },
      {
        controlType: 'textbox',
        value: product.quantity.toString(),
        key: 'quantity',
        label: 'Quantity',
        order: 4,
        col: 'col-sm-3',
        validations: {
          minlength: {
            message: 'Quantity must be at least three characters.',
            value: 4
          },
          required: {
            message: 'Quantity is required.',
            value: true
          }
        }
      }
    ];

    return entries.sort((a, b) => a.order - b.order);
  }
}
