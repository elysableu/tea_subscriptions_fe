import './CustomersContainer.css';
import CustomerCard from '../customerCard/CustomerCard';

function CustomersContainer({ customers }) {

    const customerCards = customers.map((customer) => {
        return (
            <CustomerCard />
        );
    })

    return (
        <section className='customer_card_container'>
            {customerCards}
        </section>
        
    );
}

export default CustomersContainer;