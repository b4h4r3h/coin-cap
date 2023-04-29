import { Menu } from "antd";
import { Fragment } from "react";
import { useNavigate, Link } from "react-router-dom";
import { MenuStyle } from "./style";
import AppSelectLanguage from "../selectInputLanguage";
import { AppSelect } from "../selectInputUsd";
import { SerachBox } from "../expandSearchBox";
const MenuApp = () => {
  const navigate = useNavigate();
  const onMenuClick = (item) => {
    if (item.key === "swap") {
      window.open(
        "https://app.shapeshift.com/?_ga=2.1232184.884560734.1680438699-677156255.1677587736#/demo/trade",
        "_blank"
      );
    } else {
      navigate(`/${item.key}`);
    }
  };
  return (
    <Fragment>
      <MenuStyle>
        <div className="menu-cs container">
          <Menu
            className="menu-element"
            onClick={onMenuClick}
            mode="horizontal"
            items={[
              {
                label: "Coins",
                key: "",
              },
              {
                label: "Exchanges",
                key: "exchanges",
              },
              {
                label: "swap",
                key: "swap",
                external: true,
              },
            ]}
          ></Menu>
          <img
            className="main-logo"
            src="https://coincap.io/static/logos/black.svg"
          ></img>
          <div className="menu-right-side">
            <AppSelect></AppSelect>
            <AppSelectLanguage></AppSelectLanguage>
            <SerachBox></SerachBox>
          </div>
        </div>
      </MenuStyle>
    </Fragment>
  );
};
export default MenuApp;
