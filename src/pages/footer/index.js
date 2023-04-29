import { Fragment } from "react";
import { Link } from "react-router-dom";
import { FooterStyle } from "./style";
import { StarOutlined, StarFilled } from '@ant-design/icons';
import Icon from "@ant-design/icons/lib/components/AntdIcon";
import { FacebookFilled, TwitterOutlined } from "@ant-design/icons";
export function AppFooter(){
    return(
    <Fragment>
    <FooterStyle>
        <div className="margin-top-padding">
        <div className="main-footer container">
        <div>
            <p className="nowrap-bold">COINCAP.IO</p>
            <div className="inner-element">
                <Link to="/">Methodology</Link>
                <Link to="/">Support</Link>
                <Link to="/">Our API</Link>
                <Link to="/">Rate Comparison</Link>
                <Link to="/">Careers</Link>
            </div>
        </div>
        <div>
            <div>
                <p className="nowrap-bold">LEGALS</p>
                <div className="inner-element">
                    <Link to="/">Terms of Service</Link>
                    <Link to="/">Privacy Policy</Link>
                </div>
            </div>
            <div>
                <p className="nowrap-bold">DISCLAIMER</p>
                <p>Neither ShapeShift AG nor CoinCap are in any way associated with CoinMarketCap, LLC or any of its goods and services.</p>
            </div>
        </div>
        <div>
            <p className="nowrap-bold">FOLLOW US</p>
            <FacebookFilled style={{ fontSize: '32px', color: '#fff' }}/>
            <TwitterOutlined style={{ fontSize: '32px', color: '#fff', paddingLeft:'12px' }} />
        </div>
        <div>
            <p className="nowrap-bold">COINCAP APP AVAILABLE ON</p>
        </div>
        </div>
        </div>
    </FooterStyle>
    </Fragment>
    )
}