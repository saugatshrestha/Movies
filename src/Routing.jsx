import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Leadspace from "./components/Leadspace"
import Movies from "./components/Movies"
import Movie from "./components/Movie"
import Popular from "./components/Popular"

const Routing = () => {
    return (
        (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element=
                    {
                        <>
                            <Header />
                            <Leadspace />
                            <Popular />
                            <Movies />
                        </>
                    } 
                    />
                    <Route path={`/movie/:id`} element={<Movie />} />
                </Routes>
            </BrowserRouter>
        )
    )
}

export default Routing
