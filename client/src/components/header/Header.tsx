import { FC } from 'react';
import s from "./Header.module.css"

interface HeaderProps {

}

const Header: FC<HeaderProps> = () => {

    return (
        <div className={s.header}>Flats sell</div>
    )
}

export default Header;