import { DeliveryOption, Input } from "../../../../types/types";

export const orderFormInputs: Input[] = [
  {
    placeHolder: 'Country',
    name: 'country',
  },
  {
    placeHolder: 'City',
    name: 'city',
  },
  {
    placeHolder: 'Street',
    name: 'street',
  },
  {
    placeHolder: 'Phone number',
    name: 'phoneNumber',
    type: 'text',
  },
];

export const deliveryOptions: DeliveryOption[] = [
  {
    value: 'express',
    label: 'Express',
  },
  {
    value: 'standard',
    label: 'Standard',
  },
];

export const phoneRegExp = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
