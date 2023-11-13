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
import NavDropdown from 'react-bootstrap/NavDropdown';

// Favicon
// Rakenduse tabi nimi muuta
// Font muuta
// Not Found leht tekitada
// Firebase-i üles panna täpselt samamoodi nagu me varasemalt teinud oleme

function App() {
  return (
    <div className="App">

    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
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
     </Routes>
    </div>
  );
}

export default App;
