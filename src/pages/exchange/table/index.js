import { useState, useEffect, Fragment } from "react";
import { Table, Button } from "antd";
import axios from "axios";
import { TableStyle } from "./style";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export function ExchangesTable() {
  const [data, setData] = useState([]);
  const {id} = useParams();
  const [visible, setVisible] = useState(20);
  const showMore = () => {
    setVisible((prevValue) => prevValue + 40);
  };
  const columns = [
    {
      title: "rank",
      dataIndex: "key",
      sorter: (a, b) => a.key - b.key,
      sortDirections: ["descend"],
    },
    {
      title: "Name",
      dataIndex: "name,exchangeid",
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend"],
      render: (_, record) => (
        <Link to={`/exchanges/${record.exchangeid}`}> {record.name}</Link>
      ),
    },
    {
      title: "Trading Pairs",
      dataIndex: "tradingpairs",
      sorter: (a, b) => a.tradingpairs - b.tradingpairs,
      sortDirections: ["descend"],
    },
    {
      title: "Volume(24Hr)",
      dataIndex: "volume",
      sorter: (a, b) => a.volume - b.volume,
      sortDirections: ["descend"],
    },
    {
      title: "Total",
      dataIndex: "total",
      sorter: (a, b) => a.total - b.total,
      sortDirections: ["descend"],
    },
    {
      title: "Status",
      dataIndex: "status",
      sorter: (a, b) => a.status - b.status,
      sortDirections: ["descend"],
    },
  ];

  function renderFarm() {
    return data.map(function (item) {
      const {
        exchangeId,
        rank,
        name,
        tradingPairs,
        volumeUsd,
        percentTotalVolume,
        updated,
      } = item;
      return {
        exchangeid: `${exchangeId}`,
        key: `${rank}`,
        name: `${name}`,
        tradingpairs: Number(tradingPairs),
        volume: `${Number(volumeUsd).toFixed(2)}`,
        total: `${Number(percentTotalVolume).toFixed(2)}%`,
        status: `${Number(updated)}`,
      };
    });
  }

  const apiKey = "657c64be-54c8-4bf1-bac9-9e7397190ab0";

  useEffect(() => {
    axios
      .get(`https://api.coincap.io/v2/exchanges?apiKey=${apiKey}`)
      .then((respon) => {
        setData(respon.data.data);
      })
      .catch((error) => {
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
        {<Button onClick={showMore}>view</Button>}
      </TableStyle>
    </Fragment>
  );
}
