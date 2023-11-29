import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import "./header.css"

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header-1">
                        <div className="header-logo">
                            <Link className="link" to={"/"}>
                                <img src="logo1.png" alt="" />
                            </Link>
                        </div>
                        <div className="header-cat">
                            <ul>
                                <Link className="link" to={"/uslugi"}>
                                    <li>Другие услуги</li>
                                </Link>
                                <li>О нас</li>
                                <li>О компаний</li>
                            </ul>
                        </div>
                        <div className="header-call">
                            <button className="header-call-btn">Заказать звонок</button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;