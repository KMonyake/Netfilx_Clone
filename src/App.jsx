import Nav from "./Nav";
import Banner from "./Banner";
import Row from "./Row";
import requests from "./requests";
import "./App.css";

function App() {

  return  <div>
            <Nav/>
            <Banner/>

            <Row category={"Trending"} fetchURL={requests.fetchTrending} isLargeRow/>
            <Row category={"Netflix Originals"} fetchURL={requests.fetchNetflixOriginals}/>
            <Row category={"Top Rated"} fetchURL={requests.fetchTopRated}/>
            <Row category={"Action Movies"} fetchURL={requests.fetchActionMovies}/>
            <Row category={"Horror Movies"} fetchURL={requests.fetchHorrorMovies}/>
            <Row category={"Romance Movies"} fetchURL={requests.fetchRomanceMovies}/>
            <Row category={"Documentaries"} fetchURL={requests.fetchDocumentaries}/>
          </div>
}

export default App;
