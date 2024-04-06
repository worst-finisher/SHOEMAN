import './App.css';
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Home from './screens/Home.js';
import Login from './screens/Login.js';
import Signup from './screens/Signup.js';
// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

import { CartProvider } from './components/ContextReducer.js';
import MyOrder from './screens/MyOrder.js';

function App() {
  return (
    <CartProvider>
        <Router>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/login' element={<Login/>} />
                <Route exact path='/login' element={<Login/>} />
                <Route exact path='/signup' element={<Signup/>} />
                <Route exact path='/signup' element={<Signup/>} />
                <Route exact path='/myorder' element={<MyOrder/>} />
            </Routes>
        </Router>
    </CartProvider>
  );
}

export default App;
