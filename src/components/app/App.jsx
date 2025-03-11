import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Homepage from '../homepage/Homepage';

import './App.css'

function App() {
  const [subscriptions, setSubscriptions] = useState({});
  cosnt [details, setDetails] = useState({});
  

  return (
    <main>
      <Header />

      <section className="content">
        <Routes>
          <Route path="/" element={<Homepage subscriptions={subscriptions}/>} />

        </Routes>
      </section>
      
    </main>
  )
}

export default App;
