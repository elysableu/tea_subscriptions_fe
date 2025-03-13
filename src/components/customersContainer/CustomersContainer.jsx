import './CustomersContainer.css';
import { useState, useEffect } from 'react';
import CustomerCard from '../customerCard/CustomerCard';

function CustomersContainer({ customers, sort }) {
    const [displayedCustomers, setDisplayedCustomers ] = useState([]);
        
    useEffect(() => {
        setDisplayedCustomers(customers);
    }, [customers])

    const handleSort = () => {
        console.log(displayedCustomers)
        const sorted = sort([...displayedCustomers]);
        console.log(sorted)
        setDisplayedCustomers(sorted);
    }

    const customerCards = displayedCustomers.map((customer) => {
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
            <div className="sort">
                <h3>Subscribed Customers: </h3>
                <button onClick={() => {handleSort()}}>sort</button>
            </div>
            <div className="card-scroll">
                {customerCards}
            </div>
        </section>
        
    );
}

export default CustomersContainer;