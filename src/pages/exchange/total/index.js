import { Fragment } from "react";
import { ExchangesTable } from "../table";
import BackGround from "../background";
import MenuApp from "../../../utils/menu";
import { AppFooter } from "../../footer";
const Exchanges = () => {
    return(
        <Fragment>
            <MenuApp></MenuApp>
            <BackGround></BackGround>
            <ExchangesTable></ExchangesTable>
            <AppFooter></AppFooter>
        </Fragment>
    )
}
export default Exchanges