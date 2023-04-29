import { GlobalStyle } from "../styles/globalStyles";
import styled from "styled-components";
import { grey80percent, white,shadow, green,red } from "../styles/colors";
export const TableStyle = styled.div`
.table-style{
    position:relative;
    top:100px;
}
.container{
    max-width:1200px;
    margin: 0 auto;
}
.ant-table-wrapper table{
    box-shadow:${shadow};
    margin-bottom: 32px;
    border-radius: 8px;
}
.green-change{
    color:${green};
}
.red-change{
    color:${red};
}
Button{
    all:unset;
    padding: 12px 40px;
    background: ${green};
    border-radius:24px;
    cursor:pointer;
    display:block;
    margin:0 auto;
    span{
        color:${white}
    }
    :hover{
        background-color: ${green} !important;
        opacity:0.8;
    }
}
.btn-parent{
    margin-top: 80px;
}
`