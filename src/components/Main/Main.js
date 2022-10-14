import React from "react";
import './Main.css';
import Card from "../Card/Card"
import img5 from "../../images/image5.png"
import img4 from "../../images/image4.png"
import img1 from "../../images/image1.png"
import img2 from "../../images/image2.png"
import img3 from "../../images/image3.png"
function Main() {
  let windowWidth = window.screen.width;

  function updateWidth() {
    window.setTimeout('location.reload()', 200)
  }
  window.addEventListener('resize',updateWidth)
  return (
    <section className="main">
        <Card
          title={windowWidth > 1070 ? ' 2020' : ' 2019'}
          count={windowWidth > 1070 ? 3 : 4} 
          new={windowWidth > 1070 ? 'card__new-dark' : 'card__new-yellow'}
          img={windowWidth > 1070 ? img1 : img4}
        />
        <Card
          title={windowWidth > 1070 ? ' 2020' : ' 2019'} 
          count={4} 
          new={windowWidth > 1070 ? 'card__new-blueDesk' : 'card__new-blue'} 
          img={windowWidth > 1070 ? img2 : img5}
        />
        <Card 
          title={windowWidth > 1070 ? ' 2020' : ' 2019'}
          display={windowWidth < 1070 ? 'card__none' : ''}
          count={5} 
          new="card__new-none" 
          img={img3}
        />
    </section>
  );
}

export default Main;
