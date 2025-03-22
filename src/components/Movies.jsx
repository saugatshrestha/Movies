import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from './Card';

const Movies = () => {

    const [movie, setMovie] = useState([]);
    const [error, setError] = useState();

    const OurMovies = async () => {
        try {
            const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmM2Y0ODNjYmVlNDhlYmQxNjBlOThlZTA0Y2YyNmI1OSIsIm5iZiI6MTc0MTk2NDA4Ni41NzIsInN1YiI6IjY3ZDQ0MzM2OTE0ZGU4ZDg5MTAyOWExZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.29escj1KhXaWKjG7PpTuboc5irwL63dPO30s5xt2RuA'
                }
            });
            const data = response.data.results;
            setMovie(data);
            setError();
        } catch(error) {
            setError("Error Pulling API Request", error)
        }
    }

    useEffect(() => {
        OurMovies();
    }, [])

    return (
        <>
            <section className='section-movies'>
                <div className="container">
                    <div className="section-heading">
                        <h2 className='text-white'>
                            Popular
                        </h2>
                    </div>
                    <div className="movies-grid text-white">
                        {error}
                        {
                            movie.map((mob, index) => {
                                return (
                                    <Card key={mob.id} title={mob.title} image={mob.poster_path} vote={mob.vote_average} anchor={`/movie/${mob.id}`} />
                                )
                            })
                        }
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default Movies;