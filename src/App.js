import React, { useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components';
import axios from 'axios';

import BeerCard from './components/beer-card'
import Footer from './components/shared/footer'
//import Header from './components/shared/header'
import Hero from './components/hero'
import Section from './components/layout/section'
import GridsComponent from './components/layout/grids'
import Wrapper from './components/layout/wrapper'
import MovieList from "./MovieList";
import { MovieProvider } from "./movieData";
import Nav from "./nav";
import AddMovie from "./Addmovie";
import Home from "./Home";
import About from "./About";
import Image from "./image";
import { Redirect, Route, Switch, BrowserRouter } from "react-router-dom";
import Header from "./components/Header"
const MainWrapper = styled.main`
  display: block;
  position: relative;
  width: 100%;

  .grid {
    display: flex;
    flex-wrap: wrap;
  }
`

function App() {
  const [data, setData] = useState({ beers: [] });
  const [loading, setLoading] = useState(true);
  const [date1, setDate1] = useState("");
  const onChange = (date, dateString) => {
    console.log(date, dateString,'app');
    if (dateString ==""){
      setDate1("")
    } else{
    setDate1(`?brewed_before=${dateString}`);
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      let api = `https://api.punkapi.com/v2/beers${date1}`;
      console.log(api,'api12')
      const result = await axios(
        api
      );
      setData({beers: result.data});
      setLoading(false);
    };
    fetchData();
  }, [date1]);

  return (
    <MovieProvider>
    <div className="App">
        {/* <BrowserRouter>
          <Route exact strict path="/About"  component={Image} />
          <Route exact strict path="/About/" component={About} />
          <Route exact strict path="/Image" component={Image} />
          <Route exact strict path="/" component={Home} />
            
        </BrowserRouter> */}
      {/* <MovieList /> 
        <Nav />
        <AddMovie /> */}

        {console.log("app")}
      <MainWrapper>
        {/* <Header />
        <Section>
          <Hero />
        </Section> */}
          <Header onChangeData={onChange}/>
        <Section>
          {loading && 
            <div>loading....</div>
          }

          {!loading &&
            <Wrapper>
            <GridsComponent>
              {console.log('count')}
                {data ?.beers.map((item, index) => (
                  <BeerCard key={index.toString()} image={item?.image_url} title={item?.name} description={item ?.brewers_tips}/>
                ))}
            </GridsComponent>
            </Wrapper>
          }
        </Section>

        <Footer/> 
      </MainWrapper>
    </div>
    </MovieProvider>
  );
}

export default App;
