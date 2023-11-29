import React, { useEffect, useState } from "react";
import axios from "axios";
import "./home.css"

const Home = () => {
    const textchangeh3 = () => {
        let texth3 = document.querySelector(".text-h3");

        if (texth3.textContent === "из дома") {
            texth3.innerHTML = "из офиса";
        }
        else if (texth3.textContent === "из офиса") {
            texth3.innerHTML = "на отдыхе";
        }
        else if (texth3.textContent === "на отдыхе") {
            texth3.innerHTML = "из дома";
        }
        else {
            console.log("error");
        }
    }
    setInterval(textchangeh3, 1500)
    return (
        <>
            <section className="section-home1">
                <div className="container">
                    <div className="home-flex">
                        <div className="home1">
                            <div className="home1-1">
                                <h2>Контролируйте свой транспорт</h2>
                                <h3 className="text-h3">из дома</h3>
                            </div>
                            <div className="home1-2">
                                <h1>
                                    Управление с мобильного устройства: Забудьте о необходимости физически присутствовать в вашем транспортном средстве. Мы предоставляем приложение, которое позволяет вам контролировать все функции вашего транспорта прямо с вашего смартфона.
                                    <br />
                                    <br />
                                    Система уведомлений: Получайте мгновенные уведомления о состоянии вашего транспорта, обслуживании и других важных событиях.
                                </h1>
                            </div>
                            <div className="home1-3">
                                <a href="">
                                    <i class="fa fa-instagram" aria-hidden="true"></i>
                                </a>
                                <a href="">
                                    <i class="fa fa-facebook-square" aria-hidden="true"></i>
                                </a>
                                <a href="https://t.me/arkenfarxadov">
                                    <i class="fa fa-telegram" aria-hidden="true"></i>
                                </a>
                                <a href="tel:+998933373747">
                                    <i class="fa fa-phone" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                        <div className="home2">
                            <img src="background-home1.png" alt="" />
                            <img src="background-home2.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-home2">
                <div className="container">
                </div>
            </section>
        </>
    )
}
export default Home;