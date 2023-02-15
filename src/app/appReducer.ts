import {API, ProductType, ResponseType} from "../API/API";
import {AppThunk} from "./Store";

const initState = {
  products: [] as ProductType[],
  total: 0 as number,
  skip: 0 as number ,
  limit: 0 as number,
  searchParams: {
    productName: ''
  }
}

type AppStateType = typeof initState

export const appReducer = (state = initState, action: AppActionsType): AppStateType => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {...state, ...action.products}
    default:
      return state
  }
}

export const setProducts = (products: ResponseType) => ({type: 'SET_PRODUCTS', products})

export type AppActionsType = ReturnType<typeof setProducts>

export const getProducts = (): AppThunk => async (dispatch, getState) => {
  const params = getState().app.searchParams

  try {
    const res = await API.getProducts(params)
    dispatch(setProducts(res.data))
  } catch (err) {

  } finally {

  }
}