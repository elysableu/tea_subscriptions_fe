import './CustomersContainer.css';
import CustomerCard from '../customerCard/CustomerCard';

function CustomersContainer({ customers }) {

    const customerCards = customers.map((customer) => {
        return (
            <CustomerCard   key={customer.id}
                            id={customer.id}
                            first_name={customer.attributes.first_name}
                            last_name={customer.attributes.last_name}
                            email={customer.attributes.email}
                            address={customer.attributes.address}/>
        );
    })

    return (
        <section className='customer_card_container'>
            <h3>Subscribed Customers: </h3>
            {customerCards}
        </section>
        
    );
}

export default CustomersContainer;