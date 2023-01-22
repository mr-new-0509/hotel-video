import { Button, Link, Stack } from '@mui/material';
import React from 'react';

export default function RightForMB({ hotel, sx }) {
  return (
    <Stack spacing={1} alignItems="center" sx={{ ...sx }}>
      <Button variant="contained" onClick={() => openDialog()}>Details</Button>
      {hotel && (
        <Stack direction="row" alignItems="center" spacing={1}>
          <Button variant="outlined" component={Link} target="_blank" href={hotel.booking_com}>Booking</Button>
          <Button variant="outlined" component={Link} target="_blank" href={hotel.hotels_com}>Hotels</Button>
          <Button variant="outlined" component={Link} target="_blank" href={hotel.agoda_com}>Agoda</Button>
        </Stack>
      )}
    </Stack>
  );
}