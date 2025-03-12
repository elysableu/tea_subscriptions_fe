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
            <h3>Teas: </h3>
            <div className="card-scroll">
                {teaCards}
            </div>
        </section>
        
    );
}

export default TeasContainer;