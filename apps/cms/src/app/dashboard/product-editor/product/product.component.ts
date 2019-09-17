import { Component, OnInit } from '@angular/core';
import { FieldType } from '@glotrix/ui/forms';

@Component({
  selector: 'gt-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  files: File[] = [];
  entries: FieldType[];

  constructor() {}

  ngOnInit() {
    this.entries = this.getEntrys();
  }

  onFilesLoaded(filesLoaded: File[]) {
    this.files = filesLoaded;
  }
  getEntrys() {
    const entries: FieldType[] = [
      {
        controlType: 'textbox',
        value: '',
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
        value: '',
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
        value: '',
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
        value: '',
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
