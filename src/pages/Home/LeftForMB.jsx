import React, { useMemo } from 'react';
import { Label, Search } from '@mui/icons-material';
import { Button, Radio, FormControl, FormControlLabel, FormLabel, RadioGroup, Stack, TextField } from '@mui/material';

export default function LeftForDB({ hotel, sx }) {
  const categories = useMemo(() => {
    const { priceCategory } = hotel;
    if (priceCategory) {
      return priceCategory.split(',');
    } else {
      return [];
    }
  }, [hotel.priceCategory]);
  return (
    <Stack alignItems="center" spacing={2} sx={{ ...sx }}>
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
  );
}