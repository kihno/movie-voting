import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './Signup.jsx'
import { RApolloProvider } from '@rocketgraphql/react-apollo'
import Login from './Login.jsx'
import { auth } from './utils/config.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RApolloProvider auth={auth} gqlEndpoint='https://hasura-c0elk0q.rocketgraph.app/v1/graphql'>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<App />} />
        </Routes>
      </Router>
    </RApolloProvider>
  </React.StrictMode>,
)
