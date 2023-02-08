import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { AppBar, Avatar, Box, Button, IconButton, Link, Stack, Toolbar } from "@mui/material";
import { Article, ExpandLess, ExpandMore, FavoriteBorder } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { BASE_URL_OF_SERVER, FILE_EXTENSION_OF_VIDEO } from "../../../utils/constants";
import DialogDetails from "../../../components/DialogDetails";
// import RightForMB from "../HomeForMB/RightForMB";
import LeftForDB from "../HomeForMB/LeftForMB";

export default function HomeForMB({ hotels }) {
  const [currentHotel, setCurrentHotel] = useState(hotels[0]);
  const [dialogOpened, setDialogOpened] = useState(false);
  const [appbarVisible, setAppbarVisible] = useState(true);

  const handleSlideVideo = (swiper) => {
    const { activeIndex } = swiper;
    setCurrentHotel(hotels[activeIndex]);
    let videoDom = document.getElementById(`video${activeIndex}`);
    videoDom.play();
  };

  const openDialog = () => {
    setDialogOpened(true);
  };

  const toggleAppbar = () => {
    setAppbarVisible(!appbarVisible);
  };

  return (
    <>
      {appbarVisible ? (
        <>
          <AppBar component="nav">
            <Toolbar>
              <Button component={RouterLink} to="/" sx={{ fontSize: 18, fontWeight: 700, color: 'white', flexGrow: 1 }}>
                Logo
              </Button>
              <IconButton onClick={() => toggleAppbar()} sx={{ color: 'white' }}>
                <ExpandLess />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Toolbar />
        </>
      ) : (
        <IconButton onClick={() => toggleAppbar()} sx={{ position: 'absolute', top: 10, right: 10, color: 'white', zIndex: 999 }}>
          <ExpandMore />
        </IconButton>
      )}

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
            // pagination={{
            //   clickable: true,
            // }}
            // modules={[Pagination]}
            onSlideChange={handleSlideVideo}
          >
            {hotels.map((hotelItem, index) => (
              <SwiperSlide key={hotelItem.id}>
                <Box position="relative">
                  <Box component="video" controls width="100%" height="auto" id={`video${index}`} autoPlay={index === 0 ? true : false}>
                    <source
                      src={`${BASE_URL_OF_SERVER}/1.${FILE_EXTENSION_OF_VIDEO}`}
                      type={`video/${FILE_EXTENSION_OF_VIDEO}`}
                    />
                  </Box>
                  <Box position="absolute" bottom={60} width="100%">
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                      spacing={2}
                      position="relative"
                      px={1}
                    >
                      <IconButton onClick={() => openDialog()} sx={{ color: 'white' }}>
                        <Article />
                      </IconButton>

                      <Stack direction="row" alignItems="center">
                        <IconButton component={Link} target="_blank" href={hotelItem.booking_com}>
                          <Avatar src="/assets/images/booking.png" alt="Booking" sx={{ width: 20, height: 20 }} />
                        </IconButton>
                        <IconButton component={Link} target="_blank" href={hotelItem.hotels_com}>
                          <Avatar src="/assets/images/hotels.png" alt="Hotels" sx={{ width: 20, height: 20 }} />
                        </IconButton>
                        <IconButton component={Link} target="_blank" href={hotelItem.agoda_com}>
                          <Avatar src="/assets/images/agoda.png" alt="Agoda" sx={{ width: 20, height: 20 }} />
                        </IconButton>
                      </Stack>

                      <IconButton sx={{ position: 'absolute', top: 0, right: '45%', color: 'white' }}>
                        <FavoriteBorder />
                      </IconButton>
                    </Stack>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Box>
        </SwiperSlide>
        {/* <SwiperSlide>
          <RightForMB hotel={currentHotel} setDialogOpened={setDialogOpened} />
        </SwiperSlide> */}
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
