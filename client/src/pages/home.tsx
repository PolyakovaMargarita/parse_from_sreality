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

    const getDataInfo = async () => {
        try {
            const res = await get_data()
            setData(res.data)
        } catch (error) {
            console.log("Data Info error: ", error)
        }
    } 

    console.log("data", data)

    useEffect(() => {
        data && data.length === 0 && getDataInfo()
    }, [data])

    return (
        <div>
            <HomeTab dataItems={data}/>
        </div>
    )
}

export default Home;