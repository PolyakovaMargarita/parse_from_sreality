import { FC } from 'react';
import Item from './item/Item';
import s from "./ItemsList.module.css"

interface Items {
    id: number;
    title: string;
    image_src: string;
}

interface ItemsListProps {
    dataItems: Items[];
}

const ItemsList: FC<ItemsListProps> = ({ dataItems }) => {

    return (
        <div className={s.container}>
            {dataItems.map((item, index) => (
                <Item key={index} item={item} />
            ))}
        </div>
    )
}

export default ItemsList;