import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { alpha, AppBar, Avatar, Box, Button, IconButton, InputBase, Link, Stack, styled, Toolbar } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Navigation, Pagination } from 'swiper';
import { Article, FavoriteBorder, Search as SearchIcon } from '@mui/icons-material';
import DialogDetails from '../../../components/DialogDetails';
import LeftSidebar from './LeftSidebar';
import { BASE_URL_OF_SERVER, FILE_EXTENSION_OF_VIDEO } from '../../../utils/constants';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function HomeForDP({ hotels }) {
  const [currentHotel, setCurrentHotel] = useState(hotels[0]);
  const [dialogOpened, setDialogOpened] = useState(false);

  const handleSlideVideo = (swiper) => {
    const { activeIndex } = swiper;
    setCurrentHotel(hotels[activeIndex]);
  };

  const openDialog = () => {
    setDialogOpened(true);
  };
  return (
    <>
      <AppBar component="nav" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Box flexGrow={1}>
            <Button component={RouterLink} to="/" sx={{ fontSize: 18, fontWeight: 700, color: 'white' }}>
              Logo
            </Button>
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <LeftSidebar
        hotel={currentHotel}
      />
      <Box
        component={Swiper}
        sx={{ width: '70%', height: '90%' }}
        style={{ marginRight: 'unset', marginLeft: { sm: 160, md: 220, lg: 320 } }}
        direction={"vertical"}
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        navigation={true}
        modules={[Pagination, Mousewheel, Navigation]}
        onSlideChange={handleSlideVideo}
      >
        {hotels.map(hotelItem => (
          <SwiperSlide key={hotelItem.id}>
            <Box>
              <Stack direction="row" justifyContent="center">
                <Box component="video" controls width='60vw'>
                  <source
                    src={`${BASE_URL_OF_SERVER}/1.${FILE_EXTENSION_OF_VIDEO}`}
                    type={`video/${FILE_EXTENSION_OF_VIDEO}`}
                  />
                </Box>
              </Stack>
              <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2} position="relative">
                <IconButton onClick={() => openDialog()}>
                  <Article color="primary" />
                </IconButton>

                <Stack direction="row" alignItems="center" spacing={1}>
                  <Button component={Link} target="_blank" href={hotelItem.booking_com} sx={{ minWidth: 0, p: 0 }}>
                    <Avatar src="/assets/images/booking.png" alt="Booking" sx={{ width: 30, height: 30 }} />
                  </Button>
                  <Button component={Link} target="_blank" href={hotelItem.hotels_com} sx={{ minWidth: 0, p: 0 }}>
                    <Avatar src="/assets/images/hotels.png" alt="Hotels" sx={{ width: 30, height: 30 }} />
                  </Button>
                  <Button component={Link} target="_blank" href={hotelItem.agoda_com} sx={{ minWidth: 0, p: 0 }}>
                    <Avatar src="/assets/images/agoda.png" alt="Agoda" sx={{ width: 30, height: 30 }} />
                  </Button>
                </Stack>

                <IconButton sx={{ position: 'absolute', top: 0, right: '47.5%' }}>
                  <FavoriteBorder color="primary" />
                </IconButton>
              </Stack>
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