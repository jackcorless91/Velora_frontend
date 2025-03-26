import { Route, Routes } from "react-router-dom";
import Home from "./Compoments/Pages/Home.jsx";
import LogInPage from "./Compoments/Pages/LogInPage.jsx";
import SignUpPage from "./Compoments/Pages/SignUpPage.jsx";
import AdminPage from "./Compoments/Pages/AdminPage.jsx";


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<LogInPage />} />
        <Route path='/admin' element={<AdminPage />} />
      </Routes>
    </div>
  )
}

export default App
