import './DetailsPage.css'
import DetailsCard from '../detailsCard/DetailsCard'
import TeasContainer from '../teasContainer/TeasContainer'
import CustomersContainer from '../customersContainer/CustomersContainer'
import BackArrow from '../../assets/curved-arrow-back-icon.svg';
import Cancel from '../../assets/no-data-icon.svg';

function DetailsPage({ details, handleStatusChange, handlePortalNav }) {
   
    const detailsData = details.data.attributes;
    const teas = details.included.filter((entry) => {
        return entry.type === "tea"
    });

    const sortedTeas = teas.sort((a, b) => {
        return a.attributes.title.toLowerCase().localeCompare(b.attributes.title.toLowerCase())
    })

    const customers = details.included.filter((entry) => {
        return entry.type === "customer"
    });

    const sortedCustomers = customers.sort((a, b) => {
        return a.attributes.last_name.toLowerCase().localeCompare(b.attributes.last_name.toLowerCase())
    })

    return (
        <section className='details_container'>
            <h2>{details.data.attributes.title}</h2>
            <div className="sub_info">
                <h3>Subscription Details: </h3>
                <DetailsCard    price={detailsData.price} 
                                status={detailsData.status}
                                frequency={detailsData.frequency} />
            </div>
            <div className="teas_customers_container">
                <TeasContainer teas={sortedTeas}/>
                <CustomersContainer customers={customers}/>
            </div>
            <div className="nav-buttons">
                <button className="goBack" onClick={() => handlePortalNav()}><img className="back_arrow" src={BackArrow} alt="Back Arrow" /><label>Go back</label></button>
                <button className="setStatus" onClick={() => {handleStatusChange(detailsData.status, detailsData.id)}}><label>Cancel</label><img className="cancel" src={Cancel} alt="cancel subscription" /></button>
            </div>
        </section>
    );
}

export default DetailsPage;