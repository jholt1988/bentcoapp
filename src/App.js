import { Provider } from "react-redux"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Account from "./components/Account"
import LoginForm from "./components/LoginForm"
import RegisterForm from "./components/RegisterForm/Index"
import Home from "./screens/Home"
import store from "./store"

const App = () => (

    <Router>
      {/* <header>
        Add your navbar code here if you want common navbar.
      </header> */}

      <Routes>
        <Route exact path="/" component={Home} element={<Home />} />
        <Route path="/login" component={LoginForm} element={<LoginForm />} />
      <Route path="/user/account" component={Account} element={<Account />} />
      <Route path="/register" component={RegisterForm} element={ <RegisterForm/>}/>
      </Routes>
    </Router>

)

export default App
