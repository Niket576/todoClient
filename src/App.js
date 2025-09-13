// import { Routes, Route } from 'react-router-dom';
// import Landing from './pages/Landing/Landing.js';
// import Homepage from './pages/Home/Homepage.js'
// import Register from './pages/Auth/Register.js';
// import Login from './pages/Auth/Login.js';
// import About from './pages/About/About.js';
// import TodoList from './pages/Todos/TodoList.js';
// import { Toaster } from "react-hot-toast";


// function App() {
//   return (
//     <div >
//       <Routes>
//         <Route path='/' element={<Landing />} />
//         <Route path='/home' element={<Homepage />} />
//         <Route path='/register' element={<Register />} />
//         <Route path='/login' element={<Login />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/todoList' element={<TodoList />} />
//       </Routes>

//       <Toaster />

//     </div>
//   );
// }

// export default App;



import { HashRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing.js';
import Homepage from './pages/Home/Homepage.js';
import Register from './pages/Auth/Register.js';
import Login from './pages/Auth/Login.js';
import About from './pages/About/About.js';
import TodoList from './pages/Todos/TodoList.js';
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/home' element={<Homepage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<About />} />
          <Route path='/todoList' element={<TodoList />} />
        </Routes>

        <Toaster />
      </div>
    </HashRouter>
  );
}

export default App;
