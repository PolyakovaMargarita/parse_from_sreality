import { FC, useEffect, useRef, useState } from 'react';
import HomeTab from '../components/homeTab/HomeTab';
import { get_data } from '../api/getParserData';

interface ItemsProps {
  id: number;
  title: string;
  image_src: string;
}

interface HomeProps {}

const Home: FC<HomeProps> = () => {
    const [data, setData] = useState([]);
    const [lastPage, setLastPage] = useState<number>(10);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isNeedRequest, setIsNeedRequest] = useState<boolean>(false);
    const [countdown, setCountdown] = useState<number>(200);
    const [timer, setTimer] = useState<number>(10);
    const timeAccount = 3 * 60 * 1000 + 20

  const getDataInfo = async (page?: number) => {
    setIsLoading(true);
    try {
        const res = await get_data(page ? page : 1)
        setLastPage(res.data.total)
        setData(res.data.data)
        setIsLoading(false)
    } catch (error) {
        console.log("Data Info error: ", error)
        setTimeout(() => {
            getDataInfo()
        }, timeAccount) 
        setIsNeedRequest(true)
    } 
}

  useEffect(() => {
    data.length === 0 && getDataInfo();
  }, []);

  useEffect(() => {
    if (isNeedRequest && countdown !== 0) {
        const timerId = setTimeout(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        setTimer(Number(timerId));

    } else {
      clearTimeout(timer);
    }
  }, [countdown, isNeedRequest]);

  return (
    <div>
      {isLoading && data.length === 0 ? (
        <div className="loading-animation">
          <div className="loading-circle"></div>
          <div>Loading... Time left: {countdown} seconds</div>
        </div>
      ) : (
        <HomeTab dataItems={data} getDataInfo={getDataInfo} setLastPage={setLastPage} lastPage={lastPage} />
      )}
    </div>
  );
};

export default Home;
