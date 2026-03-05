// // import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import { RouterProvider } from 'react-router'
// import router from './Router.jsx'
// import Layout from './Layout.jsx'
// import { Provider } from 'react-redux'
// import store from './Redux/slice.js'


// createRoot(document.getElementById('root')).render(
//   // <StrictMode>
//     <Provider store={store}>
//       <RouterProvider router={router}>
//         <Layout />
//       </RouterProvider>
//     </Provider>
//   // </StrictMode>,
// )


import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './Router.jsx'
import { Provider } from 'react-redux'
import store from './Redux/slice.js'
import UserContextProvider from './context/UserContextProvider'  // 👈 ADD THIS
// import Layout from './Layout.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <UserContextProvider>     {/* 👈 VERY IMPORTANT */}
      <RouterProvider router={router} />

    </UserContextProvider>
  </Provider>
)
