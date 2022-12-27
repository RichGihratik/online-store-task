export const validationInfo = {
  fullName: {
    val: '',
    isValid: false,
    regex: '/[a-z]{3,} [a-z]{3,}/',
    type: 'text',
    placeholder: 'Full name',
  },
  phone: {
    val: '',
    isValid: false,
    regex: '/^+[0-9]{9,}$/',
    type: 'number',
    placeholder: 'Phone number',
  },
  adress: {
    val: '',
    isValid: false,
    regex: '/w{5,} w{5,} w{5,}/',
    type: 'text',
    placeholder: 'Delivery adress',
  },
  email: {
    val: '',
    isValid: false,
    regex: '/^(([^<>()[].,;:s@"]+(.[^<>()[].,;:s@"]+)*)|(".+"))@(([^<>()[].,;:s@"]+.)+[^<>()[].,;:s@"]{2,})$/',
    type: 'text',
    placeholder: 'E-mail',
  },
  card: {
    val: '',
    isValid: false,
    regex: '^/[0-9]{16}/$',
    type: 'number',
    placeholder: 'Card number',
  },
  date: {
    val: '',
    isValid: false,
    regex: '/^(0[1-9]|1[0-2])\/?([0-9]{2})$/',
    type: 'number',
    placeholder: 'Date',
  },
  CVV: {
    val: '',
    isValid: false,
    regex: '/^[0-9]{3}$/',
    type: 'number',
    placeholder: 'Code',
  },
}