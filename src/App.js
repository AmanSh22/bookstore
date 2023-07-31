import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import BookList from './components/BookList';
import HomePage from './components/HomePage';
import PageNotFound from './components/PageNotFound';
import {navbar} from './styles/GlobalStyle'
import logo from './logo.svg'

function App() {
  const name = 'Aman';
  return (
    <BrowserRouter>
      <div >
          {/* <NavLink style={{marginRight:'10px'}}  to='/'>Home</NavLink> */}
          <NavLink to="/" style={{...navbar}}>
                            Home
                        </NavLink>
          {/* <NavLink to='/Books'>Books</NavLink> */}
          <NavLink to="/Books" style={{...navbar}}>
                            Books
                        </NavLink>
      </div>

          <Routes>
            <Route path='/' element={<HomePage name={name} />}/>
            <Route path='/Books' element={<BookList name={name} />}/>
            <Route path='*' element={<PageNotFound name={name} />}/>
          </Routes>
          <img src={logo} alt="logo" />

          
          
    </BrowserRouter>
  );
}

export default App;
