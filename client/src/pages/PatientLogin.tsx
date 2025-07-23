import { 
  Box,
  Button,
  Container,
  Grid,
  Input,
  Typography,
} from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import palette from "../theme/palettes";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PatientLogin = () => {
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
        minHeight: '100vh',
        backgroundColor: palette.ultraLightGray.main,
        marginTop: '4rem',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
      }}
      maxWidth="xl"
    >
      <Grid
        container
        sx={{
          display:'flex',
          //justifyContent:'center',
          //alignItems:'center',
          height:'30rem',
          gap:4,
        }}
        >
        <Grid
          container
          sx={{
            height:'100%',
            flexDirection: 'row',
            margin:0, 
            width: '27rem',
            alignItems: 'space-between',
          }}
          >
          <Grid
            sx={{
              borderRadius: '.5rem',
              backgroundColor: palette.purple.main,
              //margin:0,
              paddingY:5,
              paddingX:4,
              display:'flex',
              flexDirection: 'column',
              color: 'white',
              justifyContent: 'space-between',
            }}
          >
            <Box>
              <Typography
                sx={{
                  textAlign:'start',
                  fontWeight: '700',
                  fontSize: '1.5rem',
                }}
              >
                Portal de Pacientes
              </Typography>
              <Typography
                sx={{
                  textAlign:'start',
                  marginTop: '1rem',
                }}
              >
                Acceda a sus resultados de laboratorio de forma segura y rápida desde cualquier dispositivo.
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  marginTop: '1rem',
                  marginBottom: '.5rem',
                }}
              >
                <CheckCircleIcon
                  sx={{
                    margin:0,
                    marginRight:'1rem',
                  }}
                />
                <Typography
                  sx={{
                    textAlign:'start',
                    fontWeight: '300',
                  }}
                >
                  Consulte sus resultados en línea
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  marginBottom: '.5rem',
                }}
              >
                <CheckCircleIcon
                  sx={{
                    margin:0,
                    marginRight:'1rem',
                  }}
                />
                <Typography
                  sx={{
                    textAlign:'start',
                    fontWeight: '300',
                  }}
                >
                  Descargue e imprima sus informes
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  marginBottom: '.5rem',
                }}
              >
                <CheckCircleIcon
                  sx={{
                    margin:0,
                    marginRight:'1rem',
                  }}
                />
                <Typography
                  sx={{
                    textAlign:'start',
                    fontWeight: '300',
                  }}
                >
                  Acceso a su historial de estudios
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                margin:0,
                height: 'auto',
              }}
            >
              <Typography
                sx={{
                  textAlign:'start',
                  fontWeight: '300',
                  fontSize: '.85rem',
                }}
              >
                ¿Necesita ayuda? Contáctenos al (123) 456-7890
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid
          component='form'
          onSubmit={handleLogin}
          sx={{
            display:'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap:1,
            paddingY:5,
            paddingX:4,
            margin:0,
            backgroundColor: 'white',
            width: '27rem',
            borderRadius: '.5rem',
          }}
        >
          <Typography
            sx={{
              margin:0,
              textAlign:'start',
              fontWeight: '700',
              fontSize: '1.5rem',
            }}
          >
            Acceso a Resultados
          </Typography>
          <Typography
            sx={{
              margin:0,
              textAlign:'start',
              color: palette.gray.main,
              //marginBottom: '1rem',
            }}
          >
            Ingrese sus credenciales para ver sus resultados
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
              DNI / Documento de Identidad
            </Typography>
            <Input
              value={dni}
              onChange={(e) => setDni(e.target.value)}
              sx={{  
                marginY: '.5rem',
                width: '100%',
                padding: 0,
                border: `.05rem solid ${palette.gray.main}`,
                //borderRadius: '.4rem',
                backgroundColor: 'white',
                transition: 'box-shadow 0.2s, border 0.2s',
                boxSizing: 'border-box',
                placeholder: 'Ingrese su DNI',
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
            <Typography
              sx={{
                color: palette.gray.main,
                textAlign:'start',
                fontSize: '.75rem',
                fontWeight: '400',
              }}
            >
              Utilice su DNI como nombre de usuario
            </Typography>
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
              onChange={(e) => setPassword(e.target.value)}
              sx={{  
                marginY: '.5rem',
                width: '100%',
                padding: 0,
                border: `.05rem solid ${palette.gray.main}`,
                //borderRadius: '.4rem',
                backgroundColor: 'white',
                transition: 'box-shadow 0.2s, border 0.2s',
                boxSizing: 'border-box',
                placeholder: 'Ingrese su DNI como contraseña',
                '&:focus-within': {
                  border: `.05rem solid ${palette.purple.main}`,
                  boxShadow: `0 0 0 2px ${palette.purple.main}33`, // 33 = 20% opacity
                },
                '&:before, &:after': {
                  borderBottom: 'none !important',
                },
              }}
              type="password"
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
              borderBottom:`.05rem solid ${palette.gray.main}`,
            }}
            
          >
            <Button
              type="submit"
              sx={{
                width:'100%',
                backgroundColor: palette.purple.main,
              }}

            >
              Iniciar Sesión
            </Button>
            {
              error && <Typography color="error"> {error} </Typography>
            }
          </Box>
          <Box
            sx={{
              bottom: '2rem',
            }}
          >
            <Typography
              sx={{
                textAlign:'start',
                fontSize: '.82rem',
                //paddingY: '1rem',
                color: palette.gray.main,
              }}
            >
              Para acceder a sus resultados necesita ingresar su DNI tanto como usuario y contraseña. Si tiene problemas para acceder, por favor comuníquese con el laboratorio.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PatientLogin;