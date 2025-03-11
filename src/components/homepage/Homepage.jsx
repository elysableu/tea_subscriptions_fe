import './Homepage.css';

function Homepage({ portalNav }) {

    return (
        <section className="homepage-container">
            <h2>Welcome to the admin portal!</h2>
            <button onClick={() => portalNav()}>Enter portal!</button>
        </section>
    );
}

export default Homepage;