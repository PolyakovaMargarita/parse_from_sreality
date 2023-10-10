import React, { FC, useState } from 'react';
import s from "./HomeTab.module.css"
import ItemsList from '../itemsList/ItemsList';
import MyIcon from '../UI/myIcon/MyIcon';
import Pagination from '../pagination/Pagination';


interface ItemsProps {
    id: number, 
    title: string, 
    image_src: string
}

interface HomeTabProps {
    dataItems: ItemsProps[],
    getDataInfo: (number: number) => void,
    setLastPage: (page: number) => void,
    lastPage: number,
}

const HomeTab: FC<HomeTabProps> = ({ dataItems, getDataInfo, lastPage, setLastPage }) => {
    const [currentPage, setCurrentPage] = useState<number>(1);

    const gatData = (number: number) => {
        setCurrentPage(number)
        getDataInfo(number)
    }
      
    return (
        <div className={s.container}>
            <div className={s.header}>Info list</div>
            <div>
                <ItemsList dataItems={dataItems} />
            </div>

            {lastPage && lastPage > 1 && (
                <div className={s.pagination}>
                    <button
                        onClick={() => gatData(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={s.paginationArrow}
                    >
                        <MyIcon 
                            image='leftArrowRound'
                            height={"20px"}
                            width={"20px"}
                            color='blue'
                        />
                    </button>
                    <Pagination 
                    gatData={gatData}
                    currentPage={currentPage}
                    lastPage={lastPage}
                    />
                    <button
                        onClick={() => gatData(currentPage + 1)}
                        disabled={currentPage === lastPage}
                        className={s.paginationArrow}
                    >
                        <MyIcon 
                            image='rightArrowRound'
                            height={"20px"}
                            width={"20px"}
                            color='blue'
                        />
                    </button>
                </div>                
            )}

        </div>
    )
}

export default HomeTab;
