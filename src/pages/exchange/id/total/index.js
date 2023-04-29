import { Fragment } from "react";
import { ExchangeId } from "../info";
import MenuApp from "../../../../utils/menu";
import { AppFooter } from "../../../footer";
import { ExchangeExchangesTable } from "../table";
export function ExchangePage() {
    return(
        <Fragment>
            <MenuApp></MenuApp>
            <ExchangeId></ExchangeId>
            <ExchangeExchangesTable></ExchangeExchangesTable>
            <AppFooter></AppFooter>
        </Fragment>
    )
}