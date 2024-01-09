import Login from "./components/Login";
import MainPage from "./components/MainPage"
import ViewCart from "./components/ViewCart";
import ViewProduct from "./components/ViewProduct";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import SearchResult from "./components/SearchResult";

const App = () => {
  return (
  <BrowserRouter>
  <Routes>
  <Route path='/'element={<Login/>}/>
  <Route path='/mainpage' element={<MainPage/>}/>
  <Route path='/viewcart' element={<ViewCart/>}/>
  <Route path='/viewproduct' element={<ViewProduct/>}/>
  <Route path='/searchresult' element={<SearchResult/>}/>
  </Routes>
  </BrowserRouter>
  );
};


export default App;
