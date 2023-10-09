import { FC } from 'react';
import s from "./Footer.module.css"

interface FooterProps {

}

const Footer: FC<FooterProps> = () => {

    return (
        <div className={s.footer}>2023</div>
    )
}

export default Footer;