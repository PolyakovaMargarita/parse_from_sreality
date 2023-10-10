import { FC } from 'react';
import s from "./Item.module.css"
import { truncateText } from '../../../settings/fixText';


interface ItemProps {
    item: {
        id: number;
        title: string;
        image_src: string;
    };
}

const Item: FC<ItemProps> = ({ item }) => {

    return (
        <a href={item.image_src} className={`${s.container} ${item.id % 2 === 0 ? s.even : s.notEven}`}>
            <div>{item.id}</div>
            <div className={s.title}>{item.title}</div>
            <div>{truncateText(item.image_src, 25)}</div>
        </a>
    )
}

export default Item;