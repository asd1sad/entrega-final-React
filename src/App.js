import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { CartProvider } from './Context/CartContext'; 
import { AuthProvider } from './Context/AuthContext';
import{ AppRouter } from './routes/AppRouter'

function App() {
 
  return (
    <AuthProvider>
      <CartProvider>
        <AppRouter/>
      </CartProvider>
    </AuthProvider>  
  );
}

export default App;




















