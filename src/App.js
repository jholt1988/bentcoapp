import { Provider } from "react-redux"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Account from "./components/Account"
import LoginForm from "./components/LoginForm"
import RegisterForm from "./components/RegisterForm/Index"
import Home from "./screens/Home"
import MenuAppBar from './components/Header/index'
import AddToCartDialog from "./components/AddToCartForm"
import ProductCard from "./components/ProductCard"

const App = () => (

    <Router>
       <header>
        <MenuAppBar />
      </header> 

      <Routes>
        <Route exact path="/" component={Home} element={<Home />} />
        <Route path="/login" component={LoginForm} element={<LoginForm />} />
      <Route path="/user/account" component={Account} element={<Account />} />
      <Route path="/register" component={RegisterForm} element={<RegisterForm />} />
      <Route path="/product/add"  component={ProductCard} element={<ProductCard/>}/>
      </Routes>
    </Router>

)

export default App
