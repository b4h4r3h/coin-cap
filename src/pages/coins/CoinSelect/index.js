import { useState,useEffect, Fragment} from "react";
import { Select } from 'antd';
import axios from "axios";
import { SelectStyle } from "./style";
export function CoinSelects() {
  const [data,setData] = useState([]);
  const handleChange = (value) => {
    console.log(value); 
  };
  function renderFarm() {
    return data.map(function(item){
      const{baseSymbol,baseId,exchangeId,rank} = item;
      return {
        value: `${rank}`,
        label:(
          <div>
            <p>{baseSymbol}</p>
            <p>{baseId}</p>
          </div>
        ),
      }
    })
  }

  const apiKey = "657c64be-54c8-4bf1-bac9-9e7397190ab0";

  useEffect(() => {
    axios.get(`https://api.coincap.io/v2/markets?apiKey=${apiKey}`)
    .then(response =>{
      setData(response.data.data)
    })
    .catch(error =>{
      console.log(error)
    })
  },[])

  return(
    <SelectStyle>
          <Select
   defaultValue = "ETH"
    dropdownMatchSelectWidth = {false}
    dropdownStyle={{ width: 300 }}
    bordered={false}
    onChange={handleChange}
    options={renderFarm()}
    style={{height:38, display:"flex", alignItems:"center", maxWidth:90}}
  />
    </SelectStyle>
  )
}