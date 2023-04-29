import { useState, useEffect, Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import { CoinInfoStyle } from "./style";
import axios from "axios";
import { Button } from "antd";
export function CoinInfo() {
    const {id} = useParams();
  const [data, setData] = useState({});
  function renderFarm(){
      const {
        id,
        rank,
        name,
        symbol,
        priceUsd,
        changePercent24Hr,
        marketCapUsd,
        volumeUsd24Hr,
        supply,
        explorer,
      } = data;
      let change;
      if (changePercent24Hr > 0){
        change = (
          <span className="green-change change-text">
            {Number(changePercent24Hr).toFixed(2)}% ▲
          </span>
        );
      } else{
        change = (
          <span className="red-change change-text">
            {Number(changePercent24Hr).toFixed(2)}% ▼
          </span>
        );
      }
      function click() {
        window.open(`${explorer}`, "_blank");
      }
      return (
        <CoinInfoStyle>
        <div className="bg">
          <div className="info-parent container">
          <div className="d-flex">
          <div className="rank-bg">
            <h1 className="">{rank}</h1>
            <span>Rank</span>
          </div>
          <div className="column">
            <span className="coin-name">{`${name} (${symbol})`}</span>
            <div>
            <span className="price-text">{Number(priceUsd).toFixed(2)}</span>
            <span>
                {change}
            </span>
            </div>
          </div>
          </div>
          <div className="d-flex market-volume">
          <div className="column ">
            <span className="mvs-title">
              Market Cap
            </span>
            <span className="market-volume-supply-txt">
            {Number(marketCapUsd).toFixed(2)}
            </span>
            <div>
              <Button onClick={click} className="explore-btn" type="primary">Explorer</Button>
              </div>
          </div>
          <div className="column">
            <span className="mvs-title">
                Volume(24Hr)
            </span>
            <span className="market-volume-supply-txt">
            {Number(volumeUsd24Hr).toFixed(2)}
            </span>
          </div>
          <div className="column">
            <span className="mvs-title">
                Supply
            </span>
            <span className="market-volume-supply-txt">
                {`${Number(supply).toFixed(2)} ${id}`}
            </span>
          </div>
          </div>
          </div>
        </div>
        </CoinInfoStyle>
      );
  }
  const apiKey = "657c64be-54c8-4bf1-bac9-9e7397190ab0";
  useEffect(() => {
    axios
      .get(`https://api.coincap.io/v2/assets/${id}?apiKey=${apiKey}`)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  
  return (<Fragment>
    {renderFarm()}
  </Fragment>);
}
