import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div className="conteiner">
                <div className="header__row">
                    {/*<!--<a href="" className="headre__logo"></a>--><!--main label-->*/}
                    <div className="headre__logo">
                        <p>Шашлычная</p>
                        <p>на Виноградаре</p>
                    </div>   
                    <div className="header__menu menu">
                        <nav className="menu__body">
                            <ul className="menu__list">
                                <li>
                                    <a href="" className="menu__link">Data 1</a>
                                </li>
                                <li>
                                    <a href="" className="menu__link">Data 2</a>
                                </li>
                                <li>
                                    <a href="" className="menu__link">Data 3</a>
                                </li>
                                <li>
                                    <a href="" className="menu__link">Data 4</a>
                                </li>
                                <li>
                                    <a href="" className="menu__link">Data 5</a>
                                </li>
                                <li>
                                    <a href="" className="menu__link">Data 6</a>
                                </li>
                            </ul>
                        </nav>
                        <div className="menu__icon">{/*<!--nav button-->*/}
                            <a href="" className="menu__link">
                                <span className="card_name">Корзина</span>
                                <i className="fa fa-shopping-cart">
                                    <div className="product__count_exist">
                                        <span>1</span>
                                    </div>
                                </i>
                            </a>
                        <div className="menu__icon resBtn">{/*<!--nav button-->*/}
                            <a href="" className="menu__link"><i className="fa fa-bars"></i></a>
                        </div>
                    </div>
                    <div className="card__panel__">
                        <div className="block">
                            <div className="card__panel_header">
                                <span>Оформление заказа</span>
                                <i className="fa fa-times" aria-hidden="true"></i>
                            </div>
                            <div className="card__panel_list">
                                <div className="card__panel_list_item">
                                    <img src="src/test.png" alt="test"/>
                                    <span>Шашалык со свинной шеии</span>
                                    <div>
                                        <button className="negative_btn">-</button>
                                        <input className="price_inp" type="text"/> 
                                        <button className="positive_btn">+</button>
                                    </div>
                                    <i className="fa fa-times del_item" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className="card__panel_end">
                                <span>Total summ: 102</span>
                                <button className="by_ntn">Далее</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
)}

export default Header 