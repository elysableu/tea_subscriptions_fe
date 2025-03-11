import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Homepage from '../homepage/Homepage';
import SubscriptionsPage from '../subscriptionsPage/SubscriptionsPage';
import DetailsPage from '../detailsPage/DetailsPage'

import './App.css'

function App() {
  const baseURL = "http://localhost:3000"
  const navigate = useNavigate();
  const [subscriptions, setSubscriptions] = useState(null);
  const [details, setDetails] = useState(null);
  
  const getSubscriptions = () => {
    fetch(`${baseURL}/api/v1/subscriptions`)
    .then(response => {
     return response.json()})
    .then(data => {
      console.log(data)
      setSubscriptions(data);
    })
  }

  const getSubscriptionDetails = (subId) => {
    fetch(`${baseURL}/api/v1/subscriptions/${subId}`)
    .then(response => {
      console.log(response)
      return response.json()
    })
    .then(data => {
      setDetails(data);
      navigate(`/${subId}`)
    })
  }

  useEffect(() => {
    getSubscriptions();
  }, []);

  const handlePortalNav = () => {
    navigate('/subscriptions')
  }

  return (
    <main>
      <Header />

      <section className="content">
        <Routes>
          <Route path="/" element={<Homepage portalNav={ handlePortalNav } />} />
          <Route path="/subscriptions" element={<SubscriptionsPage subscriptions={subscriptions} getSubscriptionDetails={getSubscriptionDetails} />} />
          <Route path="/:subId" element={<DetailsPage details={details} />}/>
        </Routes>
      </section>
      
    </main>
  )
}

export default App;
