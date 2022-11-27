import "./App.css";
import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter  from "./Components/Counter";
import AuthCompo from "./Components/Authcompo";

import GitProfs from "./githubDatabase";

import Layout from "./Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notification from "./Components/UI/Notification";
import {fetchCartData} from './store/mysqlActions';
import ProductShow from "./Components/ProductShow";

const st = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 20, 21, 22];



const ArrowFunc = (props) => {
  return (
    <div>

      <div class="text-center">
        <div class={props.sp} role="status">
          <span class="visually-hidden">Loading...</span>
          
        </div> 
      </div>
      <Counter/>
      <AuthCompo/>
    
    </div>
  );
};

function App() {
  let a = 10;
  // // let isInitial=true;
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.authR.isLoggedIn);
  const data=useSelector((state)=>state.mysqlSl);

  

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  // useEffect(() => {
  //   if (isInitial) {
  //     isInitial = false;
  //     return;
  //   }

  // }, [data, dispatch]);

  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Layout />}>
              <Route index element={<GitProfs />} />
              <Route path="Brijesh" element={<ArrowFunc sp="spinner-grow" />} />
              <Route
                path="Sunita"
                element={<ArrowFunc sp="spinner-border" />}
              />
              {/* <Route path="*" element={<NoPage />} /> */}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <ProductShow/>
      
    </Fragment>
  );
}

export default App;
