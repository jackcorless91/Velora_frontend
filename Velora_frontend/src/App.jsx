import './App.css'
import Home from "./Compoments/Pages/Home.jsx"
import LogInPage from "./Compoments/Pages/LogInPage.jsx"
import SignUpPage from "./Compoments/Pages/SignUpPage.jsx"


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<LogInPage />} />
      </Routes>
    </div>
  )
}

export default App
