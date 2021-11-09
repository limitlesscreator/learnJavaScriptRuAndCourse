import React from 'react';
import firstpage from '../../images/firstpage.png'
import s from './mainPage.module.sass'
import {Header} from "../Header/Header";

export const Mainpage = () => {
    return (
        <>
            <div className={s.font}>
                <div className={s.content}>
                    <div className={s.contentWith}>
                        <div className={s.adsProduction}>ВСЯ РЕКЛАМНАЯ ПРОДУКЦИЯ</div>
                        <div className={s.createMaterial}>создаем и материализуем идеи</div>
                        <div className={s.studioRealAds}>CТУДИЯ РЕАЛЬНОЙ РЕКЛАМЫ</div>
                    </div>
                </div>
            </div>
        </>
    );
}
