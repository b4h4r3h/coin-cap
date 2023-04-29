import { Fragment} from 'react';
import MarketSnapShot from '../../utils/marketSnapShot';
import { CoinTable } from '../../utils/expandTable';
import { useNavigate } from 'react-router-dom';
import MenuApp from '../../utils/menu';
import { AppFooter } from '../footer';
const MainPage = () => {
  return (
    <Fragment>
      <MenuApp></MenuApp>
        <MarketSnapShot></MarketSnapShot>
        <CoinTable></CoinTable>
        <AppFooter></AppFooter>
    </Fragment>
  );
}
export default MainPage;
