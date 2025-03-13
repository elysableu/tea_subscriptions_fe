import './TeasContainer.css';
import { useState, useEffect } from 'react';
import TeaCard from '../teaCard/TeaCard';

function TeasContainer({ teas, sort }) {
    const [displayedTeas, setDisplayedTeas ] = useState([]);
    
    useEffect(() => {
        setDisplayedTeas(teas);
    }, [teas])

    const handleSort = () => {
        const sorted = sort([...displayedTeas]);
        setDisplayedTeas(sorted);
    }

    const teaCards = displayedTeas.map((tea) => {
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
            <div className="sort_teas">
                <h3>Teas: </h3>
                <button onClick={() => {handleSort()}}>sort</button>
            </div>
            <div className="card-scroll">
                {teaCards}
            </div>
        </section>
        
    );
}

export default TeasContainer;