import {
  Box,
  Button,
  Divider,
  Grid,
  Typography,
} from "@mui/material"
import BiotechIcon from '@mui/icons-material/Biotech';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LogoutIcon from '@mui/icons-material/Logout';
import palette from "../../theme/palettes";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

type SecretaryPanelProps = {
  onSectionChange: (section: 'muestras' | 'pacientes' | 'caja') => void;
};

const SecretaryPanel = ({onSectionChange}: SecretaryPanelProps) => {
  const [active, setActive] = useState<'muestras'|'pacientes'|'caja'>('muestras');
  const navigate = useNavigate();

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

  const handleSection = (section : 'muestras' | 'pacientes' | 'caja') => {
    setActive(section);
    onSectionChange(section);
  };

  return (
    <Grid
      size={2}
      sx={{
        backgroundColor: 'white',
        minHeight: '100vh',
        borderRight:`solid .1rem ${palette.lightGray.main}`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        padding: 0,
        margin:0,
      }}
    >
      <Box sx={{ width: '100%', padding: 3 }}>
        <Typography
          sx={{
            fontSize:'1.5rem',
            fontWeight:'700',
            textAlign:'start',
          }}
        >
          CEDHIC
        </Typography>
      </Box>
      <Divider sx={{ width:'100%' }}/>
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          width:'100%',
          gap: 1,
          padding: 2,
        }}
        >
        <Box
          sx={{
            display: 'flex',
            gap: 1,
            cursor: 'pointer',
            backgroundColor: active === 'muestras' ? palette.lightPurple.main : 'none',
            width:'100%',
            padding:1,
            borderRadius:'.5rem',
            transition: 'background 0.2s',
            ...(active !== 'muestras' && {
              '&:hover': {
                backgroundColor: palette.ultraLightGray.main,
                '& .MuiSvgIcon-root': {
                  color: palette.purple.main,
                },
                '& .MuiTypography-root': {
                  color: palette.purple.main,
                },
              },
            }),
          }}
          onClick={() => handleSection('muestras')}
        >
          <BiotechIcon 
            sx={{
              margin:0,
              color: active === 'muestras' ? palette.darkPurple.main : palette.gray.main,
            }}
          />
          <Typography
            sx={{
              fontSize:'.95rem',
              color: active === 'muestras' ? palette.darkPurple.main : palette.gray.main,
              fontWeight: active === 'muestras' ? '600' : '400',
            }}
          >
            Muestras
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: 1,
            cursor: 'pointer',
            backgroundColor: active === 'pacientes' ? palette.lightPurple.main : 'none',
            width:'100%',
            padding:1,
            borderRadius:'.5rem',
            transition: 'background 0.2s',
            ...(active !== 'pacientes' && {
              '&:hover': {
                backgroundColor: palette.ultraLightGray.main,
                '& .MuiSvgIcon-root': {
                  color: palette.purple.main,
                },
                '& .MuiTypography-root': {
                  color: palette.purple.main,
                },
              },
            }),
          }}
          onClick={() => handleSection('pacientes')}
        >
          <PeopleOutlineIcon 
            sx={{
              margin:0,
              color: active === 'pacientes' ? palette.darkPurple.main : palette.gray.main,
            }}
          />
          <Typography
            sx={{
              fontSize:'.95rem',
              color: active === 'pacientes' ? palette.darkPurple.main : palette.gray.main,
              fontWeight: active === 'pacientes' ? '600' : '400'
            }}
          >
            Pacientes
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: 1,
            cursor: 'pointer',
            backgroundColor: active === 'caja' ? palette.lightPurple.main : 'none',
            width:'100%',
            padding:1,
            borderRadius:'.5rem',
            transition: 'background 0.2s',
            ...(active !== 'caja' && {
              '&:hover': {
                backgroundColor: palette.ultraLightGray.main,
                '& .MuiSvgIcon-root': {
                  color: palette.purple.main,
                },
                '& .MuiTypography-root': {
                  color: palette.purple.main,
                },
              },
            }),
          }}
          onClick={() => handleSection('caja')}
        >
          <AttachMoneyIcon 
            sx={{
              margin:0,
              color: active === 'caja' ? palette.darkPurple.main : palette.gray.main,
            }}
          />
          <Typography
            sx={{
              fontSize:'.95rem',
              color: active === 'caja' ? palette.darkPurple.main : palette.gray.main,
              fontWeight: active === 'caja' ? '600' : '400'
            }}
          >
            Caja Contable
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ width:'100%' }}/>

      {/* Botón cerrar sesión abajo */}
      <Box sx={{
        width: '100%',
        padding: 3,
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Button
        onClick={handleLogout}
          sx={{
            display:'flex',
            justifyContent:'space-evenly',
            minWidth:'12rem',
          }}
          variant='buttonOne'
        >
          <LogoutIcon sx={{ margin:0 }} />
          <Typography 
            sx={{ 
              fontSize:'.9rem',
              fontWeight: '600',
            }}
          >
            Cerrar Sesión
          </Typography>
        </Button>
      </Box>
    </Grid>
  )
}

export default SecretaryPanel