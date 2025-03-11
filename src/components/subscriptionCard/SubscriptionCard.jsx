import './SubscriptionCard.css';

function SubscriptionCard({ id, title, price, status, frequency }) {
    return(
        <section className="subscription_card_container">
            <h3>{ title }</h3>
            <p>Price per Box: ${ price }</p>
            <p>Delivered: { frequency }</p>
            <p>Status: { status }</p>
        </section>
    );
}

export default SubscriptionCard;