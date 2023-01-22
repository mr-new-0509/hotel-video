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

const HOTELS = [
  {
    id: 1,
    name: 'Hotel 1',
    alias: 'H1',
    description: 'The description of hotel 1.',
    stars: 'star1,star2,star3',
    priceCategory: 'category1,category2',
    booking_com: 'https://algodesk.io',
    hotels_com: 'https://dahliadesk.io',
    agoda_com: 'https://trendingo.cc',
    city_id: 1
  },
  {
    id: 2,
    name: 'Hotel 2',
    alias: 'H2',
    description: 'The description of hotel 2.',
    stars: 'star1,star2,star3',
    priceCategory: 'category1,category2',
    booking_com: 'https://algodesk.io',
    hotels_com: 'https://dahliadesk.io',
    agoda_com: 'https://trendingo.cc',
    city_id: 2
  },
  {
    id: 3,
    name: 'Hotel 3',
    alias: 'H3',
    description: 'The description of hotel 3.',
    stars: 'star1,star2,star3',
    priceCategory: 'category1,category2',
    booking_com: 'https://algodesk.io',
    hotels_com: 'https://dahliadesk.io',
    agoda_com: 'https://trendingo.cc',
    city_id: 3
  }
];

export default function HomeForMB() {
  const [currentHotel, setCurrentHotel] = useState(HOTELS[0]);
  const [dialogOpened, setDialogOpened] = useState(false);

  const handleSlideVideo = (swiper) => {
    const { activeIndex } = swiper;
    setCurrentHotel(HOTELS[activeIndex]);
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
      <Swiper
        className="mySwiper swiper-h"
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
          <Swiper
            className="mySwiper2 swiper-v"
            direction={"vertical"}
            spaceBetween={50}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            onSlideChange={handleSlideVideo}
          >
            {HOTELS.map(hotelItem => (
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
          </Swiper>
        </SwiperSlide>
        <SwiperSlide>
          <RightForMB hotel={currentHotel} setDialogOpened={setDialogOpened} />
        </SwiperSlide>
      </Swiper>
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
