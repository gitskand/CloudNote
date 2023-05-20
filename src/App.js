import './App.css';

import Navbar from './component/Navbar';
import Alert from './component/Alert'
import Home from './component/Home';
import About from './component/About'
import Login from './component/Login';
import Signup from './component/Signup'
import NoteState from './context/notes/NoteState';
import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {

  const [alert, setAlert] = useState(null);



  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };


  return (
    <>
       <NoteState showAlert={showAlert} >
        <Router>
          <Navbar />
          <Alert alert={alert} />
          <div className='container'>

            <Routes>
              <Route path="/" element={<Home key="home" />} />
              <Route exact path="/" element={<Home showAlert={showAlert} key="home" />} />
              <Route exact path="/about" element={<About key="about"  />} />
              <Route exact path="/login" element={<Login showAlert={showAlert} key="login"  />} />
              <Route exact path="/signup" element={<Signup showAlert={showAlert} key="signup" />} />
            </Routes>
          </div>
        </Router>
      </NoteState>

    </>
  );
}
export default App;
