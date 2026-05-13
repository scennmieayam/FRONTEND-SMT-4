import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from '../components/CartContext';

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}
