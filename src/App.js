
import './App.css';
import Index from './pages/index';
import './assets/css/tailwind.css'
import './assets/css/materialdesignicons.min.css'
import { Route,Routes } from 'react-router-dom';
import IndexTwo from './pages/indexTwo';
import IndexThree from './pages/indexThree';
import IndexFour from './pages/index-four';
import AboutUs from './pages/aboutus';
import HostingShared from './pages/hosting-shared';
import HostingVps from './pages/hosting-vps';
import HostingDedicated from './pages/hosting-dedicated';
import HostingCloud from './pages/hosting-cloud';
import HostingDomain from './pages/hosting-domain';
import HostingReseller from './pages/hosting-reseller';
import DomainDetail from './pages/domain-detail';
import Cart from './pages/cart';
import Checkouts from './pages/checkouts';
import MyAccount from './pages/my-account';
import Overview from './pages/helpcenter-overview';
import HelpcenterGuides from './pages/helpcenter-guides';
import HepcenterSuppport from './pages/helpcenter-support'
import Blogs from './pages/blogs';
import BlogDetails from './pages/blog-detail';
import Faq from './pages/helpcenter-faqs';
import Login from './pages/login';
import Signup from './pages/signup';
import ResetPassword from './pages/reset-password';
import LockScreen from './pages/lock-screen';
import Terms from './pages/terms';
import Privacy from './pages/privacy';
import Comingsoon from './pages/comingsoon';
import Maintenance from './pages/maintenance';
import Error from './pages/error';
import ThankYou from './pages/thankyou';
import Contact from './pages/contact';
import Software from './pages/software';
function App() {
  return (
    <Routes>
      <Route path='/' exact element={<IndexFour/>}/>
      <Route path='/index' exact element={<IndexFour/>}/>

      {/*<Route path='/index-two' exact element={<IndexTwo/>}/>
      <Route path='/index-three' exact element={<IndexThree/>}/>
      <Route path='/index-four' exact element={<IndexFour/>}/>*/}

      <Route path='/aboutus' exact element={<AboutUs/>}/>
      <Route path='/hosting-shared' exact element={<HostingShared/>}/>
      <Route path='/hosting-vps' exact element={<HostingVps/>}/>
      <Route path='/hosting-dedicated' exact element={<HostingDedicated/>}/>
      <Route path='/hosting-cloud' exact element={<HostingCloud/>}/>
      <Route path='/hosting-domain' exact element={<HostingDomain/>}/>
      <Route path='/hosting-reseller' exact element={<HostingReseller/>}/>
      <Route path='/domain-detail' exact element={<DomainDetail/>}/>
      <Route path='/domain-detail/:id' exact element={<DomainDetail/>}/>
      <Route path='/cart' exact element={<Cart/>}/>
      <Route path='/checkouts' exact element={<Checkouts/>}/>
      <Route path='/my-account' exact element={<MyAccount/>}/>
      <Route path='/helpcenter-overview' exact element={<Overview/>}/>
      <Route path='/helpcenter-guides' exact element={<HelpcenterGuides/>}/>
      <Route path='/helpcenter-support' exact element={<HepcenterSuppport/>}/>
      <Route path='/blogs' exact element={<Blogs/>}/>
      <Route path='/blog-detail' exact element={<BlogDetails/>}/>
      <Route path='/blog-detail/:id' exact element={<BlogDetails/>}/>
      <Route path='/helpcenter-faqs' exact element={ <Faq/>}/>
      <Route path='/login' exact element={ <Login/>}/>
      <Route path='/signup' exact element={ <Signup/>}/>
      <Route path='/reset-password' exact element={ <ResetPassword/>}/>
      <Route path='/lock-screen' exact element={ <LockScreen/>}/>
      <Route path='/terms' exact element={<Terms/>}/>
      <Route path='/privacy' exact element={<Privacy/>}/>
      <Route path='/comingsoon' exact element={<Comingsoon/>}/>
      <Route path='/maintenance' exact element={<Maintenance/>}/>
      <Route path='/error' exact element={ <Error/>}/>
      <Route path='/thankyou' exact element={<ThankYou/>}/>
      <Route path='/contact' exact element={<Contact/>}/>
      <Route path='/software' exact element={<Software/>}/>
      <Route path='/servicios' exact element={<IndexThree/>}/>
    </Routes>
   
  );
}

export default App;
