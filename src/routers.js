import Login from './components/Login/Login';
// import SignUp from './Signup';
import App from './App';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";

function Routers () {
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            {/* <Route path="/sign-up" element={<SignUp />} /> */}
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    )
}

export default Routers;