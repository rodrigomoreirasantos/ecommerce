import { combineReducers } from 'redux'
import userReducer from './reducers/user/user.reducer'
import cartReducer from './reducers/user/cart/cart.reducer'

const rootReducer = combineReducers({
  userReducer,
  cartReducer
})

export default rootReducer
