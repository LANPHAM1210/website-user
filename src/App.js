import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Product/Home';
import Login from './Pages/Context/Login';
import Resigter from './Pages/Context/Resigter';
import SmartPhone from './Pages/Product/SmartPhone';
import Iphone from './Pages/Product/Iphone';
import SamSung from './Pages/Product/SamSung';
import Oppo from './Pages/Product/Oppo';
import Realme from './Pages/Product/Realme';
import Redmi from './Pages/Product/Redmi';
import OrderCheck from './Pages/Product/OrderCheck';
import Cart from './Pages/Product/Cart';
import Search from './Pages/Product/Search';
import ProductList from './components/ProductList/ProductList'
import ListProduct from './components/ProductList/ProductList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/resigter' element={<Resigter />} />
        <Route path='/dien-thoai' element={<SmartPhone />} />
        <Route path='/iphone' element={<Iphone />} />
        <Route path='/sam-sung' element={<SamSung />} />
        <Route path='/oppo' element={<Oppo />} />
        <Route path='/realme' element={<Realme />} />
        <Route path='/redmi' element={<Redmi />} />
        <Route path='/kiem-tra-don-hang' element={<OrderCheck />} />
        <Route path='/gio-hang' element={<Cart />} />
        <Route path='/reno8T' element={<ProductList />} />
        <Route path='/prod/:id' exact element={<ListProduct />} />
        <Route path='/search/:searchKey' exact element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
