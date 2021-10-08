
import './App.css';
import { CatalogueProvider } from './components/providers/catalogue';
import { CartProvider } from './components/providers/cart';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <CatalogueProvider>
        <CartProvider>
          <h2 className="catalogue-title"> Produtos disponíveis </h2>
          <ProductList type="catalogue" />
          <h4 className="cart-title"> Carrinho </h4>
          <ProductList type="cart" />
        </CartProvider>
      </CatalogueProvider>
    </div>
  );
}

export default App;
