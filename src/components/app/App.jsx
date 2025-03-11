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
      setSubscriptions(data);
    })
  }

  useEffect(() => {
    getSubscriptions();
  }, []);

  const getSubscriptionDetails = (subId) => {
    fetch(`${baseURL}/api/v1/subscriptions/${subId}`)
    .then(response => {
      return response.json()
    })
    .then(data => {
      setDetails(data);
      navigate(`/${subId}`)
    })
  }

  const updateSubscriptionStatus = (status) => {
    
  }

  const handleStatusChange = (status) => {
    if (status === "active" )
      updateSubscriptionStatus("canceled");
    else if (status === "canceled") {
      updateSubscriptionStatus("active");
    }
  }

  
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
          <Route path="/:subId" element={<DetailsPage details={details} handleStatusChange={handleStatusChange}/>}/>
        </Routes>
      </section>
    </main>
  )
}

export default App;
