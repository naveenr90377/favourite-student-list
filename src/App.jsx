import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import StudentList from "./pages/StudentList"
import Favourites from "./pages/Favourites"

const App = () => {

    return (
        <BrowserRouter>

        <nav className="flex items-center justify-center gap-8 bg-gray-900 px-6 py-4 shadow-lg">
    <Link  to="/" className="rounded-lg px-4 py-2 font-semibold text-white transition hover:bg-gray-700" >
        Student List
    </Link>

    <Link to="/favourites" className="rounded-lg px-4 py-2 font-semibold text-white transition hover:bg-gray-700">
        Favourite Students
    </Link>
</nav>
  <Routes> 
      <Route path="/"element={<StudentList />}  />
<Route  path="/favourites" element={<Favourites />}  />

            </Routes>

        </BrowserRouter>
    )
}

export default App