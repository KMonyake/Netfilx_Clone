import { useEffect, useState } from "react";
// import YouTube from "react-youtube";
// import movieTrailer from "movie-trailer";
import "./Row.css";

const baseURL = "https://api.themoviedb.org/3";
const imgBaseURL = "https://image.tmdb.org/t/p/";
const imgSize = "original";

function Row(props){
    const { category, fetchURL, isLargeRow } = props;
    const [movies,setMovies] = useState([]);
    const [trailerURL,setTrailerURL] = useState("");

    useEffect(()=>{
        async function getData(){
            const data = await (await (fetch(`${baseURL}${fetchURL}`))).json();
            setMovies(data.results)
            // console.log(data.results);
        }
        getData();
    },[fetchURL])

    // const options={
    //     height: "390",
    //     width:"100%",
    //     playerVars:{//"https://developers.google.com/youtube/player_parameters"
    //         autoplay:1
    //     }
    // }

    // function handleClick(movie){
    //     if(trailerURL) setTrailerURL("");
    //     else movieTrailer(movie?.name || "")
    //         .then(url=>{
    //             const urlParams = new URLSearchParams(new URL(url).search);
    //             setTrailerURL(urlParams.get("v"));
    //         })
    //         .catch(error=>console.log(error));
    // }

    function getBackdrop(normal,wide){
        if(isLargeRow) return `${imgBaseURL}${imgSize}${wide}`;
        else return `${imgBaseURL}${imgSize}${normal}`;
    }


    return  <div className="row">
                <h2>{category}</h2>
                <div className="row-posters">
                    {
                        movies.map(movie=>{
                            const {backdrop_path,id,name,poster_path} = movie;
                            return <div key={id} className={isLargeRow?"row-poster-large":"row-poster"}>
                                        
                                        <img 
                                            src={getBackdrop(poster_path,backdrop_path)} 
                                            className="row-poster" 
                                            // onClick={handleClick(movie)}
                                            alt={name}
                                        />
                                    </div>
                        })
                    }
                </div>
                {/* {trailerURL&& <YouTube videoId={trailerURL} options={options}/>} */}
            </div>
}

export default Row;
export {baseURL,imgBaseURL,imgSize};