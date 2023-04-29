import { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Button, Table } from "antd";
import { TableStyle } from "./style";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export function CoinTable() {
  const [datas, setData] = useState([]);
  const {id} = useParams();
  const [visible, setVisible] = useState(20);
  const showMore = () => {
    setVisible(prevValue => prevValue + 40);
  }
  const columns = [
    {
      title: "rank",
      dataIndex: "key",
      sorter: (a, b) => a.key - b.key,
      sortDirections: ["descend"],
    },
    {
      title: "Name",
      dataIndex: "name, symbol",
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend"],
      render: (_, record) => (
        <Link to= {`/assets/${record.id}`}>
          {record.symbol} {record.name}
        </Link>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      sorter: (a, b) => a.price - b.price,
      sortDirections: ["descend"],
    },
    {
      title: "Market Cap",
      dataIndex: "marketcap",
      sorter: (a, b) => a.marketcap - b.marketcap,
      sortDirections: ["descend"],
    },
    {
      title: "VWAP(24Hr)",
      dataIndex: "vwap",
      sorter: (a, b) => a.vwap - b.vwap,
      sortDirections: ["descend"],
    },
    {
      title: "Supply",
      dataIndex: "supply",
      sorter: (a, b) => a.supply - b.supply,
      sortDirections: ["descend"],
    },
    {
      title: "Volume(24Hr)",
      dataIndex: "volume",
      sorter: (a, b) => a.volume - b.volume,
      sortDirections: ["descend"],
    },
    {
      title: "Change(24Hr)",
      dataIndex: "change",
      sorter: (a, b) => a.change - b.change,
      sortDirections: ["descend"],
    },
  ];
  function renderFarm() {
    return datas.slice(0, visible).map(function (item) {
      const {
        id,
        rank,
        name,
        marketCapUsd,
        priceUsd,
        vwap24Hr,
        supply,
        volumeUsd24Hr,
        changePercent24Hr,
        symbol,
      } = item;
      let change;
      if (changePercent24Hr > 0){
        change = (
          <span className="green-change">
            {Number(changePercent24Hr).toFixed(2)}%
          </span>
        );
      } else{
        change = (
          <span className="red-change">
            {Number(changePercent24Hr).toFixed(2)}%
          </span>
        );
      }
      return {
        key: `${rank}`,
        name: `${name}`,
        price: Number(priceUsd).toFixed(2),
        marketcap: Number(marketCapUsd).toFixed(2),
        vwap: Number(vwap24Hr).toFixed(2),
        supply: Number(supply).toFixed(2),
        volume: Number(volumeUsd24Hr).toFixed(2),
        change: change,
        symbol: `${symbol}`,
        id: `${id}`,
      }
    });
  }

  const apiKey = "657c64be-54c8-4bf1-bac9-9e7397190ab0";
  
  useEffect(() => {
    axios.get(`https://api.coincap.io/v2/assets?apiKey=${apiKey}`)
      .then(respon => {
        setData(respon.data.data);
      })
      .catch(error => {
        console.log(error);
      }); 
  }, []);
  return (
    <Fragment>
      <TableStyle>
        <div className="table-style container">
          <Table
            columns={columns}
            dataSource={renderFarm()}
            pagination={false}
          />
        </div>
        <div className="btn-parent">
        {<Button onClick={showMore}>view</Button>}
        </div>
      </TableStyle>
    </Fragment>
  );
}
