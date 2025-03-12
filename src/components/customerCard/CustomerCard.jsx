import './CustomerCard.css';

function CustomerCard({ first_name, last_name, email, address }) {

    return (
        <section className="customer_card">
            <h4>{last_name}, {first_name}</h4>
            <div className="customer_info">
                <p>Email: {email}</p>
                <p>Address: {address}</p>
            </div>
        </section>
    );
}

export default CustomerCard;