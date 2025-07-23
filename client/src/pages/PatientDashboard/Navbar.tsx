import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import palettes from '../../theme/palettes';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import axios from 'axios';
import useAuth from "../../auth/auth";

function ResponsiveAppBar() {  
  const navigate = useNavigate();
  const {
    authName,
  } = useAuth();

  const handleLogout = async () => {
    try {
      await axios.get('http://localhost:5000/api/auth/logout', {withCredentials:true});
      alert('Has cerrado sesión');
      navigate('/');
    } catch (error) {
      alert('No se pudo cerrar sesión');
      console.log(error);
    };
  };

  return (
    <AppBar
      position="fixed"
      sx={{ 
        display:'flex',
        zIndex: theme => theme.zIndex.drawer + 1,
        height: '4rem',
        
        boxShadow: 0,
        border: 1,
        borderColor: palettes.lightGray.main,
        backgroundColor: palettes.primary.main,
      }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display:'flex', justifyContent: 'space-between' }}>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 0,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 900,
              fontSize: '1.75rem',
              letterSpacing: '0',
              color: '#000',
              textDecoration: 'none',
            }}
          >
            CEDHIC
          </Typography>
          <Box 
            sx={{
              margin:0,
              flexGrow: 0,
              display: { xs: 'none', md: 'flex' },
              justifyContent:'center',
              alignItems:'center',
              gap:1,
            }}
            >
            <AccountCircleRoundedIcon
              sx={{
                color: palettes.lightPurple.main,
                fontSize:'2rem'
              }}
            />
            <Typography>
              {`¡Bienvenido, ${authName}!`}
            </Typography>
            <Button
              onClick={handleLogout}
                sx={{
                  display:'flex',
                  justifyContent:'space-evenly',
                  border:0,
                }}
                variant='buttonOne'
              >
                <LogoutIcon sx={{ margin:0 }} />
              </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
