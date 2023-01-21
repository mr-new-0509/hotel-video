import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

export default function DialogDetails({ opened, setOpened, hotel }) {
  const closeDialog = () => {
    setOpened(false);
  };
  return (
    <Dialog open={opened} onClose={closeDialog}>
      <DialogTitle>
        {hotel.name}
      </DialogTitle>
      <DialogContent>
        {hotel.description}
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={closeDialog}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}