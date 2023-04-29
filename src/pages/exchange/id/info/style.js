import styled from "styled-components";
import { green,coinInfoShadow,white } from "../../../../utils/styles/colors";
export const SingleExchange = styled.div`
.bg{
    background:
    linear-gradient(to right, rgb(63, 81, 181), rgb(100, 181, 246)) rgb(255, 255, 255);
    padding:32px 0;
    margin-bottom:32px;
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
.container{
    max-width:1200px;
    margin: 0 auto;
}
.d-flex{
    display:flex;
    gap:56px;
}
h1{
    line-height:0;
}
p, span,h1{
    color: ${white}
}
.exchange-name{
    font-size:28px;
    font-weight:600;
    margin-bottom: 16px;
    margin-top:0;
}
.pair-text{
    font-size: 24px;
    font-weight: 600;
}
.info-parent{
    justify-content:space-between;
    align-items:center;
}
.vt-title{
    font-weight: 600;
    margin-bottom:0;
}
Button{
    all:unset;
    margin-top:16px;
    padding: 8px 32px;
    background: ${green};
    box-shadow: ${coinInfoShadow};
    border-radius:24px;
    cursor:pointer;
    span{
        color:${white}
    }
    :hover{
        transform: translateY(-2px);
        background-color: ${green};
    }
    span{
        font-size:16px;
        font-weight:600;
    }
}
.vt-subtitle{
    font-size: 18px;
    font-weight: 600;
}
`