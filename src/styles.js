import styled from "styled-components";

export const Header = styled.p`
  font-size: 2.5rem;
  text-transform: uppercase;
  font-weight: 600;
  text-align: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px dotted green;
  margin: 5px;
`;

export const Total = styled.div`
  margin: 1rem;

  span {
    color: blue;
  }
`;

export const CardPack = styled.div`
  display: flex;
  margin: 1rem;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  width: 23%;
  margin: 2rem 1rem;
  border: 0.2rem solid #193465;
  border-radius: 2rem;
  padding: 3rem;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  &:hover {
    border: 0.2rem solid green;
  }

  p:first-child {
    white-space: nowrap;
    overflow: hidden;
    text-align: center;
    font-size: 2rem;
    text-overflow: ellipsis;
    font-family: "Dancing Script", cursive;
  }

  p {
    margin-bottom: 1.5rem;
  }
`;
