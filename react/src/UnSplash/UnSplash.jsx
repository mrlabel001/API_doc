import { useState } from 'react'
import Overview from './Overview';
import Authentication from './Authentication';
import ErrorCode from './ErrorCodes';
import RateLimiting from './RateLimiting';
import Endpoints from './Endpoints/Endpoints';

function UnSplash () {
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

export default UnSplash;
