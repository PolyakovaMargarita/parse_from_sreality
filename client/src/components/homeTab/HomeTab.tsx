import { FC } from 'react';
import s from "./HomeTab.module.css"
import ItemsList from '../itemsList/ItemsList';

interface HomeTabProps {

}

const HomeTab: FC<HomeTabProps> = () => {

    const dataItems = [
        {id: 1, title: "title 1", imageUrl: "imageUrl"},
        {id: 2, title: "title 2", imageUrl: "imageUrl"},
        {id: 3, title: "title 3", imageUrl: "imageUrl"},
        {id: 4, title: "title 4", imageUrl: "imageUrl"},
        {id: 5, title: "title 5", imageUrl: "imageUrl"},
        {id: 6, title: "title 6", imageUrl: "imageUrl"},
        {id: 7, title: "title 7", imageUrl: "imageUrl"},
        {id: 8, title: "title 8", imageUrl: "imageUrl"},
        {id: 9, title: "title 10", imageUrl: "imageUrl"},
        {id: 10, title: "title 11", imageUrl: "imageUrl"},
        {id: 11, title: "title 12", imageUrl: "imageUrl"},
        {id: 12, title: "title 13", imageUrl: "imageUrl"},
        {id: 13, title: "title 14", imageUrl: "imageUrl"},
    ]

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