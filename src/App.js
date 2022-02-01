import { Route, Routes } from "react-router";
import Navbar from './components/Navbar/Navbar';
import ProductList from './components/ProductList/ProductList';
import ProductDetail from "./components/ProductDetail/ProductDetail";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<ProductList />} />
        <Route path='/vst/:id' element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
