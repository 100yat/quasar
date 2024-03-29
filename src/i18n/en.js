export default {
  title: 'ѣ',
  menu: {
    title: 'Navigate',
    home: 'Home',
    homeDesc: 'Go back to the main page',
    sign: 'Connect',
    signDesc: 'Get the key',
    clear: 'Clear',
    clearDesc: 'Remove traces on the device',
    code: 'Github',
    codeDesc: 'Repository',
    help: 'FAQ',
    helpDesc: 'About',
    transaction: 'Transactions',
    transactionDesc: 'Get transactions',
    contacts: 'Contacts',
    contactsDesc: 'View contacts',
    topUsers: 'Ranking of participants',
    topUsersDesc: 'Find yourself among the first ones!'
  },
  sign: {
    t1: 'Hi! Welcome to Yat, the value exchange system. I have already come up with a unique mnemonic phrase for you - consider it your digital signature, necessary to identify yourself. I do not have it stored and therefore cannot be restored. Now only you know it, so write it down carefully on paper or at least copy it by clicking on it and put it somewhere.',
    t2: 'And to interact with me and the rest of the participants, you already have your public address, which was transferred directly from the digital signature',
    t3: 'All that remains is to enter and memorize a strong password',
    copy: 'Phrase phrase is copied',
    pwd: 'Password is copied',
    protect: 'To protect the signature',
    pwd0: 'Too weak password',
    pwd1: 'Weak password',
    pwd2: 'Good password',
    pwd3: 'Strong password',
    pwd4: 'Very strong password',
    pwdMust: "It's better to enter the password",
    pwdMore: "It's better to enter more than 6 characters",
    know: 'I remember my phrase!',
    mnemonic: 'Your mnemonic phrase',
    publicKey: 'Your public address'
  },
  enter: {
    remember: 'Remember your password',
    hint: 'Password for mnemonic phrase'
  },
  failed: 'Failed',
  success: 'Success',
  password: 'Password',
  cancel: 'Cancel',
  ok: 'Ok',
  characters: 'Numbers, letters, special characters',
  next: 'Continue',
  get: 'Get',
  send: 'Send',
  slider: {
    w1: 'openness',
    w2: 'immutability',
    w3: 'provability',
    w4: 'security',
    w5: 'reliability'
  },
  titles: {
    topUsersTitle: 'Ranking of participants',
    contacts: 'Contacts'
  },
  transactionMessage: {
    successfull: 'Transaction completed'
  },
  import: 'Export/Import',
  dowloadJson: 'Download JSON-file',
  uploadJson: 'JSON-file',
  placeholder: 'Find ',
  aboutPlatform: {
    bannerTexts: {
      banner1: "Why we're reliable..."
    },
    navHeaderItems: {
      openness: 'Openness',
      free: 'Free',
      security: 'Safety'
    },
    opennessText: {
      p1: 'It is an open unchangeable provable ledger.',
      p2: 'A system that allows you to transparently monitor the movement of funds within yourself.'
    },
    freeText: 'Free access to transaction history.',
    securityText: {
      p1: 'Each successive transaction bears the imprint of the previous one, which is an insurmountable obstacle to changing the content of the latter.',
      p2: 'Transactions are algorithmically signed by the sender, eliminating the possibility of tampering.'
    }
  },
  errorMessages: {
    scanQr: {
      NotAllowedError: {
        headerErr: 'Access to the camera was not authorized!',
        textErr: 'In accordance with the privacy and data protection policy, access in the browser settings must be allowed! Please check this. Then refresh the page and allow access to the device camera in a second request.'
      },
      NotFoundError: '',
      NotSupportedError: '',
      NotReadableError: '',
      OverconstrainedError: '',
      StreamApiNotSupportedError: '',
      InsecureContextError: ''
    }
  },
  buttons: {
    requestCameraAccess: 'Request access to the camera',
    reloadPage: 'Reload the page'
  },
  confirmMessages: {
    clearDevice: {
      clearQuestion: 'Remove wallet access from this device?',
      info: "Don't worry! You can always regain access to your wallet on this or another device using a mnemonic phrase or 'ceed' key."
    }
  }
}
