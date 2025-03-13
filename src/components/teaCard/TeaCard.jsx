import './TeaCard.css';
import Leaves from '../../assets/tobacco-icon.svg'

function TeaCard({ id, title, description, temperature, brew_time }) {

    return (
        <section className="tea_card">
            <div className="head">
                <img src={Leaves}/>
                <h4>{title}</h4>
            </div>
            <div className="tea_info"> 
                <p>{description}</p>
                <p>Brew at {Math.trunc(temperature)}{"\u00B0"}F for {brew_time}</p>
            </div>
        </section>
    );
}

export default TeaCard;