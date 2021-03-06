
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddReview from './Pages/DashBoard/AddReview';
import DashBoard from './Pages/DashBoard/DashBoard';

import Home from './Pages/Home/Home';
import Purchase from './Pages/Home/Purchase';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/SharedPage/Footer';
import Header from './Pages/SharedPage/Header';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import AddProduct from './Pages/DashBoard/AddProduct';
import ManageOrders from './Pages/DashBoard/ManageOrders';
import MakeAdmin from './Pages/DashBoard/MakeAdmin';
import MyOrders from './Pages/DashBoard/MyOrders';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import MyProfile from './Pages/DashBoard/MyProfile';
import ManageProduct from './Pages/DashBoard/ManageProduct';
import Payment from './Pages/DashBoard/Payment';
import Blogs from './Pages/Blogs/Blogs';
import RequireAdmin from './Pages/Login/RequireAdmin';

function App() {
  return (
    <div >
      <Header></Header>
      <div className='max-w-7xl mx-auto px-12' >


        <Routes>

          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/myportfolio' element={<MyPortfolio></MyPortfolio>}></Route>
          <Route path='/dashboard' element={<DashBoard></DashBoard>}>
            <Route index element={<MyProfile></MyProfile>}></Route>
            <Route path='addreview' element={<AddReview></AddReview>}></Route>
            <Route path='payment/:id' element={<Payment></Payment>}></Route>

            <Route path='myorder' element={<MyOrders></MyOrders>}></Route>
            <Route path='addproduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
            <Route path='manageorder' element={<RequireAdmin><ManageOrders></ManageOrders></RequireAdmin>}></Route>
            <Route path='manageproduct' element={<RequireAdmin><ManageProduct></ManageProduct></RequireAdmin>}></Route>
            <Route path='makeadmin' element={<RequireAdmin><MakeAdmin></MakeAdmin></RequireAdmin>}></Route>



          </Route>
          <Route path='/purchase/:id' element={
            <RequireAuth><Purchase></Purchase></RequireAuth>


          }></Route>
          <Route path='/blog' element={<Blogs></Blogs>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>





        </Routes>
        <Footer></Footer>


        <ToastContainer />


      </div>
    </div >
  );
}

export default App;
