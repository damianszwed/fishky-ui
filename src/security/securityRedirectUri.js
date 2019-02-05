export default function() {
  if (process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'development') {
    return 'http://localhost:3000/implicit/callback';
  } else {
    return 'https://fishky-168.firebaseapp.com/implicit/callback'
  }
}

