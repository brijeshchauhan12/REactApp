
import { useSelector, useDispatch } from 'react-redux'
import { } from '../store/AuthSlice';

import Product from './Product';
const DUMMY_PRODUCTS = [
  {
    id: '3',
    name : "Bhumika",
    status: 'My First Book',
 
  },
  {
    id: '4',
    name : "Bhuvi",
    status: 'My Bhuvi Book',
 
  },
];
const ProductShow = (props) => {
  const data=useSelector((state)=>state.mysqlSl);
  console.log("logging herer");
  console.log(data);
  return (
    <div>
      <h2>Your Shopping Cart</h2>
      <ul>
        {data.items.map((item)=>{
          return (
            <Product
            key={item.id}
            id={item.id}
            name={item.name}
            status={item.status}
          />
          )
        })}
            
         
      </ul>
    </div>
  );
};

export default ProductShow;