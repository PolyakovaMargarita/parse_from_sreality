import { FC } from 'react';
import s from "./HomeTab.module.css"
import ItemsList from '../itemsList/ItemsList';

interface ItemsProps {
    id: number, 
    title: string, 
    image_src: string
}

interface HomeTabProps {
    dataItems: ItemsProps[]
}

const HomeTab: FC<HomeTabProps> = ({ dataItems }) => {


    return (
        <div className={s.container}>
            <div className={s.header}>Info list</div>
            <div>
                <ItemsList dataItems={dataItems} />
            </div>
            <div>pagination</div>
        </div>
    )
}

export default HomeTab;