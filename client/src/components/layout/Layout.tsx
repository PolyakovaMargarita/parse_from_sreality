import { FC } from 'react';
import Header from '../header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';
import s from "./Layout.module.css"

interface LayoutProps {

}

const Layout: FC<LayoutProps> = () => {
    const screenHeight = window.innerHeight;
    console.log(`Высота экрана: ${screenHeight}px`);
    return (
        <div className={s.container} style={{ height: `${screenHeight}px` }}>
            <Header />
            <div className={s.containerOutlet}>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout;