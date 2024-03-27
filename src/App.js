import logo from './logo.svg';
import './App.css';
import Header from './component/Head';
import  Body from './component/Body';
import Footer from './component/Footer'
import { Outlet, createBrowserRouter } from 'react-router-dom';
import Sub from './component/Sub';
import Library from './component/libaray'
import WatchPage from './component/watchpage';
function App() {
  return (
      <>
        
        <Header/>
        <Outlet />
        <Footer/>
      </>

    
  );
}
const router = createBrowserRouter([{
   path:"/",
   element:<App/>,
   children:[
    {
        path:"/",
        element:<Body/>,
    
    },
    {
        path:"/sub",
        element:<Sub/>
    },
    {
      path:"/lib",
      element:<Library/>
    }
    ,
    {
      path:"/watch/:id",
      element:<WatchPage/>
    }

  ]


}])
export default router;
