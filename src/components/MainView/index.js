import React from "react";
import { Wrapper } from "./styles";
import DataTable from "../DataTable/index";
import DataChart from "../DataChart/index";
import useEstablishSocketConnection from "../../hooks/useEstablishSocketConnection";
import Header from "../Header";

const MainView = () => {
  const { data, mumbaiCityData } = useEstablishSocketConnection();
  return (
    <>
      <Header />
      <Wrapper>
        <DataTable data={data} />
        <DataChart cityData={mumbaiCityData} />
      </Wrapper>
    </>
  );
};

export default MainView;
