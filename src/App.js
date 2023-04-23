import logo from './logo.svg';
import './App.css';
import Head from './Components/Head';
import Body from './Components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './Components/MainContainer';
import WatchPage from './Components/WatchPage';
const appRouter=createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[{
    path:"/",
    element:<MainContainer/>,
  },
  {
    path:"watch",
    element:<WatchPage/>
  }
  ]
}])

function App() {
  return (
    <div >
     <Provider store={store}>
      <Head/>
      <RouterProvider router={appRouter}/>
      </Provider>
      
    </div>
  );
}

export default App;
