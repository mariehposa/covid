import { Card } from "../styles";

const CovidCard = (props) => {
  const { covidCase } = props;

  return (
    <Card>
      <p>{covidCase.state}</p>
      <p>Number of confirmed cases: {covidCase.confirmedCases}</p>
      <p>Number of cases on admission: {covidCase.casesOnAdmission}</p>
      <p>Number of discharged: {covidCase.discharged}</p>
      <p>Number of death: {covidCase.death}</p>
    </Card>
  );
};

export default CovidCard;
