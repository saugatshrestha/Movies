import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Movie = () => {
    let params = useParams();
    let paramsId = params.id;

    const [movieDetail, setmovieDetail] = useState({});
    const [error, setError] = useState();

    const fetchMovies = async () => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?language=en`, {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmM2Y0ODNjYmVlNDhlYmQxNjBlOThlZTA0Y2YyNmI1OSIsIm5iZiI6MTc0MTk2NDA4Ni41NzIsInN1YiI6IjY3ZDQ0MzM2OTE0ZGU4ZDg5MTAyOWExZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.29escj1KhXaWKjG7PpTuboc5irwL63dPO30s5xt2RuA'
                }
            });
            // const data = response.data.results;
            setmovieDetail(data);
            console.log(response);
            setError("");
        } catch(error) {
            setError("Error Pulling API Request", error)
        }
    }

    fetchMovies();

    useEffect(() => {
        fetchMovies;
    });


    return (
        <>
            ID: {params.id}
        </>
    )
}

export default Movie;
