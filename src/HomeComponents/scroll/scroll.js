import React from 'react';
import Carousel from 'react-elastic-carousel';
import Item from './Item';
import { useHistory } from "react-router-dom";
import item1 from '../images/item1.jpg';
import item2 from '../images/item2.jpg';
import item3 from '../images/item3.jpg';
import item4 from '../images/item4.jpg';
import item5 from '../images/item5.jpg';
import item6 from '../images/item6.jpg';
import item7 from '../images/item7.jpg';
import item8 from '../images/item8.jpg';
import item9 from '../images/item9.jpg';
import item10 from '../images/item10.jpg';
import item11 from '../images/item11.jpg';
import item12 from '../images/item12.jpg';
import item13 from '../images/item13.jpg';
import item14 from '../images/item14.jpg';
import item15 from '../images/item15.jpg';
import item16 from '../images/item16.jpg';

function Scroll() {
  let history = useHistory();

  return (
    <div style={{ width: '100%' }}>
      <Carousel itemsToShow={5} enableAutoPlay autoPlaySpeed={1500}>
        <Item onClick={()=>history.push("/shop")}>
          <img src={item1} alt='item' height='100%' />
        </Item>
        <Item onClick={()=>history.push("/shop")}>
          <img src={item4} alt='item' height='100%' />
        </Item>
        <Item onClick={()=>history.push("/shop")}>
          <img src={item2} alt='item' height='100%' />
        </Item>
        <Item onClick={()=>history.push("/shop")}>
          <img src={item3} alt='item' height='100%' />
        </Item>
        <Item onClick={()=>history.push("/shop")}>
          <img src={item10} alt='item' height='100%' />
        </Item>
        <Item onClick={()=>history.push("/shop")}>
          <img src={item15} alt='item' height='100%' />
        </Item>
        <Item onClick={()=>history.push("/shop")}>
          <img src={item5} alt='item' height='100%' />
        </Item>
        <Item onClick={()=>history.push("/shop")}>
          <img src={item6} alt='item' height='100%' />
        </Item>
        <Item onClick={()=>history.push("/shop")}>
          <img src={item7} alt='item' height='100%' />
        </Item>
        <Item onClick={()=>history.push("/shop")}>
          <img src={item8} alt='item' height='100%' />
        </Item>
        <Item onClick={()=>history.push("/shop")}>
          <img src={item9} alt='item' height='100%' />
        </Item>
        <Item onClick={()=>history.push("/shop")}>
          <img src={item10} alt='item' height='100%' />
        </Item>
        <Item onClick={()=>history.push("/shop")}>
          <img src={item13} alt='item' height='100%' />
        </Item>
        <Item onClick={()=>history.push("/shop")}>
          <img src={item12} alt='item' height='100%' />
        </Item>
        <Item onClick={()=>history.push("/shop")}>
          <img src={item11} alt='item' height='100%' />
        </Item>
        <Item onClick={()=>history.push("/shop")}>
          <img src={item16} alt='item' height='100%' />
        </Item>
        <Item onClick={()=>history.push("/shop")}>
          <img src={item14} alt='item' height='100%' />
        </Item>
      </Carousel>
    </div>
  );
}

export default Scroll;
