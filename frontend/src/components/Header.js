import React,{useState,useEffect} from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  position:'relative',
    [theme.breakpoints.up('md')]: {
      width: '65ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
 const cart = useSelector((state) => state.cart.cartList)?.length||0;
 const[searchValue,setSearchValue]=useState("");
 const[searchOptions,setSearchOptions]=useState([]);
 const[searchbox,setSearchBox]=useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

useEffect(()=>{
 const time=setTimeout(async()=>{
  const data = await axios.get("https://completion.amazon.in/api/2017/suggestions?limit=11&prefix="+searchValue+
  "&suggestion-type=WIDGET&suggestion-type=KEYWORD&page-type=Gateway&alias=aps&site-variant=desktop&version=3&event=onkeypress&wc=&lop=en_IN&last-prefix=ai&avg-ks-time=5504&fb=1&session-id=259-3297241-7638818&request-id=CXTZ1JYRA4ZX97RX86AD&mid=A21TJRUUN4KGV&plain-mid=44571&client-info=search-ui");
  setSearchOptions(data.data.suggestions)
  },250)
  return ()=>{clearTimeout(time);}
},[searchValue])



  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="black">
          <Badge badgeContent={cart} color="error">
          <Link to='/viewcart'>
                <ShoppingCartIcon/>
                </Link>
          </Badge>
        </IconButton>
        <Link to='/viewcart'>Cart
</Link>
      </MenuItem>
     
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="black"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar >
        <Toolbar position="fixed" sx={{backgroundColor:'#D3D3D3'}}>
          <IconButton
            size="large"
            edge="start"
            color="black"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            color="black"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            RV cart
          </Typography>
          <Search>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              color="black"
              value={searchValue}
              onChange={(e)=>setSearchValue(e.target.value)}
              onMouseEnter={()=>setSearchBox(true)}
              onBlur={()=>setSearchBox(false)}
              onScroll={()=>setSearchBox(false)}
            />
          </Search>
          <Link to='/searchresult' state={{searchValue}}>
            <SearchIcon sx={{color:"black",backgroundColor:'white',margin:'4px',width:'60px',height:'30px'}}/>  
            </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="black">
              <Badge badgeContent={cart} color="error">
               <Link to='/viewcart'>
                <ShoppingCartIcon/>
                </Link>
              </Badge>
            </IconButton>
           
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="black"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="black"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
        <div className='absolute bg-[#D3D3D3] ml-20 md:ml-44 w-5/12 text-black mt-14 rounded-lg border border-black z-10' onMouseLeave={()=>setSearchBox(false)}>
          {
            searchOptions&&searchbox&&searchOptions.map((product,index)=>{
            return <div key={index} className='p-2 cursor-pointer' onClick={()=>{setSearchValue(product.value);
              setSearchBox(false)}} 
          ><SearchIcon/>{product.value}</div>
            })
          
          }
            
            </div>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
     
    </Box>
  );
}
