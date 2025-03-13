import './CustomerCard.css';
import Customer from '../../assets/female-icon.svg'

function CustomerCard({ first_name, last_name, email, address }) {

    return (
        <section className="customer_card">
            <div className="head">
                <img className="icon" src={Customer}/>
                <h4>{last_name}, {first_name}</h4>
            </div>
            <div className="customer_info">
                <p>Email: {email}</p>
                <p>Address: {address}</p>
            </div>
        </section>
    );
}

export default CustomerCard;