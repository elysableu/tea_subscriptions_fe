import './TeasContainer.css';
import TeaCard from '../teaCard/TeaCard';

function TeasContainer({ teas }) {

    const teaCards = teas.map((tea) => {
        return (
            <TeaCard />
        );
    })

    return (
        <section className='tea_card_container'>
            {teaCards}
        </section>
        
    );
}

export default TeasContainer;