import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Container from '@mui/material/Container';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {Drawer} from '@mui/material';
import palettes from '../theme/palettes';
import { useLocation, useNavigate } from 'react-router-dom';

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const pages = [
    { label: 'Inicio', id: 'inicio' },
    { label: 'Servicios', id: 'servicios' },
    { label: 'Nuestro Equipo', id: 'equipo' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contacto', id: 'contacto' },
  ];
  const simpleRoutes = [
    '/login',
    '/register',
    '/paciente/login',
    '/secretario/login'
  ];
  const location = useLocation();
  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    handleCloseNavMenu(); // si quieres cerrar el menú en mobile
};

  if (simpleRoutes.includes(location.pathname)) {
    return (
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: '#fff',
          boxShadow: 0,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <Typography 
              variant="h5"
              sx={{ color: '#000', fontWeight: 900 }}
            >
              CEDHIC
            </Typography>
            <Button variant="buttonOne" onClick={() => navigate('/')}>
              Volver a inicio
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    );
  }

  return (
    <AppBar
      position="fixed"
      sx={{ 
        zIndex: theme => theme.zIndex.drawer + 1,
        justifyContent:'center',
        height: '4rem',
        boxShadow: 0,
        border: 1,
        borderColor: palettes.lightGray.main,
        backgroundColor: palettes.primary.main,
      }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
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
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CEDHIC
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
            <IconButton
              size="large"
              aria-label="toggle menu"
              onClick={anchorElNav ? handleCloseNavMenu : handleOpenNavMenu}
              color="inherit"
            >
              {anchorElNav ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            <Drawer
              anchor="left"
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiDrawer-paper': {
                  width: '100%',
                  backgroundColor: '#fff',
                  padding: 2,
                  marginTop: '4rem',
                },
              }}
            > {
                pages.map((page) => (
                  <MenuItem key={page.id} onClick={() => handleScroll(page.id)}>
                    <Typography sx={{ textAlign: 'center', width: '100%' }}>{page.label}</Typography>
                  </MenuItem>
                ))
              }
              <MenuItem onClick={handleCloseNavMenu}>
                <Button fullWidth variant="buttonOne">Acceso Empleados</Button>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Button fullWidth variant="buttonTwo">Acceso Pacientes</Button>
              </MenuItem>
            </Drawer>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {pages.map((page) => (
              <Button
                disableRipple
                key={page.id}
                onClick={() => handleScroll(page.id)}
                sx={{
                  color: '#000',
                  transition: 'color 0.3s',
                  fontWeight: '600',
                  '&:hover': {
                    color: theme => theme.palette.secondary.main,
                  },
                }}
              >
                {page.label}
              </Button>
            ))}
          </Box>
          <Box 
            sx={{
              flexGrow: 0,
              display: { xs: 'none', md: 'flex' },
            }}
            >
            <Stack spacing={2} direction="row">
              <Button 
                onClick={()=> navigate('/secretario/login')}
                variant="buttonOne"
              >Acceso Empleados</Button>
              <Button 
                onClick={()=> navigate('/paciente/login')}
                variant="buttonTwo"
              >Acceso Pacientes</Button>
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
