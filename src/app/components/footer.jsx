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
                                <Link><li>FaceBook</li></Link>
                                <Link><li>Instagram</li></Link>
                                <Link><li>Viber</li></Link>
                                <Link><li>Telegram</li></Link>
                            </ul>
                        </div>
                    </div>
                    <div className="footer_columns">
                        <div className="footer__item">
                            <p>Полезные ссылки</p>
                            <ul>
                                <Link><li>О нас</li></Link>
                                <Link><li>Частые вопросы</li></Link>
                            </ul>
                        </div>
                    </div>
                    <div className="footer_columns">
                        <div className="footer__item">
                            <ul>
                                <Link><li><img src="google_play.png" className="label_i" alt=""/></li></Link>
                                <Link><li><img src="app_store.png" className="label_i" alt=""/></li></Link>
                                <Link><li>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</li></Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer