import './DetailsCard.css';

function DetailsCard({ price, status, frequency}) {
    return (
        <section className="details_card_container">
            <p>Price: ${price}</p>
            <p>Delivered {frequency}</p>
            <p>Status: {status}</p>
        </section>
    );
}

export default DetailsCard;