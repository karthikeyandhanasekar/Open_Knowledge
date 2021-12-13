import { Route, Routes } from "react-router-dom"
import Home from "./Home"


const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Home />} />
            <Route path="/signup" element={<Home />} />


        </Routes>
    )
}

export default Main