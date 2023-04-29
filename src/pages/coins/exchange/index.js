import { useState,useEffect, Fragment} from "react";
import { Table, Button } from "antd";
import axios from "axios";
import { TableCoinStyle } from "./style";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
export function CoinExchangesTable() {
    const {id} = useParams();
    const [data, setData] = useState([]);
    const [visible, setVisible] = useState(20);
    const showMore = () => {
      setVisible(prevValue => prevValue + 40);
    }
    const columns = [
      {
        title: "Exchange",
        dataIndex: "exchange",
        sorter: (a, b) => a.exchange.length - b.exchange.length,
        sortDirections: ["descend"],
        render: (_,record) =>(
            <Link to={`/exchanges/${record.exchange}`}>
                {record.exchange}
            </Link>
        )
      },
      {
        title: "Pair",
        dataIndex: "base,quote",
        render: (text, record) => (
            <span>
              {record.base}/{record.quote}
            </span>
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
    ];
    function renderFarm() {
      return data.slice(0,visible).map(function (item) {
        const {
            baseId,
            rank,
          exchangeId,
          baseSymbol,
          quoteSymbol,
          priceUsd,
          volumeUsd24Hr,
          volumePercent,
        } = item;
        return {
          exchange: `${exchangeId}`,
          base: `${baseSymbol}`,
          quote: `${quoteSymbol}`,
          price: `${Number(priceUsd).toFixed(4)}`,
          volume: `${Number(volumeUsd24Hr).toFixed(2)}$`,
          volumepercent: `${Number(volumePercent).toFixed(2)}%`,
          id:`${baseId}`,
          key:`${rank}`
        }
      });
    }
  
    const apiKey = "657c64be-54c8-4bf1-bac9-9e7397190ab0";
    
    useEffect(() => {
      axios.get(`https://api.coincap.io/v2/assets/${id}/markets?apiKey=${apiKey}`)
        .then(respon => {
          setData(respon.data.data);
        })
        .catch(error => {
          console.log(error);
        }); 
    }, []);
    return (
      <Fragment>
        <TableCoinStyle> 
          <div className="table-style">
          <div className="container">
            <Table
              columns={columns}
              dataSource={renderFarm()}
              pagination={false}
            />
          </div>
          </div>
          {<Button className="view-more-btn" onClick={showMore}>view</Button>}
        </TableCoinStyle>
      </Fragment>
    );
  }