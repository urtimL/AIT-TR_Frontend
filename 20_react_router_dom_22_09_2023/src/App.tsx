import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import Users from './Components/Users';
import Posts from './Components/Posts';
import Comments from './Components/Comments';
import Todo from './Components/Todo';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Users />} />
                <Route path='/posts' element={<Posts />} />
                <Route path='/comments' element={<Comments />} />
                <Route path='/todo' element={<Todo />} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
