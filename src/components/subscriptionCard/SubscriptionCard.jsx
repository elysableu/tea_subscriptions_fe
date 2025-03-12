import './SubscriptionCard.css';

function SubscriptionCard({ id, title, price, status, frequency, getSubscriptionDetails }) {
    return(
        <section className="subscription_card_container" onClick={() => getSubscriptionDetails(id)}>
            <h3>{ title }</h3>
            <div className="sub_card_info">
                <p>Price per Box: ${ price }</p>
                <p>Delivered { frequency }</p>
                <p>Status: { status }</p>
            </div>
        </section>
    );
}

export default SubscriptionCard;