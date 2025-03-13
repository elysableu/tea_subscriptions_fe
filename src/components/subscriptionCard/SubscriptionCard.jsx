import './SubscriptionCard.css';
import Teapot from '../../assets/coffee-tea-kettle-icon.svg'

function SubscriptionCard({ id, title, price, status, frequency, getSubscriptionDetails }) {
    return(
        <section className="subscription_card_container" onClick={() => getSubscriptionDetails(id)}>
            <div>
                <img src={Teapot}/>
                <h3>{ title }</h3>
            </div>
            <div className="sub_card_info">
                <p>Price per Box: ${ price }</p>
                <p>Delivered { frequency }</p>
                <p>Status: { status }</p>
            </div>
        </section>
    );
}

export default SubscriptionCard;