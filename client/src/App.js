import React, { useEffect } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import {BrowserRouter, Redirect, Route, Switch, withRouter} from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'
import Header from './components/statics/Header'
import Home from './components/statics/Home'
// import {MuiThemeProvider} from '@material-ui/styles';

import './config/dataTableTheme'
// import './App.css'

import Login from './components/User/Login'
import Register from './components/User/Register'
import Dashboard from './components/Dashboard'

import PurchaseList from './components/Purchases/PurchaseList'
import PurchaseShow from './components/Purchases/showPurchase'
import ReportList from './components/Reports/ReportList'
import CategoriesList from './components/Categories/CategoriesList'
import ProductsList from './components/Products/ProductsList'
import Dealers from './components/AllUsers/Dealers/Dealers'
import EmployeesList from './components/AllUsers/Employees/Employees'
import StocksList from './components/Stocks/stockList'
import ExpenseList from './components/Expenses/expensesList'
import ExpenseShow from './components/Expenses/show-expense'
import BillShow from './components/Bills/showBill'
import BillList from './components/Bills/billList'
import Customers from './components/AllUsers/Customers/Customers'
import FormBill from './components/Bills/FormBill'
import {startCheckUserAuth} from './actions/user'


function App(props) {
  const dispatch = useDispatch()
  useEffect(()=>{
    if(!localStorage.getItem('authToken')){
      dispatch(startCheckUserAuth())
      // console.log(window.location.hash)
      // props.history.push(window.location.pathname)
    }
  },[])
  return (
    <BrowserRouter>
    {/* <MuiThemeProvider> */}

    
      <CssBaseline />
      <Header/>
      <div className='container'>
        <Switch>
          {/* <Route path="/" component={Home} exact/> */}
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          {props.user.isLoggedIn &&
          <>
          <Route path="/" component={Home} exact/>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/purchases" component={PurchaseList} exact={true} />
          <Route path="/purchases/:id" component={PurchaseShow} exact={true}/>
          <Route path="/categories" component={CategoriesList} />
          <Route path="/products" component={ProductsList} />
          <Route path="/dealers" component={Dealers} />
          <Route path="/employees" component={EmployeesList} />
          <Route path="/stocks" component={StocksList} />
          <Route path="/reports" component={ReportList} />
          <Route path="/expenses" component={ExpenseList} exact={true} />
          <Route path="/expenses/:id" component={ExpenseShow} exact={true}/>
          <Route path="/invoices" component={BillList} exact={true} />
          <Route path="/invoices/:id" component={BillShow} exact={true}/>
          <Route path="/customers" component={Customers} exact={true}/>
          <Route path="/test" component={FormBill} exact={true}/></>}
        </Switch>
      </div>
      {/* </MuiThemeProvider> */}
    </BrowserRouter>
  )
}
const mapStateToProps = (state) => {
  // console.log('props',state.user)
  return {
      user: state.user
  }
}

export default connect(mapStateToProps)(App)
