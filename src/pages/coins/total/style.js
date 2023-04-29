import styled from "styled-components";
import { green,white } from "../../../utils/styles/colors";
export const ToTalStyle = styled.div`
.coin-select{
    display:flex;
    align-items:center;
    justify-content: center;
}
.container{
    max-width:1200px;
    margin: 0 auto;
}
.gap{
    gap:24px
}
.select-box{
    background: #f8f8f8;
    border: 1px solid #ddd;
    padding:12px;
    border-radius:12px;
    p{
        margin:0;
    }
}
Button{
    all:unset;
    padding: 12px 40px;
    background: ${green};
    border-radius:24px;
    cursor:pointer;
    span{
        color:${white}
    }
    :hover{
        background-color: ${green} !important;
        opacity:0.8;
    }
}
`