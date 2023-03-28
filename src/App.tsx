import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux' 
import Navbar from './components/Navbar'
import routes from './config/routes'
import { store } from './redux/store'

// import './App.css'

function App() {

  return (
    // TODO: Come back to this Browser Router and switch to Hash Router... maybe???
    <BrowserRouter>
      <Navbar/>


      {/* Need to use Routes in order to map over objects. 
      Basically making sure that when we change the url, it does what I want*/}
        {/* The below bit is going to map through the routes, and if the url is changed, it changes the page to that component */}

        <Provider store={store}>
          <Routes>
            { routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={
                  // route.protected ? (
                  // <AuthChecker>
                  //   <route.component />
                  // </AuthChecker>
                  // ) : (
                    <route.component />
                  // )
                }
                />
            )) }
          </Routes>
        </Provider>
    </BrowserRouter>
  )
}

export default App
