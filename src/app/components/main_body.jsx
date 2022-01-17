import React from "react"

const MainBody = () => {
    return (
        <main className="page">
            <div className="conteiner">
                <div className="main__row">
                    <div className="main_columns">
                        <div className="body__item">
                            <div className="text">
                                <p>Делаем хорошо!</p>
                                <p>Еда без границ(24/7)</p>
                            </div>
                        </div>
                    </div>
                    <div className="main_columns">
                        <div className="body__item">
                           <img className="main_img" src="src/Gr_HD_Plus.png"/>
                        </div>
                    </div>
                </div>
                <div className="product__row">
                    <div className="product_name">
                        <p>Шашлык</p>
                    </div>
                    <div className="product_grid" id="one">
                        {/*<!--<div className="product">
                            <img className="product_img" src="" alt="">
                            <p>Шашлык со свинной шеи</p>
                            <p>Состав: маринад (уксус, тимьян, размарин, вода), мясо свинной шеи, гарнир (картошка, маринованный лук и т.д.) </p>
                            <p>Подача: Шашлык, гарнир, термоупаковка, напиток на выбор</p>
                            <div className="price">
                                <p>Цена 95 грн / 100 гр.</p>
                                <div>
                                    <button className="negative_btn">-</button>
                                    <input className="price_inp" type="text"> 
                                    <button className="positive_btn">+</button>
                                </div>
                            </div>
                            <button className="by_ntn">Купить</button>
                        </div>-->*/}
                    </div>
                </div>
            </div>
        </main>
    )}

export default MainBody