import './App.css';
import Home from './components/Home.jsx';
import Layout from './components/Layout.jsx';
import React from 'react'
import Chats from 'chatapp/Chat'
import Email from 'emailapp/Email'
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
           <Route index element={<Home />} />
           <Route path="/chat" element={<Chats />} />
           <Route path="/email" element={<Email />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
