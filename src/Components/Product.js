// import { useDispatch } from 'react-redux';

// import { mysqlSliceActions } from '../store/MysqlSlice';

const Product = (props) => {
   
//   const dispatch = useDispatch();


//   const addToCartHandler = () => {
//     // and then send Http request
//     // fetch('firebase-url', { method: 'POST', body: JSON.stringify(newCart) })

//     dispatch(
//       mysqlSliceActions.replaceCart({
//         id,
//         name,
//         status,
//       })
//     );
//   };

  return (
    <div>
    
        <header>
          <h3>{props.id}</h3>
          <div >{props.name}</div>
        </header>
        <p>{props.status}</p>
        <button >fetch data -..</button>
    
    </div>
  );
};

export default Product;