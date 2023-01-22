import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Box, Button, IconButton, Stack, Toolbar } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { FavoriteBorder } from '@mui/icons-material';
import DialogDetails from '../../../components/DialogDetails';
import LeftSidebar from './LeftSidebar';
import { BASE_URL_OF_SERVER, FILE_EXTENSION_OF_VIDEO } from '../../../utils/constants';

export default function HomeForDP({ hotels }) {
  const [currentHotel, setCurrentHotel] = useState(hotels[0]);
  const [dialogOpened, setDialogOpened] = useState(false);

  const handleSlideVideo = (swiper) => {
    const { activeIndex } = swiper;
    setCurrentHotel(hotels[activeIndex]);
  };
  return (
    <>
      <AppBar component="nav" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Button component={RouterLink} to="/" sx={{ fontSize: 18, fontWeight: 700, color: 'white' }}>
            Logo
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <LeftSidebar
        hotel={currentHotel}
        setDialogOpened={setDialogOpened}
      />
      <Box
        component={Swiper}
        className="mySwiper2 swiper-v"
        sx={{ flexGrow: 1 }}
        direction={"vertical"}
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        onSlideChange={handleSlideVideo}
      >
        {hotels.map(hotelItem => (
          <SwiperSlide key={hotelItem.id}>
            <Box>
              <Stack direction="row" justifyContent="center" fullWidth>
                <Box component="video" controls width='60vw'>
                  <source
                    src={`${BASE_URL_OF_SERVER}/1.${FILE_EXTENSION_OF_VIDEO}`}
                    type={`video/${FILE_EXTENSION_OF_VIDEO}`}
                  />
                </Box>
              </Stack>
              <Box>
                <IconButton>
                  <FavoriteBorder color="primary" />
                </IconButton>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Box>
      {currentHotel && (
        <DialogDetails
          opened={dialogOpened}
          setOpened={setDialogOpened}
          hotel={currentHotel}
        />
      )}
    </>
  );
}