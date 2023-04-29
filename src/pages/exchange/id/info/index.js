import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button } from "antd";
import { SingleExchange } from "./style";
export function ExchangeId() {
    const {id} = useParams();
  const [data, setData] = useState({});
  function renderFarm(){
      const {
        id,
        rank,
        name,
        tradingPairs,
        volumeUsd,
        exchangeUrl,
        exchangeId
      } = data;
      function click() {
        window.open(`${exchangeUrl}`, "_blank")
      }
      return (
        <SingleExchange>
          <div className="bg">
        <div className="container d-flex info-parent">
          <div className="d-flex">
          <div className="rank-bg">
            <h1 className="">{rank}</h1>
            <span>Rank</span>
          </div>
          <div>
            <p className="exchange-name">{name}</p>
            <span className="pair-text">
                {tradingPairs}
                Pairs
            </span>
          </div>
          </div>
          <div className="d-flex">
          <div>
            <div>
            <p className="vt-title">
                Volume(24Hr)
            </p>
            <span className="vt-subtitle">
                {volumeUsd}
            </span>
            </div>
                <Button onClick={click}>Website</Button>
          </div>
          <div>
            <p className="vt-title">Top Pair</p>
            <span className="vt-subtitle">{exchangeId}</span>
          </div>
          </div>
        </div>
        </div>
        </SingleExchange>
      );
  }
  const apiKey = "657c64be-54c8-4bf1-bac9-9e7397190ab0";
  useEffect(() => {
    axios
      .get(`https://api.coincap.io/v2/exchanges/${id}?apiKey=${apiKey}`)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  return (<Fragment>
    {renderFarm()}
  </Fragment>);
}
