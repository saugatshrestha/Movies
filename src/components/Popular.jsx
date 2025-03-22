import axios from 'axios';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContentLoader from 'react-content-loader'

const Popular = () => {

    const [popular, setPopular] = useState([]);
    const [loading, setLoading] = useState(true);

    const popularMovies = async () => {
        try {
            const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmM2Y0ODNjYmVlNDhlYmQxNjBlOThlZTA0Y2YyNmI1OSIsIm5iZiI6MTc0MTk2NDA4Ni41NzIsInN1YiI6IjY3ZDQ0MzM2OTE0ZGU4ZDg5MTAyOWExZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.29escj1KhXaWKjG7PpTuboc5irwL63dPO30s5xt2RuA'
                }
            });
            const data = response.data.results;
            setPopular(data);
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        } catch(error) {
            console.log(error);
            setLoading(false);
        }
        
    }

    useEffect(()=> {
        
        popularMovies();
    }, [])
    
    return (
        <>
            <section className='section-trending'>
                <div className="container">
                    <div className="section-heading">
                        <h2 className="text-white">
                            Trending <svg width={30} style={{position: 'relative', top: 5 + 'px'}} viewBox="-3 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>fire-2</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" sketch:type="MSPage"> <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-415.000000, -411.000000)" fill="#2ddf20"> <path d="M428.5,441 C422.148,441 417,435.641 417,429.625 C417,428.228 417.031,427.094 418,426 C417.895,426.634 419.397,432.055 424.305,431.771 C424.092,427.652 422.978,417.561 428.152,414.073 C427.695,419.557 429.038,426.924 435.029,428 C434.686,425.801 434.727,422.143 436.267,421.467 C436.433,424.836 438.924,426.914 438.924,430.152 C438.924,436.016 433.251,441 428.5,441 L428.5,441 Z M437.905,417.953 C433.52,419.203 432.717,422.748 433,425 C429.872,421.322 430,417.093 430,411 C419.968,414.783 422.301,425.688 422,429 C419.477,426.935 419,422 419,422 C416.336,423.371 415,427.031 415,430 C415,437.18 420.82,443 428,443 C435.18,443 441,437.18 441,430 C441,425.733 437.867,423.765 437.905,417.953 L437.905,417.953 Z" id="fire-2" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>
                        </h2>
                    </div>
                    {
                        loading ? 
                       
                        <div className="movie-popular-grid text-white">
                        {
                            popular.map((popular) => {
                                const uuid = uuidv4();
                                return (
                                    <ContentLoader className='card-movie' style={{borderRadius: 8 + 'px', overflow: 'hidden'}} height={160} width={200} speed={2} backgroundColor="#000" foregroundColor="#ecebeb">
                                        <rect x="10" y="10" rx="4" ry="4" width="100%" height="100%" />
                                        <rect x="10" y="120" rx="4" ry="4" width="100%" height="100%" />
                                    </ContentLoader> 
                                )
                            })
                        }
                    </div>
                        : 
                        <div className="movie-popular-grid text-white">
                            {
                                popular.map((popular) => {
                                    const uuid = uuidv4();
                                    return (
                                        <article key={uuid} className='card-movie'>
                                            <img src={`https://image.tmdb.org/t/p/w500${popular.backdrop_path}`} alt="" />
                                            <h3>
                                                {popular.title}
                                            </h3>
                                        </article>
                                    )
                                })
                            }
                        </div>
                    }
                    
                </div>
            </section>
        </>
    )
}

export default Popular;
