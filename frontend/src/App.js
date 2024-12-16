// import React from "react";
// import './App.css'
// import {
//   BrowserRouter as Router,
//   Routes as Switch,
//   Route,
//   useHistory  
// } from "react-router-dom";

// import ImageInput from "./views/imageInput";
// import Recommendations from './views/Recommendations'
// import Form from "./views/Form";
// import Register from './views/Register';

// // MUI
// import CssBaseline from '@mui/material/CssBaseline';
// import Login from "./views/Login";
// import Navbar from "./views/Navbar";

// function App() {
//   return (
//     <>
//       <CssBaseline />
//       <Router>


//         <Navbar/>
      
//         <Switch>
//           <Route path="/" element={<ImageInput />} />
//           <Route path="/form" element={<Form />} />
//           <Route path="/recs" element={<Recommendations />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//         </Switch>

//       </Router>

//       {/* <Login/> */}

//       {/* <Signin/> */}
//     </>

//   );
// }

// export default App;











import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Navigate
} from "react-router-dom";

// Import your components
import ImageInput from "./views/imageInput";
import Recommendations from './views/Recommendations';
import Form from "./views/Form";
import Register from './views/Register';
import Login from "./views/Login";
import Navbar from "./views/Navbar";

// MUI
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const isLoggedIn = sessionStorage.getItem('loggedInUser'); // Check if user is logged in

  return (
    <>
      <CssBaseline />
      <Router>
        <Navbar />
        <Switch>
          {/* Redirect to /login if not logged in when trying to access the home page */}
          <Route
            path="/"
            element={isLoggedIn ? <ImageInput /> : <Navigate to="/login" />}
          />
          
          {/* Protect the /login and /register routes */}
          <Route
            path="/login"
            element={isLoggedIn ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/register"
            element={isLoggedIn ? <Navigate to="/" /> : <Register />}
          />

          {/* Other routes */}
          <Route path="/form" element={<Form />} />
          <Route path="/recs" element={<Recommendations />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
