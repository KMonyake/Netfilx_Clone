import { useEffect, useState } from "react";
import { baseURL, imgBaseURL, imgSize } from "./Row";
import requests from "./requests";
import "./Banner.css";

const requestedCatergory = requests.fetchTrending;

function Banner(){
    const [movie,setMovie] = useState([]);

    function getRandomNumber(data){
        const number = Math.floor(Math.random() * data.results.length);
        return number;
    }

    function truncate(string,number){
        return string?.length > number? string.substring(0,number - 1) + "...":string;
    }

    useEffect(()=>{
        async function getMovie() {
            const data = await (await (fetch(`${baseURL}${requestedCatergory}`))).json();
            const randomMovie = data.results[getRandomNumber(data)];
            setMovie(randomMovie);
            // console.log(randomMovie);
        }
        getMovie();
    }, [])

    return <header>
        
                <div
                    className="banner-img-container"
                    style={{backgroundImage:`url(${imgBaseURL}${imgSize}${movie.backdrop_path || movie.poster_path})`}}
                >
                </div>
                <div className="banner-contents">
                    <h1>{movie?.title || movie?.name || movie?.original_name}</h1>

                    <div className="banner-btns">
                        <button className="banner-btn">play</button>
                        <button className="banner-btn">my list</button>
                    </div>

                    <h3 className="banner-desc">{truncate(movie?.overview,150)}</h3>
                </div>

                <div className="banner-fade"></div>

            </header>
}

export default Banner;