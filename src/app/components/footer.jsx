import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="conteiner">
                <div className="footer__row">
                    <div className="footer_columns">
                        <div className="footer__item">
                            <p>Связь с нами</p>
                            <ul>
                                <Link to={{ pathname: "https://www.facebook.com/" }} target="_blank"><li>FaceBook</li></Link>
                                <Link to={{ pathname: "https://www.instagram.com/vladik_kott/" }} target="_blank"><li>Instagram</li></Link>
                                <Link to={{ pathname: "https://www.viber.com/" }} target="_blank"><li>Viber</li></Link>
                                <Link to={{ pathname: "https://web.telegram.org/z/" }} target="_blank"><li>Telegram</li></Link>
                            </ul>
                        </div>
                    </div>
                    <div className="footer_columns">
                        <div className="footer__item">
                            <p>Полезные ссылки</p>
                            <ul>
                                <Link target="_blank"><li>О нас</li></Link>
                                <Link target="_blank"><li>Частые вопросы</li></Link>
                            </ul>
                        </div>
                    </div>
                    <div className="footer_columns">
                        <div className="footer__item">
                            <ul>
                                <Link to={{ pathname: "https://play.google.com/" }} target="_blank"><li><img src="google_play.png" className="label_i" alt=""/></li></Link>
                                <Link to={{ pathname: "https://www.apple.com/ua/app-store/" }} target="_blank"><li><img src="app_store.png" className="label_i" alt=""/></li></Link>
                                <Link to=''><li>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</li></Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer