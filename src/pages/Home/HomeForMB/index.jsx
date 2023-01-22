import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import { FavoriteBorder } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { BASE_URL_OF_SERVER, FILE_EXTENSION_OF_VIDEO } from "../../../utils/constants";
import DialogDetails from "../../../components/DialogDetails";
import RightForMB from "../HomeForMB/RightForMB";
import LeftForDB from "../HomeForMB/LeftForMB";

export default function HomeForMB({ hotels }) {
  const [currentHotel, setCurrentHotel] = useState(hotels[0]);
  const [dialogOpened, setDialogOpened] = useState(false);

  const handleSlideVideo = (swiper) => {
    const { activeIndex } = swiper;
    setCurrentHotel(hotels[activeIndex]);
  };

  return (
    <>
      <AppBar component="nav">
        <Toolbar>
          <Button component={RouterLink} to="/" sx={{ fontSize: 18, fontWeight: 700, color: 'white' }}>
            Logo
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Box
        component={Swiper}
        sx={{ width: '100%', height: '100%' }}
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        initialSlide={1}
      >
        <SwiperSlide>
          <LeftForDB hotel={currentHotel} />
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component={Swiper}
            sx={{ width: '100%', height: '100%' }}
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
                  <Box component="video" controls width='80vw'>
                    <source
                      src={`${BASE_URL_OF_SERVER}/1.${FILE_EXTENSION_OF_VIDEO}`}
                      type={`video/${FILE_EXTENSION_OF_VIDEO}`}
                    />
                  </Box>
                  <Box>
                    <IconButton>
                      <FavoriteBorder color="primary" />
                    </IconButton>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <RightForMB hotel={currentHotel} setDialogOpened={setDialogOpened} />
        </SwiperSlide>
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
