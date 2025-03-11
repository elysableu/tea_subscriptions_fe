import './DetailsPage.css'
import DetailsCard from '../detailsCard/DetailsCard'
import TeasContainer from '../teasContainer/TeasContainer'
import CustomersContainer from '../customersContainer/CustomersContainer'

function DetailsPage({ details}) {
    console.log(details)
   const teas = details.included.filter((entry) => {
    return entry.type === "tea"
   })

   const customers = details.included.filter((entry) => {
    return entry.type === "customer"
   })

    console.log("teas: ", teas);
    console.log("customers: ", customers)

    return (
        <section className='details_container'>
            <h2>{details.data.attributes.title}</h2>
            <DetailsCard    price={details.data.attributes.price} 
                            status={details.data.attributes.status}
                            frequency={details.data.attributes.frequency} />
            <div className="teas_customers_container">
                <TeasContainer teas={teas}/>
                <CustomersContainer customers={customers}/>
            </div>
            <div className="nav-buttons">
    
            </div>
        </section>
    );
}

export default DetailsPage;