import { 
  Box,
  Button,
  Container,
  Grid,
  Input,
  Typography,
} from "@mui/material";
import palette from "../theme/palettes";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SecretaryLogin = () => {
  const [dni, setDni] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const resp = await axios.post('http://localhost:5000/api/auth/login', {
          correo: dni,
          contrasenia: password,
        },{ 
          withCredentials: true
        },
      );
      const user = resp.data.user;
      alert('Su login ha sido exitoso');
      if(user.tipo_usuario === 'paciente'){
        navigate('/paciente/dashboard');
      } else {
        navigate('/secretario/dashboard');
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Error desconocido');
    }
  }

  return (
    <Container
      sx={{
        height: '84vh',
        backgroundColor: palette.ultraLightGray.main,
        marginTop: '4rem',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
      }}
      maxWidth="xl"
    >
      <Grid
        component="form"
        onSubmit={handleLogin}
        container
        sx={{
          display:'flex',
          height:'20rem',
          gap:4,
        }}
      >
        <Grid
          sx={{
            display:'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap:1,
            paddingY:5,
            paddingX:4,
            margin:0,
            width: '30rem',
            borderRadius: '.5rem',
          }}
        >
          <Typography
            sx={{
              margin:0,
              textAlign:'center',
              fontWeight: '700',
              fontSize: '2rem',
            }}
          >
            Acceso Empleados
          </Typography>
          <Typography
            sx={{
              margin:0,
              textAlign:'center',
              color: palette.gray.main,
              //marginBottom: '1rem',
            }}
          >
            Ingrese sus credenciales para acceder al sistema
          </Typography>
          <Box
            sx={{
              margin:0,
            }}
          >
            <Typography
              sx={{
                textAlign:'start',
                fontSize: '.85rem',
                fontWeight: '500',
              }}
            >
              Usuario
            </Typography>
            <Input 
              value={dni}
              onChange={(event)=> setDni(event.target.value)}
              sx={{  
                marginY: '.5rem',
                width: '100%',
                padding: 0,
                border: `.05rem solid ${palette.gray.main}`,
                //borderRadius: '.4rem',
                backgroundColor: 'white',
                transition: 'box-shadow 0.2s, border 0.2s',
                boxSizing: 'border-box',
                '&:focus-within': {
                  border: `.05rem solid ${palette.purple.main}`,
                  boxShadow: `0 0 0 2px ${palette.purple.main}33`, // 33 = 20% opacity
                },
                '&:before, &:after': {
                  borderBottom: 'none !important',
                },
              }}
              type="text"
              placeholder="Ingrese su DNI"
              inputProps={{
                style: {
                  padding: 10,
                  textAlign: 'left',
                  fontSize: '.8rem',
                  backgroundColor: 'white',
                }
              }}
            />
          </Box>
          <Box
            sx={{
              margin:0,
            }}
          >
            <Typography
              sx={{
                textAlign:'start',
                fontSize: '.85rem',
                fontWeight: '500',
              }}
            >
              Contraseña:
            </Typography>
            <Input 
              value={password}
              onChange={(event)=> setPassword(event.target.value)}
              sx={{  
                marginY: '.5rem',
                width: '100%',
                padding: 0,
                border: `.05rem solid ${palette.gray.main}`,
                //borderRadius: '.4rem',
                backgroundColor: 'white',
                transition: 'box-shadow 0.2s, border 0.2s',
                boxSizing: 'border-box',
                '&:focus-within': {
                  border: `.05rem solid ${palette.purple.main}`,
                  boxShadow: `0 0 0 2px ${palette.purple.main}33`, // 33 = 20% opacity
                },
                '&:before, &:after': {
                  borderBottom: 'none !important',
                },
              }}
              type="text"
              placeholder="Ingrese su DNI"
              inputProps={{
                style: {
                  padding: 10,
                  textAlign: 'left',
                  fontSize: '.8rem',
                  backgroundColor: 'white',
                }
              }}
            />
          </Box>
          <Box
            sx={{
              margin:0,
              paddingBottom: '1rem',
            }}
            
          >
            <Button
            type="submit"
              sx={{
                width:'100%',
                backgroundColor: palette.purple.main,
              }}
            >Iniciar Sesión</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SecretaryLogin;