import './TeasContainer.css';
import TeaCard from '../teaCard/TeaCard';

function TeasContainer({ teas }) {
   
    const teaCards = teas.map((tea) => {
        return (
            <TeaCard    key={tea.id}
                        id={tea.id}
                        title={tea.attributes.title}
                        description={tea.attributes.description}
                        temperature={tea.attributes.temperature}
                        brew_time={tea.attributes.brew_time}/>
        );
    })

    return (
        <section className='tea_card_container'>
            {teaCards}
        </section>
        
    );
}

export default TeasContainer;