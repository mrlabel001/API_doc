import { useState } from 'react'
import CurrentUser from './CurrentUser';
import Users from './Users';
import Photos from './Photos';
import Search from './Search';
import Collections from './Collections';
import Topics from './Topics';
import Stats from './Stats';

function Endpoints () {
  return (
    <>
        <CurrentUser />
        <Users />
        <Photos />
        <Search />
        <Collections />
        <Topics />
        <Stats />
    </>
  )
}

export default Endpoints;

