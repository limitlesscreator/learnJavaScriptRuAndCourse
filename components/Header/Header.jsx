import React from 'react';
import s from "./header.module.sass"
import {Link} from "react-router-dom";
export const Header = () => {
    return (
        <>
            <header>
                <div className={s.menu}>
                    <div className={s.elementMenu}><Link to="us">о нас</Link></div>
                    <div className={s.elementMenu}><Link to="utp">utp</Link></div>
                    <div className={s.elementMenu}><Link to="clients">Клиенты</Link></div>
                    <div className={s.elementMenu}><Link to="uslugi">услуги</Link></div>
                    <div className={s.elementMenu}><Link to="production">продукция</Link></div>
                    <div className={s.elementMenu}><Link to="contacts">контакты</Link></div>
                </div>
                <div className={s.language}>
                    <div>ru</div>
                    <div>eng</div>
                </div>
            </header>
        </>
    );
};
