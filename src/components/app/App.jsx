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
  const [successMessage, setSuccessMessage] = useState("");
  const [statusError, setStatusError] = useState("");
  
  const getSubscriptions = () => {
    fetch(`${baseURL}/api/v1/subscriptions`)
    .then(response => {
     return response.json()})
    .then(data => {
      setSubscriptions(data);
    })
    .catch(error => console.log(error.message))
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
    .catch(error => console.log(error.message))
  }

  const updateSubscriptionStatus = (status, id) => {
    const newStatus = {subscription: {status: status}}
   
    fetch(`${baseURL}/api/v1/subscriptions/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newStatus),
    })
    .then(response => {
      console.log(response)
      response.status === 400 ? setStatusError("Subscription is already canceled!") : setStatusError("");
      return response.json();
    })
    .then(data => {
      getSubscriptions()
      getSubscriptionDetails(id)
      status === "canceled" ? setSuccessMessage("Subscription successfully canceled!") : setSuccessMessage("Subscription successfully reactivated!")
    })
    .catch(error => {
      console.log(error.message);
    })
  }

  const handleStatusChange = (status, id) => {
    // This is set up to handle future implementation of a reactivate behavior
    if (status === "active" ) {
      updateSubscriptionStatus("canceled", id); 
    } else if (status === "canceled") {
      updateSubscriptionStatus("active", id);
    }
  }

  const handlePortalNav = () => {
    navigate('/subscriptions')
  }

  const handleSort = (list) => {
    return [...list].sort((a, b) => {

        let targetA = "";
        let targetB = "";

        if (a.type === "customer" && b.type === "customer") {
            targetA = a.attributes.last_name;
            targetB = b.attributes.last_name;
        } else {
            targetA = a.attributes.title;
            targetB = b.attributes.title;
        }

        return targetA.toLowerCase().localeCompare(targetB.toLowerCase())
    })
};

  // Clear success and status messages after 3 seconds
  useEffect(() => {
    if (statusError) {
      const errorTimer = setTimeout(() => setStatusError(""), 7000);
      return () => clearTimeout(errorTimer);
    }
  }, [statusError]);

  useEffect(() => {
    if (successMessage) {
      const successTimer = setTimeout(() => setSuccessMessage(""), 7000);
      return () => clearTimeout(successTimer);
    }
  }, [successMessage]);

  return (
    <main>
      <Header />

      <section className="content">
        <Routes>
          <Route path="/" 
                element={<Homepage portalNav={ handlePortalNav } />} />
          <Route path="/subscriptions" 
                element={<SubscriptionsPage subscriptions={subscriptions} getSubscriptionDetails={getSubscriptionDetails} sortSubs={handleSort} />} />
          <Route path="/:subId" 
                element={<DetailsPage details={details} 
                                      handleStatusChange={handleStatusChange} 
                                      handlePortalNav={handlePortalNav}
                                      handleSort={handleSort}
                                      statusError={statusError}
                                      successMessage={successMessage}/>}/>
        </Routes>
      </section>
    </main>
  )
}

export default App;
