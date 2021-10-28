import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './component/Context/AuthProvider';
import About from './component/Pages/About/About';
import Destination from './component/Pages/Destination/Destination';
import Home from './component/Pages/Home/Home';
import Login from './component/Pages/Login/Login';
import NotFound from './component/Pages/PageNotfound/NotFound';
import Header from './component/Pages/Shared/Header/Header';
import Special from './component/Pages/Special/Special';

function App() {
  return (
    <div className="App">
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
            <Route path='/destination'>
              <Destination></Destination>
            </Route>
            <Route path='/special'>
              <Special></Special>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
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
