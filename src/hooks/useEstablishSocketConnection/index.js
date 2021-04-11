import { useEffect, useState } from "react";

const useEstablishSocketConnection = () => {
  const [data, setData] = useState([]);
  const [mumbaiCityData, setMumbaiCityData] = useState(0);
  useEffect(() => {
    const ws = new WebSocket(process.env.REACT_APP_BACKEND_SOCKET_URL);
    ws.onopen = () => {
      console.log("connected");
    };
    ws.onmessage = (evt) => {
      const message = JSON.parse(evt.data);
      setData(message);
      const filteredCityData = message.filter((data) => data.city === "Mumbai");
      filteredCityData.length && setMumbaiCityData(filteredCityData[0].aqi);
    };
    ws.onclose = () => {
      console.log("disconnected");
    };
  }, []);
  return { data, mumbaiCityData };
};

export default useEstablishSocketConnection;
