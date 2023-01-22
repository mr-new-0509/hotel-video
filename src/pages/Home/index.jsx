import React from 'react';
import { useMediaQuery } from '@mui/material';
import HomeForDP from './HomeForDP';
import HomeForMB from './HomeForMB';

export default function Home() {
  const isMB = useMediaQuery('(max-width:390px)');
  return (
    <>
      {isMB ? <HomeForMB /> : <HomeForDP />}
    </>
  );
}