import { FieldType } from "@glotrix/ui/forms";
import { Banner } from '@glotrix/ui/login';

export const banner: Banner = {
  upperText: 'BXCOMMERCE',
  title: 'Te esperábamos!',
  imageUrl: 'https://thumbs.dreamstime.com/z/mobile-shopping-online-cartoon-business-idea-concept-47222246.jpg',
  contentText: 'Aquí encontrarás lo que estabas buscando. Tenemos cada día más tiendas a tu alcance!. Compra fácil ràpido y seguro ahorrando tiempo y dinero con nuestras ofertas. Pago Contra Entrega.Ventajas: Extensa variedad De productos.'
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
