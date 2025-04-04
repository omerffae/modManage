// İmport Alanı:
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Product from "./pages/Product";
// import UpdateProduct from "./pages/UpdateProduct"; // Güncelleme sayfası
import Header from './components/Header';


function App() {
  return (
    <div className="">
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route index path="/" element={<Product/>}/>
      {/* <Route path="/update/:id" element={<UpdateProduct />} /> // Dinamik güncelleme sayfası */}
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
