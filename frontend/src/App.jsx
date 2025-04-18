import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import { Home } from "./components/home"
import { Signup } from "./components/signup"
import { Admin } from "./components/Admin"
import { Patient } from "./sub-components/Patient"
import { Record } from "./sub-components/Record"
import { MealDetails } from "./sub-components/MealDetails"
import { FullDetails } from "./sub-components/FullDetails"
import { Login } from "./components/login"

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/admin" element={<Admin/>}></Route>
        <Route path="/patient" element={<Patient/>}></Route>
        <Route path="/record" element={<Record/>}></Route>
        <Route path="/mealdetails" element={<MealDetails/>}></Route>
        <Route path="/full" element={<FullDetails/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
