import './DetailsPage.css'
import DetailsCard from '../detailsCard/DetailsCard'
import TeasContainer from '../teasContainer'
import CustomersContainer from '../customersContainer/CustomersContainer'

function DetailsPage({ details }) {
    

    return (
        <section className='details_container'>
             <h2>{details.data.attributes.title}</h2>
             <DetailsCard />
             <TeasContainer />
             <CustomersContainer />
        </section>
    );
}

export default DetailsPage;