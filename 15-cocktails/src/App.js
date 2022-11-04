import React from 'react'
import {Routes, Route} from 'react-router-dom'
import SharedLayout from './layouts/SharedLayout'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'
// import components
// import Navbar from './components/Navbar'

function App() {
  return (
    // See index.js. We wrapped the entire App component inside BrowserRouter so we can use Routes and Route. Both App and BrowserRouter is inside
    // AppProvider since we need to access the global context.
    <Routes>
      <Route path='/' element={<SharedLayout />}> {/* All components nested inside this will be wrapped inside the layout specified inside. */}
        <Route index element={<Home />} /> {/* Home Page */}
        <Route path="about" element={<About />} /> {/* About Page */}
        <Route path="cocktail/:id" element={<SingleCocktail />} /> {/* Shows a single cocktail */}
        <Route path="*" element={<Error />} /> {/* Error Page */}
      </Route>
    </Routes>
  )
}

export default App