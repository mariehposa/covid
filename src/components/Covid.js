import React, { useState, useEffect } from "react";
import axios from "axios";
import CovidCard from "./CovidCard";
import { Wrapper, Total, CardPack } from "../styles";

const url = `https://covidnigeria.herokuapp.com/api`;

const Covid = () => {
  const [totalCase, setTotalCase] = useState({});
  const [covidCases, setCovidCases] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        // console.log(res);
        setTotalCase(res.data.data);
        setCovidCases(res.data.data.states);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);

  return (
    <Wrapper>
      <Total>
        <p>
          Total samples tested: <span>{totalCase.totalSamplesTested}</span>
        </p>
        <p>
          Total confirmed cases: <span>{totalCase.totalConfirmedCases}</span>
        </p>
        <p>
          Total active cases: <span>{totalCase.totalActiveCases}</span>
        </p>
        <p>
          Total discharged: <span>{totalCase.discharged}</span>
        </p>
        <p>
          Total death: <span>{totalCase.death}</span>
        </p>
      </Total>

      <CardPack>
        {covidCases.map((cas) => (
          <CovidCard key={cas._id} covidCase={cas} />
        ))}
      </CardPack>
    </Wrapper>
  );
};

export default Covid;
