import './DetailsPage.css'
import DetailsCard from '../detailsCard/DetailsCard'
import TeasContainer from '../teasContainer/TeasContainer'
import CustomersContainer from '../customersContainer/CustomersContainer'
import BackArrow from '../../assets/curved-arrow-back-icon.svg';
import Cancel from '../../assets/remove-file-icon.svg';
import Activate from '../../assets/add-file-icon.svg'

function DetailsPage({  details, 
                        handleStatusChange, 
                        handlePortalNav,
                        handleSort,
                        successMessage,
                        statusError }) {
   
    const detailsData = details.data.attributes;

    const teas = details.included.filter((entry) => {
        return entry.type === "tea"
    });

    const customers = details.included.filter((entry) => {
        return entry.type === "customer"
    });
    console.log(successMessage)
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
                <TeasContainer teas={teas} sort={handleSort}/>
                <CustomersContainer customers={customers} sort={handleSort}/>
            </div>
            <div className="nav-buttons">
                <button className="goBack" onClick={() => handlePortalNav()}><img className="back_arrow" src={BackArrow} alt="Back Arrow" /><label>Go back</label></button>
                {(statusError === "" && successMessage) && (
                    <p className="success-message">{successMessage}</p> 
                )}
                {statusError && (
                    <p className="error-status">{statusError}</p>
                )}
                <button className="setStatus" onClick={() => {handleStatusChange(detailsData.status, detailsData.id)}}><label>Cancel</label><img className="cancel" src={Cancel} alt="cancel subscription" /></button>
            </div>
        </section>
    );
}

export default DetailsPage;