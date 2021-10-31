import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './component/Context/AuthProvider';
import About from './component/Pages/About/About';
import Home from './component/Pages/Home/Home';
import Login from './component/Pages/Login/Login';
import NotFound from './component/Pages/PageNotfound/NotFound';
import Header from './component/Pages/Shared/Header/Header';
import PlaceOrder from './component/Pages/OrderDetails/PlaceOrder';
import Mycart from './component/Pages/Mycart/Mycart';
import PrivateRoute from './component/Pages/PrivateRoute/PrivateRoute';
import AddNewService from './component/Pages/AddNewService/AddNewService';
import ManageAllService from './component/Pages/ManageAllServices/ManageAllService';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/mycart'>
              <Mycart></Mycart>
            </Route>
            <Route path='/booking'>
              <ManageAllService></ManageAllService>
            </Route>
            <Route path='/addServices'>
              <AddNewService></AddNewService>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <PrivateRoute path='/placeOrder/:id'>
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
