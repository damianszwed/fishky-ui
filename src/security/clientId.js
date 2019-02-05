export default function clientId() {
  if (process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'development') {
    return '0oaj6j6hohhywaE450h7';
  } else {
    return '0oaj99kcfte5ERU0K0h7'
  }
}
