import {CardItem} from "../../UI/Card/Card";
import React, {useEffect} from "react";
import {ProductType} from "../../API/API";
import {useSelector} from "react-redux";
import {getProducts} from "../../app/appReducer";
import {AppDispatch, AppRootStateType} from "../../app/Store";
import s from './ProductList.module.css'

export const ProductLists = () => {
  const dispatch = AppDispatch();

  const search = useSelector<AppRootStateType, string>(state => state.app.searchParams.productName)

  useEffect(() => {
    dispatch(getProducts())
  }, [search])

  const products = useSelector<AppRootStateType, ProductType[]>(state => state.app.products)

  const productsMap = products.map(p => {
    return (<CardItem
      key={p.id}
      title={p.title}
      description={p.description}
      rating={p.rating} brand={p.brand}
      price={p.price}
      img={p.images[0]}/>)
  })

  return (

    <div className={`${s.wrapper} ${s.container}`}>
      {productsMap}
    </div>

  )
}