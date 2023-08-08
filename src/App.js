import './App.css';
import Header from './Header';
import Layout from './Layout';
import RequireAuth from './pages/RequireAuth';
import {Route, Routes} from "react-router-dom"
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import {UserContextProvider} from './userContext';
import CreatePost from './pages/CreatePost';
import PostPage from './pages/PostPage';
import EditPost from './pages/EditPost';

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<Homepage />}/>
        <Route path='/post/:id' element={<PostPage />} />
        <Route path='/create' element={<CreatePost/>}/>
        <Route path='/login' element= {<Login/>}/>
        <Route path='/edit/:id' element={<EditPost/>} />
        <Route element={<RequireAuth/>}>
          <Route path='/register' element={<Register/>}/>
        </Route>
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
