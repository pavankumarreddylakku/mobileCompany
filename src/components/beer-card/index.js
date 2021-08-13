import React, { useState } from 'react';
import styled from 'styled-components';
import { device } from '../../helpers';
import Image from '../../elements/image';
import Lockup from '../lockup';
import Like from './like-button';

const BeerCard = styled.div`
  display: block;
  margin-bottom: 30px;
  margin-left: 8px;
  margin-right: 10px;
  width: 100%;

  @media ${device.laptop} {
    width: 31.5%;
  }
`;

const ImagContainer = styled.div`
  padding: 40px 20px;
  background-color: #2897b1;
  position: relative;
  margin-top: auto;
  
  img {
    height: 100px;
    width: auto;
    display: block;
    margin: 0 auto;
  }
`;

const Content = styled.div`
  padding: 20px;
  height: 202px;
`;

function Beercard(props) {
  const [active, setActive] = useState(false);
  console.log(props,'props');
  const changeLike = () => {
    setActive(!active)
  }

  return (
    <BeerCard>
      <ImagContainer>
        <Like liked={active} changeLike={changeLike} />
        <Image url={props.image} />
      </ImagContainer>
      <Content>
        <Lockup text={props.description}  tag="h3" title={props.title}/>
        
      </Content>
      
    </BeerCard>
  )
}

export default Beercard