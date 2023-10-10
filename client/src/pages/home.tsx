import { FC, useEffect, useState } from 'react';
import HomeTab from '../components/homeTab/HomeTab';
import { get_data } from "../api/getParserData"

interface ItemsProps {
    id: number, 
    title: string, 
    image_src: string
}

interface HomeTabProps {
    dataItems: ItemsProps[]
}

interface HomeProps {

}

const Home: FC<HomeProps> = () => {
    const [data, setData] = useState([])
    const [lastPage, setLastPage] = useState<number>(10)
    const [isLoading, setIsLoading] = useState(true);
    const getDataInfo = async (page?: number) => {
        setIsLoading(true);
        try {
            const res = await get_data(page ? page : 1)
            setLastPage(res.data.lastPage)
            setData(res.data.data)
        } catch (error) {
            console.log("Data Info error: ", error)
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        data.length === 0 && getDataInfo();
    }, []);


    return (
        <div>
            {isLoading && data.length === 0 ? (
                <div className="loading-animation">
                    <div className="loading-circle"></div>
                </div>
            ) : (
                <HomeTab dataItems={data} getDataInfo={getDataInfo} setLastPage={setLastPage} lastPage={lastPage} />
            )}
        </div>
    )
}

export default Home;
