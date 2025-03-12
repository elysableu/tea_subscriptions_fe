import './DetailsPage.css'
import DetailsCard from '../detailsCard/DetailsCard'
import TeasContainer from '../teasContainer/TeasContainer'
import CustomersContainer from '../customersContainer/CustomersContainer'

function DetailsPage({ details, handleStatusChange, handlePortalNav }) {

    const detailsData = details.data.attributes;
    const teas = details.included.filter((entry) => {
        return entry.type === "tea"
    });

    const customers = details.included.filter((entry) => {
        return entry.type === "customer"
    });

    return (
        <section className='details_container'>
            <h2>{details.data.attributes.title}</h2>
            <h3>Subscription Details: </h3>
            <DetailsCard    price={detailsData.price} 
                            status={detailsData.status}
                            frequency={detailsData.frequency} />
            <div className="teas_customers_container">
                <TeasContainer teas={teas}/>
                <CustomersContainer customers={customers}/>
            </div>
            <div className="nav-buttons">
                <button className="goBack" onClick={() => handlePortalNav()}></button>
                <button className="setStatus" onClick={() => {handleStatusChange(detailsData.status, detailsData.id)}}></button>
            </div>
        </section>
    );
}

export default DetailsPage;