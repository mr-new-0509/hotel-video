import React, { useMemo } from 'react';
import { Button, Drawer, FormControl, FormControlLabel, FormLabel, Link, Radio, RadioGroup, Stack, TextField, Toolbar, useMediaQuery } from '@mui/material';
import { Label, Search } from '@mui/icons-material';

export default function LeftSidebar({ hotel, sx }) {
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

  

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: { sm: 200, lg: 300 },
        [`& .MuiDrawer-paper`]: { width: { sm: 200, lg: 300 }, boxSizing: 'border-box' },
        ...sx
      }}
    >
      <Toolbar />
      {hotel && (
        <Stack p={3} spacing={2}>
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