import './Endpoint.css';
import CurrentUser from './CurrentUser';
import Users from './Users';
import Photos from './Photos';
import Search from './Search';
import Collections from './Collections';
import Topics from './Topics';
import Stats from './Stats';

function Endpoints () {
  return (
    <div className='endpoint_div'>
        <CurrentUser />
        <Users />
        <Photos />
        <Search />
        <Collections />
        <Topics />
        <Stats />
    </div>
  )
}

export default Endpoints;

