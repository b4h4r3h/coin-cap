import { useState, useEffect, Fragment } from "react";
import { Table, Button } from "antd";
import axios from "axios";
import { TableStyleId } from "./style";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
export function ExchangeExchangesTable() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(20);
  const showMore = () => {
    setVisible((prevValue) => prevValue + 40);
  };
  const columns = [
    {
        title: "Pair",
        dataIndex: "base, quote",
        render: (_, record) => (
            <Fragment>
                <Link to= {`/assets/${record.baseId}`}>
                    {record.base}
                </Link>
                <Link to = {`/assets/ethereum`}>
                    {record.quote}
                </Link>
            </Fragment>
        ),
      },
    {
      title: "Price",
      dataIndex: "price",
      sorter: (a, b) => a.price - b.price,
      sortDirections: ["descend"],
    },
    {
      title: "Volume(24Hr)",
      dataIndex: "volume",
      sorter: (a, b) => a.volume - b.volume,
      sortDirections: ["descend"],
    },
    {
      title: "Volume(%)",
      dataIndex: "volumepercent",
      sorter: (a, b) => a.volumepercent - b.volumepercent,
      sortDirections: ["descend"],
    },
    {
      title: "Trades(24Hr)",
      dataIndex: "trades",
      sorter: (a, b) => a.trades - b.trades,
      sortDirections: ["descend"],
    },
  ];

  function renderFarm() {
    return data.slice(0, visible).map(function (item) {
      const {
        baseId,
        baseSymbol,
        quoteSymbol,
        rank,
        priceUsd,
        volumeUsd24Hr,
        percentExchangeVolume,
        tradesCount24Hr,
      } = item;
      return {
        base: `${baseSymbol}`,
        quote: `${quoteSymbol}`,
        price: `${Number(priceUsd).toFixed(4)}`,
        volume: `${Number(volumeUsd24Hr).toFixed(2)}$`,
        volumepercent: `${Number(percentExchangeVolume).toFixed(2)}%`,
        key: `${rank}`,
        trades: `${tradesCount24Hr}`,
        baseId: `${baseId}`,
      };
    });
  }

  const apiKey = "657c64be-54c8-4bf1-bac9-9e7397190ab0";

  useEffect(() => {
    axios
      .get(`https://api.coincap.io/v2/markets/?apiKey=${apiKey}`)
      .then((respon) => {
        setData(respon.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Fragment>
      <TableStyleId>
        <div className="table-style container">
          <Table
            columns={columns}
            dataSource={renderFarm()}
            pagination={false}
          />
        </div>
        {<Button className="view-more-btn" onClick={showMore}>view</Button>}
      </TableStyleId>
    </Fragment>
  );
}
