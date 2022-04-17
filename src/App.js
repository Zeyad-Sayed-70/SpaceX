import React, { Fragment } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './index.css';
import './designCrew.css';
import {Navbar} from './MainComponents/mainNavbar';
import {Home} from './MainComponents/home';
import {Destination} from './MainComponents/destination';
import {DestinationContent} from './MainComponents/destination';
import {Crew} from './MainComponents/crew';
import {Thechnologies} from './MainComponents/thecnologies';


// import {AppBar, Button, Toolbar, Typography, Container, Stack, Grid, Card} from '@mui/material';
// // import { styled, alpha } from '@mui/material/styles';
// // import Menu from '@mui/material/Menu';
// // import MenuItem from '@mui/material/MenuItem';
// import EditIcon from '@mui/icons-material/Edit';
// import Divider from '@mui/material/Divider';
// import ArchiveIcon from '@mui/icons-material/Archive';
// import FileCopyIcon from '@mui/icons-material/FileCopy';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const list = [1,2,3,4,5,6,7,8,9];

export default function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destination' element={<Destination />} />
        <Route path='/crew' element={<Crew />} />
        <Route path='/technology' element={<Thechnologies />} />
      </Routes>
      </Fragment>
    </Router>
  );
}

// const MaterialUiDesign = () => {

//   return (
//     <>
//     <AppBar position='relative' sx={{justifyContent: 'center'}}>
//       <Toolbar sx={{flexDirection: { xs: 'column', md: 'row'}}}>
//         <Typography variant='h6'>
//           Album Layout
//         </Typography>
//         <Stack direction='row' ml={'auto'} sx={{mr: {xs: 'auto', md: '0'}}}>
//           <CustomizedMenus title='Profile'/>
//           <CustomizedMenus title='Options'/>
//           <CustomizedMenus title='Members'/>
//         </Stack>
//       </Toolbar>
//     </AppBar>
//     <Container maxWidth='sm'>
//       <Typography variant='h3' textAlign={'center'} mt={7} mb={2} color='Text.primary' >Album Layout</Typography>
//       <Typography variant='h5' color='text.secondary' textAlign={'center'}>
//         Something short and leading about the collection below—its contents,
//         the creator, etc. Make it short and sweet, but not too short so folks
//         don&apos;t simply skip over it entirely.
//       </Typography>
//       <Stack justifyContent='center' spacing={2} direction="row" pt={3}>
//         <Button variant='contained'>Main call to action</Button>
//         <Button variant='outlined'>Secondary action</Button>
//       </Stack>
//     </Container>
//     <Container maxWidth='md'>
//       <Grid container spacing={4} py={12} > 
//         {list.map((e, i) => {
//           return (
//             <Grid item key={i} xs={12} sm={6} md={4}>
//               <Card sx={{textAlign: 'center', p: 3}}>
//                 <Typography variant='h5' color='text.primary' >Hello World</Typography>
//                 <Typography variant='h7' color='text.secondary' display='block' my={1} >
//                   Something short and leading about the collection below—its contents,
//                   the creator, etc. Make it short and sweet, but not too short so folks
//                   don&apos;t simply skip over it entirely.
//                 </Typography>
//                 <Button>More</Button>
//               </Card>
//             </Grid>
//           );
//         })}
//       </Grid>
//     </Container>
//     </>
//   );
// };

// const StyledMenu = styled((props) => (
//   <Menu
//     elevation={0}
//     anchorOrigin={{
//       vertical: 'bottom',
//       horizontal: 'right',
//     }}
//     transformOrigin={{
//       vertical: 'top',
//       horizontal: 'right',
//     }}
//     {...props}
//   />
// ))(({ theme }) => ({
//   '& .MuiPaper-root': {
//     borderRadius: 6,
//     marginTop: theme.spacing(1),
//     minWidth: 180,
//     color:
//       theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
//     boxShadow:
//       'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
//     '& .MuiMenu-list': {
//       padding: '4px 0',
//     },
//     '& .MuiMenuItem-root': {
//       '& .MuiSvgIcon-root': {
//         fontSize: 18,
//         color: theme.palette.text.secondary,
//         marginRight: theme.spacing(1.5),
//       },
//       '&:active': {
//         backgroundColor: alpha(
//           theme.palette.primary.main,
//           theme.palette.action.selectedOpacity,
//         ),
//       },
//     },
//   },
// }));


// export function CustomizedMenus({title}) {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div>
//       <Button
//         id="demo-customized-button"
//         aria-controls={open ? 'demo-customized-menu' : undefined}
//         aria-haspopup="true"
//         aria-expanded={open ? 'true' : undefined}
//         variant="contained"
//         disableElevation
//         onClick={handleClick}
//         endIcon={<Card />}
//       >
//         {title}
//       </Button>
//       <StyledMenu
//         id="demo-customized-menu"
//         MenuListProps={{
//           'aria-labelledby': 'demo-customized-button',
//         }}
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//       >
//         <MenuItem onClick={handleClose} disableRipple>
//           Edit
//         </MenuItem>
//         <MenuItem onClick={handleClose} disableRipple>
//           Duplicate
//         </MenuItem>
//         <Divider sx={{ my: 0.5 }} />
//         <MenuItem onClick={handleClose} disableRipple>
//           Archive
//         </MenuItem>
//         <MenuItem onClick={handleClose} disableRipple>
//           More
//         </MenuItem>
//       </StyledMenu>
//     </div>
//   );
// }