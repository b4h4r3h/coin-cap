import { useEffect, useState } from "react";
import api from "../../utils/api";
import axios from "axios";

const Bahare = () => {
  const [data, setData] = useState([]);

  async function fetchData() {
    const response = await api.get("candles", {
        params: {
            api_key: "657c64be-54c8-4bf1-bac9-9e7397190ab0",
          exchange: "poloniex",
          interval: "h8",
          baseId: "ethereum",
          quoteId: "bitcoin",
        },
      });   

    setData(response.data.data);
  }

  useEffect(() => {
    fetchData();
    console.log(data)
  }, []);

};

export default Bahare;
