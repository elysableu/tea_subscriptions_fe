import './SubscriptionsPage.css';
import { useState, useEffect } from 'react';
import SubscriptionCard from '../subscriptionCard/SubscriptionCard';

function SubscriptionsPage({ subscriptions, getSubscriptionDetails, sortSubs }) {
    
    if(!subscriptions) {
        return(
            <h3>Loading...</h3>
        );
    }
    
    const [displayedSubscriptions, setDisplayedSubscriptions ] = useState(subscriptions.data || []);

    useEffect(() => {
            setDisplayedSubscriptions(subscriptions.data);
    }, [subscriptions])

    const handleSort = () => {
        console.log(displayedSubscriptions)
        const sorted = sortSubs([...displayedSubscriptions]);
        console.log(sorted);
        setDisplayedSubscriptions(sorted);
    }

    const subscriptionCards = displayedSubscriptions.map((subscription) => {
        console.log("in map:", subscription.attributes.title)
        return (
            <SubscriptionCard 
                key={subscription.id}
                id={subscription.id}
                title={subscription.attributes.title}
                price={subscription.attributes.price}
                status={subscription.attributes.status}
                frequency={subscription.attributes.frequency}
                getSubscriptionDetails=
                {getSubscriptionDetails}
            />
        );
    })

    return (
        <section className="subscriptions_container">
                <h2>Subscriptions</h2>
                <button onClick={() => {handleSort()}}>sort</button>
            {subscriptionCards}
        </section>
    );
}

export default SubscriptionsPage;