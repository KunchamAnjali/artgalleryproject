//import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Cart from './Components/Cart';
import Display from './Components/Display';
import Newarts from './Components/Newarts';
import Competitions from './Components/Competitions';
import Exhibitions from './Components/Exhibitions';
import Contact from './Components/Contact';
import ProductDetails from './Components/ProductDetails';
import CollectionProductDetails from './Components/CollectionProductDetails';
import UserTypeSelection from './Components/UserTypeSelection';
import { OldExhibitions } from './Components/OldExhibitions';
import ExhibitionDetail from './Components/ExhibitionDetail';
import Profile from './Components/profile';
import RegistrationForm from './Components/RegistrationForm';
import Payment from './Components/Payment';
import PasswordUpdateForm from'./Components/PasswordUpdateForm';
function App() {
  return (
    <>
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<UserTypeSelection />} />
          <Route path='/registrationform' element={<RegistrationForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/display" element={<Display />} />
          <Route path="/product/:id" component={CollectionProductDetails} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/newarts" element={<Newarts />} />
          <Route path="/product/:id" component={ProductDetails} />
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/exhibitions" element={<Exhibitions />} />
          <Route path='/oldexhibitions' element={<OldExhibitions />} />
          <Route path="/exhibitions" element={<OldExhibitions />} />
          <Route path="/exhibitions/:exhibitionId" element={<ExhibitionDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/PasswordUpdateForm" element={<PasswordUpdateForm />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
