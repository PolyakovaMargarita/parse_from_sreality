import { FC } from 'react';
import s from "./Item.module.css"
import { truncateText } from '../../../settings/fixText';
import MyIcon from '../../UI/myIcon/MyIcon';


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
            <div className={s.id}>
                {item.id}
                {window.innerWidth > 680 && (
                    <MyIcon
                        image='rightArrow'
                        width='25px'
                        height='25px'
                    />                    
                )}

            </div>
            <div className={s.info}>
                <div className={s.title}>
                    <div>
                        Title:
                    </div>
                    <div>
                        {item.title}
                    </div>
                    
                </div>
                <div className={s.imageInfo}>
                    <div>Image:</div>
                    <div>
                        {truncateText(item.image_src, 25)}
                    </div>
                </div>                
            </div>

        </a>
    )
}

export default Item;