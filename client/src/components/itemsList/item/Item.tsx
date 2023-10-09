import { FC } from 'react';
import s from "./Item.module.css"


interface ItemProps {
    item: {
        id: number;
        title: string;
        imageUrl: string;
    };
}

const Item: FC<ItemProps> = ({ item }) => {

    return (
        <div className={`${s.container} ${item.id % 2 === 0 ? s.even : s.notEven}`}>
            <div>{item.id}</div>
            <div className={s.title}>{item.title}</div>
            <div>{item.imageUrl}</div>
        </div>
    )
}

export default Item;