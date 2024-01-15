
import { Route, Routes } from 'react-router-dom'

import HomePage from './Pages/HomePage/HomePage.jsx'
import AboutPage from './Pages/AboutPage/AboutPage.jsx'
import Packages from './Pages/PackagesPage/Packages.jsx'





function App() {
    return (
    <>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/Packages' element={<Packages />} />
        </Routes>
    </>
    )
}

export default App
