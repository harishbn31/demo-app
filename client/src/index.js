import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import {startCheckUserAuth} from './actions/user'
import {startListProducts} from './actions/product'
import {getCategoriesList} from './actions/category'
import {getUsersList} from './actions/allUsers'
import {getPurchasesList} from './actions/purchase'
import { startListEmployees } from './actions/employee'
import { startListCustomers } from './actions/customer'
import { startListDealers } from './actions/dealer'

const store = configureStore()

// console.log(store.getState(), 'initial state')

store.subscribe(() => {
    // console.log(store.getState())
})
if(localStorage.getItem('authToken')){
    store.dispatch(startCheckUserAuth())
    store.dispatch(startListProducts())
    store.dispatch(getCategoriesList())
    store.dispatch(getPurchasesList())
    store.dispatch(getUsersList())
    store.dispatch(startListEmployees())
    store.dispatch(startListCustomers())
    store.dispatch(startListDealers())
}

// const jsx = (
//     <Provider store={store}>
//         <App/>
//     </Provider>
// )
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);

