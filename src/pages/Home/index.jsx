import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Box, Button, IconButton, Link, Stack, TextField } from "@mui/material";
import { FavoriteBorder, Label, Search } from "@mui/icons-material";
import { BASE_URL_OF_SERVER, FILE_EXTENSION_OF_VIDEO } from "../../utils/constants";
import DialogDetails from "../../components/DialogDetails";

const HOTELS = [
  {
    id: 1,
    name: 'Hotel 1',
    alias: 'H1',
    description: 'The description of hotel 1.',
    stars: 'star1, star2, star3',
    priceCategory: '',
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
    stars: 'star1, star2, star3',
    priceCategory: '',
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
    stars: 'star1, star2, star3',
    priceCategory: '',
    booking_com: 'https://algodesk.io',
    hotels_com: 'https://dahliadesk.io',
    agoda_com: 'https://trendingo.cc',
    city_id: 3
  }
];

export default function Home() {
  const [currentHotel, setCurrentHotel] = useState(HOTELS[0]);
  const [dialogOpened, setDialogOpened] = useState(false);

  const handleSlideVideo = (swiper) => {
    const { activeIndex } = swiper;
    setCurrentHotel(HOTELS[activeIndex]);
  };

  const openDialog = () => {
    setDialogOpened(true);
  };

  return (
    <>
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
          <Stack spacing={1} alignItems="center">
            <Button variant="contained" onClick={() => openDialog()}>Details</Button>
            {currentHotel && (
              <Stack direction="row" alignItems="center" spacing={1}>
                <Button variant="outlined" component={Link} target="_blank" href={currentHotel.booking_com}>Booking</Button>
                <Button variant="outlined" component={Link} target="_blank" href={currentHotel.hotels_com}>Hotels</Button>
                <Button variant="outlined" component={Link} target="_blank" href={currentHotel.agoda_com}>Agoda</Button>
              </Stack>
            )}
          </Stack>
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
                  <video controls width="600">
                    <source
                      src={`${BASE_URL_OF_SERVER}/${hotelItem.id}.${FILE_EXTENSION_OF_VIDEO}`}
                      type={`video/${FILE_EXTENSION_OF_VIDEO}`}
                    />
                  </video>
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
          <Stack alignItems="center" spacing={1}>
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
          </Stack>
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
