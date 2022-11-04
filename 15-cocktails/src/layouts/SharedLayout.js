import {Outlet} from 'react-router-dom'
// import Navbar from '../components/Navbar'
import Navbar from '../components/Navbar'

const SharedLayout = () => {
   return (
      <>
         <Navbar /> {/* Show navbar on all pages that are nested inside SharedLayout */}
         <Outlet /> {/* Yield the contents of any page that are nested inside SharedLayout */}
      </>
   );
};
export default SharedLayout;
