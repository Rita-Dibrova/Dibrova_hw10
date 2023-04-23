import { Outlet } from "react-router-dom";
import style from './Products.module.css';
import image from '../../img/shop.png'
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import CreateError from '../CreateError/CreateError'

const Products = () => {
    return (
      <ErrorBoundary>  
        <div className={style.products}>
          <img src={image} alt={'shop'}/> 
          <p className={style.text}> This is Our Products! </p>
          <Outlet />
          <CreateError/>
        </div>
      </ErrorBoundary>  
    )
}
export default Products;