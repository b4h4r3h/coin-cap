import styled from "styled-components";
import { shadow,green,red } from "../../../utils/styles/colors";
export const TableCoinStyle = styled.div`
.table-style{
    margin-top:40px;
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
.view-more-btn{
    display:block;
    margin: 0 auto;
}
`