import Navbar from '../components/Navbar';
import { useCart } from '../components/CartContext';

export default function Cart() {
  const { cart } = useCart();

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h3>Cart</h3>
        {cart.map((item, i) => (
          <div key={i}>
            {item.name} - Rp {item.price}
          </div>
        ))}
      </div>
    </>
  );
}
