import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import HomePage from './pages/global/HomePage';
import Cart from './pages/global/Cart';
import ContactUs from './pages/global/ContactUs';
import Shops from './pages/global/Shops';
import SingleProduct from './pages/global/SingleProduct';
import AdminHome from './pages/admin/AdminHome';
import AddProduct from './pages/admin/AddProduct';
import EditProduct from './pages/admin/EditProduct';
import MaintainProducts from './pages/admin/MaintainProducts';
import MaintainCategories from './pages/admin/MaintainCategories';
import MaintainShops from './pages/admin/MaintainShops';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NotFound from './pages/global/NotFound';
import { useTranslation } from 'react-i18next';

// 1. Tõlkige Login ja Signup labelid ja buttonid
// 2. Lisage 3-4 keel Webshopi projekti --> i18n.js on vaja tekitada tõlked ja uued nupud navbari
// 3. Pange "Uudised" projektile peale ka tõlge ja Bootstrap

function App() {
  const { t, i18n } = useTranslation();

  const changeLangEn = () => {
    i18n.changeLanguage("en");
    localStorage.setItem("language", "en");
  }

  const changeLangEe = () => {
    i18n.changeLanguage("ee");
    localStorage.setItem("language", "ee");
  }

  return (
    <div className="App">

    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">Webshop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/admin">{t("nav.admin")}</Nav.Link>
            <Nav.Link as={Link} to="/shops">{t("nav.shops")}</Nav.Link>
            <Nav.Link as={Link} to="/contact">{t("nav.contact")}</Nav.Link>
            <Nav.Link as={Link} to="/cart">{t("nav.cart")}</Nav.Link>
          </Nav>
          <Nav>
            <img className="lang" src="/english.png" onClick={changeLangEn} alt="" />
            <img className="lang" src="/estonian.png" onClick={changeLangEe} alt="" />
            <Nav.Link as={Link} to="/login">{t("nav.login")}</Nav.Link>
            <Nav.Link as={Link} to="/signup">{t("nav.signup")}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     
     <Routes>
      <Route path="" element={ <HomePage /> } />
      <Route path="cart" element={ <Cart /> } />
      <Route path="contact" element={ <ContactUs /> } />
      <Route path="shops" element={ <Shops /> } />
      <Route path="product" element={ <SingleProduct /> } />
      <Route path="admin" element={ <AdminHome /> } />
      <Route path="admin/add" element={ <AddProduct /> } />
      <Route path="admin/edit" element={ <EditProduct /> } />
      <Route path="admin/products" element={ <MaintainProducts /> } />
      <Route path="admin/categories" element={ <MaintainCategories /> } />
      <Route path="admin/shops" element={ <MaintainShops /> } />
      <Route path="login" element={ <Login /> } />
      <Route path="signup" element={ <Signup /> } />
      <Route path="*" element={ <NotFound /> } />
     </Routes>
    </div>
  );
}

export default App;
