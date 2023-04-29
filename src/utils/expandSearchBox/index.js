import { Fragment, useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { Input } from "antd";
import axios from "axios"
import { SearchBoxStyle } from "./style"
import { SearchOutlined } from "@ant-design/icons";
export function SerachBox() {
    const [data, setData] = useState([]);
    const [inputData, setInputData] = useState([]);
    async function onSearch(e) {
        setInputData(e.target.value)
        const response = await axios.get("https://api.coincap.io/v2/assets?657c64be-54c8-4bf1-bac9-9e7397190ab0",{
            params:{
                search: e.target.value
            }
        })
        setData(response.data.data)
    }
    //onChange a the event that is used while keyboard is pressed, e is a first parameter that automatically filled by onChange
    function renderFarm() {
        return data.map(function(item){
            const {name, symbol, id} = item
            return(
                <p>
                <Link to={`/assets/${id}`}>
                    <span>{name}</span>
                    <span>{symbol}</span>
                </Link>
                </p>
            )
        })
    }
    return(
        <SearchBoxStyle>
             <div className="input-parent">
            <input placeholder="Search a Coin..." onChange={onSearch} bordered={false}>
            </input>
                <SearchOutlined style={{ fontSize: '24px', color: '#111' }}></SearchOutlined>
             </div>
            <div className="search-result">
                {data.length != 0 && inputData!="" ? <Fragment>{renderFarm()}</Fragment>: <Fragment/>}
            </div>
        </SearchBoxStyle>

    )
}
