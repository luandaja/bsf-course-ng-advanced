import { Banner } from '@glotrix/ui/login';
import { FieldType } from '@glotrix/ui/forms';

export const banner: Banner = {
  upperText: 'BXCOMMERCE',
  title: 'Bienvenido',
  imageUrl: 'https://st2.depositphotos.com/8535708/11759/v/950/depositphotos_117593278-stock-illustration-vector-illustration-of-store-building.jpg',
  contentText: 'Te esperábamos, sigamos trabajando para el crecimiento de tu negocio.'
}

export const loginEntries: FieldType[] = [
  {
    controlType: 'textbox',
    value: '',
    key: 'username',
    label: 'Email',
    placeholder: 'user@example.com',
    order: 1,
    col: 'col-sm-12',

    validations: {
      pattern: {
        message: 'The email is not valid',
        value: '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'
      },
      minlength: {
        message: 'Password must be at least three characters.',
        value: 3
      },
      required: {
        message: 'Password is required.',
        value: true
      }
    }
  },
  {
    controlType: 'password',
    value: '',
    key: 'password',
    label: 'Password',
    order: 2,
    col: 'col-sm-12',
    validations: {
      minlength: {
        message: 'Password must be at least three characters.',
        value: 3
      },
      required: {
        message: 'Password is required.',
        value: true
      }
    }
  }
];
