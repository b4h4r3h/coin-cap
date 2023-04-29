import styled from "styled-components";
import { white,green,red, shadow, coinInfoShadow } from "../../../utils/styles/colors";
export const CoinInfoStyle = styled.div`
.bg{
    background:
    linear-gradient(to right, rgb(63, 81, 181), rgb(100, 181, 246)) rgb(255, 255, 255);
    padding:32px 0;
    margin-bottom:32px;
}
.column{
    display:flex;
    flex-direction:column;
}
p, span,h1{
    color: ${white}
}
.green-change{
    color:${green}
}
.red-change{
    color:${red}
}
.d-flex{
    display:flex;
}
.coin-name{
    font-size:28px;
    font-weight:600;
    margin-bottom: 16px;
}
.market-volume{
    gap:80px;
}
.container{
    max-width:1200px;
    margin: 0 auto;
}
.info-parent{
    display:flex;
    justify-content:space-between;
    align-items:center;
}
.rank-bg{
    background: ${green};
    text-align:center;
    padding:12px;
    border-radius:0 0 12px 12px;
    position:relative;
    box-shadow: ${coinInfoShadow};
    margin-right:40px;
}
.rank-bg::before{
    content: "";
    width: calc(100% + 20px);
    height: 10px;
    background: inherit;
    position: absolute;
    left: -10px;
    top: 0px;
    border-radius: 8px;
}
h1{
    line-height:0;
}
.price-text{
    font-size:24px;
    font-weight:600;
    margin-right: 16px;
}
.change-text{
    font-size: 18px;
    font-weight:600;
}
.market-volume-supply-txt{
    font-size: 18px;
    font-weight:600;
}
.mvs-title{
    font-weight:600;
}
.explore-btn{
    background-color: ${green};
    border-radius:20px;
    box-shadow: ${coinInfoShadow};
    margin-top:24px;
    cursor:pointer;
    :hover{
        transform: translateY(-2px);
        background-color: ${green};
    }
    span{
        font-size:16px;
        font-weight:600;
    }
}
.ant-btn{
    padding:2px 24px 8px ;
}
`