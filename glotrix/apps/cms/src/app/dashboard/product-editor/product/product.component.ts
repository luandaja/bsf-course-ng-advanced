import { Component, OnInit } from '@angular/core';
import { EntryBase, TextboxEntry, TextblockEntry } from '@glotrix/ui/forms';

@Component({
  selector: 'gt-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  entries: EntryBase<any>[];
  fileLoaded: File;
  previewImageUrl: any=null;

  constructor() { }

  ngOnInit() {
    this.entries = this.getEntrys();
  }
  getPreviewImageUrl() {
    const mimeType = this.fileLoaded.type;
    if (mimeType.match(/image\/*/) == null) {
      return null;
    }
    const reader = new FileReader();
    reader.readAsDataURL(this.fileLoaded);
    reader.onload = (_event) => {
      this.previewImageUrl.emit(reader.result);
    }
  }
  getEntrys() {
    const entries: EntryBase<any>[] = [
      new TextboxEntry({
        key: 'name',
        label: 'Name',
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
        required: true,
        rows: 5,
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
