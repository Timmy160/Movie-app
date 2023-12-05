import React from "react";
import "./HomeScreen.css";
import Navbar from "../../Components/Navbar";
import Banner from "../../Components/Banner";
import requests from "../../utils/requests";
import Row from "../../Components/Row";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Navbar />

      <Banner />

      <Row
        title="NETFLIX ORIGINAL"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />

      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchTopActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchTopComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchTopHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchTopRomanceMovies} />
      <Row
        title="Documentaries Movies"
        fetchUrl={requests.fetchTopDocumentaries}
      />
    </div>
  );
}

export default HomeScreen;
