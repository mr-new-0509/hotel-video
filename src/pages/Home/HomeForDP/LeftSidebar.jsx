import React, { useMemo } from 'react';
import { Button, Drawer, FormControl, FormControlLabel, FormLabel, Link, Radio, RadioGroup, Stack, TextField, Toolbar, useMediaQuery } from '@mui/material';
import { Label, Search } from '@mui/icons-material';

export default function LeftSidebar({ hotel, sx, setDialogOpened }) {
  const isSM = useMediaQuery('(max-width:640px)');
  const isMD = useMediaQuery('(max-width:920px)');
  const isLG = useMediaQuery('(max-width:1120px)');

  const categories = useMemo(() => {
    if (hotel) {
      const { priceCategory } = hotel;
      if (priceCategory) {
        return priceCategory.split(',');
      }
    }
    return [];
  }, [hotel?.priceCategory]);

  const openDialog = () => {
    setDialogOpened(true);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: { sm: 200, lg: 300 },
        [`& .MuiDrawer-paper`]: { width: { sm: 200, lg: 300 }, boxSizing: 'border-box' }
      }}
    >
      <Toolbar />
      {hotel && (
        <Stack p={3} spacing={2}>
          <Button variant="contained" onClick={() => openDialog()}>Details</Button>
          <Stack direction={{ sm: 'column', lg: 'row' }} alignItems="center" spacing={1}>
            <Button variant="outlined" component={Link} target="_blank" href={hotel.booking_com}>Booking</Button>
            <Button variant="outlined" component={Link} target="_blank" href={hotel.hotels_com}>Hotels</Button>
            <Button variant="outlined" component={Link} target="_blank" href={hotel.agoda_com}>Agoda</Button>
          </Stack>
          <TextField
            label="Search"
            InputProps={{
              startAdornment: <Search />
            }}
            placeholder="Search..."
          />
          <Stack direction="row" alignItems="center" spacing={1}>
            <Button startIcon={<Label />}>Tag</Button>
          </Stack>
          <FormControl>
            <FormLabel htmlFor="category">Category</FormLabel>
            {categories.length > 0 && (
              <RadioGroup id="category">
                {categories.map((categoryItem, index) => (
                  <FormControlLabel
                    key={index}
                    label={categoryItem}
                    control={<Radio />}
                    value={categoryItem}
                  />
                ))}
              </RadioGroup>
            )}
          </FormControl>
        </Stack>
      )}
    </Drawer>
  );
}