import LandingPage from "./pages/LandingPage"
import {
  Routes,
  Route,
} from "react-router-dom";
import Payment from "./pages/Payment"

function App() {

  return (
    <>
      <Routes>  
        <Route path="/" element={<LandingPage />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>

    </>
  )
}

export default App
