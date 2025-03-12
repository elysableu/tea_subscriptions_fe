import './SubscriptionsPage.css';
import SubscriptionCard from '../subscriptionCard/SubscriptionCard';

function SubscriptionsPage({ subscriptions, getSubscriptionDetails }) {
    if(!subscriptions) {
        return(
            <h3>Loading...</h3>
        );
    }

    const sortedSubscriptions = subscriptions.data.sort((a, b) => {
        return a.attributes.title.toLowerCase().localeCompare(b.attributes.title.toLowerCase())
    })

    const subscriptionCards = sortedSubscriptions.map((subscription) => {
        return (
            <SubscriptionCard 
                key={subscription.id}
                id={subscription.id}
                title={subscription.attributes.title}
                price={subscription.attributes.price}
                status={subscription.attributes.status}
                frequency={subscription.attributes.frequency}
                getSubscriptionDetails={getSubscriptionDetails}
            />
        );
    })

    return (
        <section className="subscriptions_container">
            <h2>Subscriptions</h2>
            {subscriptionCards}
        </section>
    );
}

export default SubscriptionsPage;