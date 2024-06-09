import { Route, Routes } from "react-router-dom"
import Header from "./components/header"
import Home from "./pages/home"
import CreateProduct from "./pages/create-page"

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-product" element={<CreateProduct />} />
      </Routes>

    </>
  )
}

export default App