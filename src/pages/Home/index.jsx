import React from 'react';
import { useMediaQuery } from '@mui/material';
import HomeForDP from './HomeForDP';
import HomeForMB from './HomeForMB';

const HOTELS = [
  {
    id: 1,
    name: 'Hotel 1',
    alias: 'H1',
    description: 'The description of hotel 1.',
    stars: 'star1,star2,star3',
    priceCategory: 'category1,category2',
    booking_com: 'https://booking.com',
    hotels_com: 'https://hotels.com',
    agoda_com: 'https://agoda.com',
    city_id: 1
  },
  {
    id: 2,
    name: 'Hotel 2',
    alias: 'H2',
    description: 'The description of hotel 2.',
    stars: 'star1,star2,star3',
    priceCategory: 'category1,category2',
    booking_com: 'https://booking.com',
    hotels_com: 'https://hotels.com',
    agoda_com: 'https://agoda.com',
    city_id: 2
  },
  {
    id: 3,
    name: 'Hotel 3',
    alias: 'H3',
    description: 'The description of hotel 3.',
    stars: 'star1,star2,star3',
    priceCategory: 'category1,category2',
    booking_com: 'https://booking.com',
    hotels_com: 'https://hotels.com',
    agoda_com: 'https://agoda.com',
    city_id: 3
  }
];

export default function Home() {
  const isMB = useMediaQuery('(max-width:640px)');
  return (
    <>
      {isMB ? <HomeForMB hotels={HOTELS} /> : <HomeForDP hotels={HOTELS} />}
    </>
  );
}