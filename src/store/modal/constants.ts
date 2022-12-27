export const validationInfo = {
  fullName: {
    val: '',
    isValid: false,
    isAlert: false,
    regex: '^[a-z]{3,}\\s+[a-z]{3,}$',
    type: 'text',
    header: 'Full name',
    placeholder: 'Firstname Lastname',
    alert: 'Full name is incorrect. Should be composed no less than two words, at least three letters length each'
  },
  phone: {
    val: '',
    isValid: false,
    isAlert: false,
    regex: '^\\+[0-9]{9,}$',
    type: 'text',
    header: 'Phone number',
    placeholder: '+XXX XX XXX-XX-XX',
    alert: 'Phone number is incorrect. Should start with +, length isn`t shorter than 9, only numbers',
  },
  adress: {
    val: '',
    isValid: false,
    isAlert: false,
    regex: '^\\w{5,} +\\w{5,} +\\w{5,}$',
    type: 'text',
    header: 'Delivery adress',
    placeholder: 'Enter your address',
    alert: 'Adress is incorrect. Should be composed no less than three words, at least five letters length each'
  },
  email: {
    val: '',
    isValid: false,
    isAlert: false,
    regex: '^(([\\^<>\\()\\[]\\.,;:s@"]+(.[\\^<>\\()\\[]\\.,;:s@"]+)*)|(".+"))@(([\\^<>\\()\\[]\\.,;:s@"]+.)+[\\^<>\\()\\[]\.,;:s@"]{2,})$',
    type: 'text',
    header: 'E-mail',
    placeholder: 'example@gmail.com',
    alert: 'Email is incorrect. Follow example: myNickName@myService.domain'
  },
  card: {
    val: '',
    isValid: false,
    isAlert: false,
    regex: '^[0-9]{16}$',
    type: 'number',
    header: 'Card number',
    placeholder: 'XXXX XXXX XXXX XXXX',
    alert: 'Card number is incorrect. Number of digits must be 16',
  },
  date: {
    val: '',
    isValid: false,
    isAlert: false,
    regex: '^(0[1-9]|1[0-2])/?([0-9]{2})$',
    type: 'number',
    header: 'Expiration date',
    placeholder: 'ММ/YY',
    alert: 'Date is incorrect. Follow example: ММ/YY',
  },
  CVV: {
    val: '',
    isValid: false,
    isAlert: false,
    regex: '^[0-9]{3}$',
    type: 'number',
    header: 'CVV',
    placeholder: 'XXX',
    alert: 'Card number is incorrect. Number of digits must be 3',
  },
}