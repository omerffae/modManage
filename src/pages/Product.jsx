// İmport Alanı:
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import Modal from '../components/Modal';
import Input from '../components/Input';
import Button from '../components/Button';
import { createDataFunc ,updateDataFunc} from '../redux/dataSlice';
import { modalFunc } from '../redux/modalSlice';
import { useLocation, useNavigate } from 'react-router-dom';


const Product = () => {
  const modal = useSelector(state => state.modal.modal);
  const {data , keyword}= useSelector(state => state.data);
  console.log("Redux Store'dan gelen data:", data); // BURAYA EKLE
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  //    State alanı:
  const [productInfo, setProductInfo] = useState({ name: "", price: "", url: "" });


  useEffect(() => {
    if (modal) {
      setProductInfo({ name: "", price: "", url: "" }); // Modal açıldığında verileri sıfırla
    }
  }, [modal]); // Modal state'i değiştiğinde tetiklenir



  const onChangeFunc = (e, type) => {
    if (type == "url") {
      setProductInfo(prev => ({ ...prev, [e.target.name]: URL.createObjectURL(e.target.files[0]) }))
    } else {
      setProductInfo(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

  }

  console.log(productInfo,"productInfo");
 
  
  
  let loc=location?.search.split('=')[1];
  useEffect(() => {
       if(loc){
        setProductInfo(data.find(dt=>dt.id==parseInt(loc)))
       }
  }, [loc]);


  console.log(location?.search.split('=')[1],"data");

  console.log(data ,"data");
  const buttonFunc = () => {
    dispatch(createDataFunc({
      ...productInfo, id:data.length + 1 // yeni ID ekleme
    }));
    dispatch(modalFunc());
  }

  const buttonUpdateFunc=()=>{
  dispatch(updateDataFunc({ ...productInfo, id: loc })); // Güncelleme ID'si burada
   dispatch(modalFunc());
   navigate('/');
 }

 const contentModal = (
    <>
      {/* İnput Alanı: */}
      <Input value={productInfo.name} type={"text"} placeholder={"Ürün Ekle.."} name={"name"} id={"name"} onChange={e => onChangeFunc(e, "name")} />
      <Input  value={productInfo.price} type={"text"} placeholder={"Fiyat Ekle.."} name={"price"} id={"price"} onChange={e => onChangeFunc(e, "price")} />
      <Input type={"file"} placeholder={"Resim Seç.."} name={"url"} id={"url"} onChange={e => onChangeFunc(e, "url")} />
      {/* Button Alanı: */}
      <Button btnText={loc ? "Ürün Güncelle" : "Ürün Oluştur.."} onClick={loc ? buttonUpdateFunc : buttonFunc} />
    </>
  )

const filteredItems = data.filter(dt => dt.name.toLowerCase().includes(keyword));

 return (
    <div>
      <div className='flex items-center flex-wrap'>
        {
          filteredItems?.map((dt, i) => (
            <ProductCard key={i} dt={dt} />
          ))
        }
      </div>
      {modal && <Modal content={contentModal} title={loc ? "Ürün Güncelle" : "Ürün Oluştur.."} />}
    </div>
  )
}

export default Product;
