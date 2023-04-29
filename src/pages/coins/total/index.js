import { Fragment } from "react";
import { Button } from "antd";
import MenuApp from "../../../utils/menu";
import { CoinInfo } from "../coinInfo";
import { CoinExchangesTable } from "../exchange";
import { AppFooter } from "../../footer";
import { CoinSelects } from "../CoinSelect";
import { CoinInput } from "../coinInput";
import { ToTalStyle } from "./style";
export function CoinPage() {
  return (
    <ToTalStyle>
      <MenuApp></MenuApp>
      <CoinInfo></CoinInfo>
      <div className="coin-select container gap">
      <div className="select-box">
        <div>
          <p>You Sell</p>
        </div>
        <div className="coin-select">
          <CoinInput></CoinInput>
          <CoinSelects></CoinSelects>
        </div>
      </div>
      <div className="select-box">
        <div>
          <p>You Get</p>
        </div>
        <div className="coin-select">
          <CoinInput></CoinInput>
          <CoinSelects></CoinSelects>
        </div>
      </div>
      <Button type="primary">Connect Wallet</Button>
      </div>
      <CoinExchangesTable></CoinExchangesTable>
      <AppFooter></AppFooter>
    </ToTalStyle>
  );
}
