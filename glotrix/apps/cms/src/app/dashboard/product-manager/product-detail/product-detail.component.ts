import { Component, OnInit } from '@angular/core';
import { TextboxEntry, EntryBase, TextblockEntry } from '@glotrix/ui/forms';
import { Product } from '../../../models/Product';
import { Image } from '@glotrix/ui/images-upload';
@Component({
  selector: 'gt-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  entries: EntryBase<any>[];
  product: Product = {
    name: 'Televisor Samsung Smart 49', price: 1500.49, quantity: 50, category: 'Eletronica',
    images: [
      { name: 'image 1', url: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Timisoara_-_Regional_Business_Centre.jpg' },
      { name: 'image 2', url: 'http://www.timisoaranight.gruzphoto.eu/IMG_8554.jpg' },
      { name: 'image 3', url: 'https://speakzeasy.files.wordpress.com/2015/05/twa_blogpic_timisoara-4415.jpg' }
    ],
    description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
  };

  constructor() { }

  ngOnInit() {
    this.entries = this.getEntrys();
  }

  getEntrys() {
    const entries: EntryBase<any>[] = [
      new TextboxEntry({
        key: 'name',
        label: 'Name',
        value: this.product.name,
        required: true,
        minlength: 3,
        order: 1,
        col: 'col-sm-12',
        validationMessages: {
          required: 'Name is required.',
          minlength: 'Name must be at least three characters.',
          maxlength: 'Name cannot exceed 30 characters.'
        }
      }),
      new TextblockEntry({
        key: 'description',
        label: 'Description',
        value: this.product.description,
        required: true,
        rows: 10,
        minlength: 3,
        order: 2,
        col: 'col-sm-12',
        validationMessages: {
          required: 'Description is required.',
          minlength: 'Description must be at least three characters.',
          maxlength: 'Description cannot exceed 30 characters.'
        }
      }),
      new TextboxEntry({//This should be a currency entry. TBD
        key: 'price',
        label: 'Price',
        value: this.product.price,
        required: true,
        minlength: 2,
        order: 3,
        col: 'col-sm-3',
        validationMessages: {
          required: 'Price is required.',
        }
      }),
      new TextboxEntry({
        key: 'quantity',
        label: 'Quantity',
        value: this.product.quantity,
        required: true,
        minlength: 2,
        order: 4,
        col: 'col-sm-3',
        validationMessages: {
          required: 'Quantity is required.',
          minlength: 'Quantity must be at least three characters.',
          maxlength: 'Quantity cannot exceed 30 characters.'
        }
      })
    ];

    return entries.sort((a, b) => a.order - b.order);
  }
}
