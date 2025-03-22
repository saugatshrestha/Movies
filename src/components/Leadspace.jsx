import HeroImg from '../assets/hero-img.webp';
import SearchBar from './SearchBar';

const Leadspace = () => {
    return (
        <section className="leadspace">
            <div className="container">
                <figure>
                    <img src={HeroImg} alt="" />
                </figure>
                <SearchBar />
            </div>
        </section>
    )
}

export default Leadspace;