import React from "react";
import './Card.css';
import img from '../../images/image4.png';
import time from '../../images/time.svg';
import rub from '../../images/r.svg';
import rubDesk from '../../images/rdesk.svg';
function Card(props) {

const[count,setCount] = React.useState(3)

function Countes(e) {
    setCount(props.count)
    e.target.closest("button").classList.add('card__timeNone')
    console.log(e.target.closest("button"))
}
  return (
    <div className={`card ${props.display}`}>
        <div className="card__grid1">
            <p className={`card__new ${props.new}`}>
                Новинка
            </p>
            <img src={props.img} className="card__img"/>
        </div>
        <div className="card__grid2">
            <p className="card__travelTime card__travelTime-mobile">
                <img src={time} className="card__timeLogo"/> 2 часа
            </p>
            <h2 className="card__title">
                АКЦИЯ - Обзорная экскурсия по рекам и каналам
                с остановками Hop on Hop Off {props.title}
            </h2>
            <p className="card__travelTime card__travelTime-desktop">
                <img src={time} className="card__timeLogo"/> 2 часа
            </p>
            <ul className="card__ul">
                <li className="card__li">
                    Билет на целый день
                </li>
                <li className="card__li">
                    Неограниченное число катаний
                </li>
                <li className="card__li">
                    6 остановок у главных достопримечательностей
                </li>
                <li className="card__li">
                    Ближайший рейс сегодня
                    <div className="card__groupTime card__groupTime-desktop">
                        { props.count > 4 
                        ? 
                        [...Array(count)].map((item, index) => 
                        <p key={index} className="card__time">
                            12:00 
                        </p> ) 
                        :
                        [...Array(props.count)].map((item, index) => 
                        <p key={index} className="card__time">
                            12:00 
                        </p> ) 
                        }
                        <button type="button" onClick={Countes} className={`card__button card__time ${props.count <= 4 ? 'card__timeNone' : ''}`}>
                            ещё...
                        </button>
                    </div>
                </li>
            </ul>
            <div className="card__buy">
                <div className="card__priceGroup">
                    <p className="card__price">
                        900 <img src={rub} className="card__rub"/>
                    </p>
                    <p className="card__priceBerth">
                        1200 <img src={rubDesk} className="card__rubDesktop"/> на причале
                    </p>
                </div>
                <button className="card__more">
                    Подробнее
                </button>
            </div>
        </div>
        
    </div>
  );
}

export default Card;
