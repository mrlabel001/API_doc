import Overview from './Overview';
import Authentication from './Authentication';
import ErrorCode from './ErrorCode';
import RateLimiting from './RateLimiting';
import Endpoints from './Endpoints/Endpoints';

function RickMorty () {
  return (
    <>
        <Overview />
        <Authentication />
        <ErrorCode />
        <RateLimiting />
        <Endpoints />
    </>
  )
}

export default RickMorty;
