import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import palettes from '../theme/palettes';
import fondo from '../assets/images/FondoPrincipal.webp';
import { useNavigate } from 'react-router-dom';

const scrollToContact = () => {
  const element = document.getElementById('contacto');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

interface MainSectionProps {
  id?: string;
};

const MainSection = ({id}: MainSectionProps) => {
  const navigate = useNavigate();
  return (
    <Box id={id}  sx={{
      minHeight: '100vh',
      backgroundColor: 'white',
      // backgroundImage: `url("data:image/svg+xml;utf8,<svg width='60' height='60' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'><rect x='12' y='4' width='8' height='24' rx='2' fill='%23f9fafb'/><rect x='4' y='12' width='24' height='8' rx='2' fill='%23f9fafb'/></svg>")`,
      // backgroundRepeat: 'repeat',
      }}
    >
      <Container 
        // sx={{
        //   backgroundColor: 'white',
        // }}
        maxWidth="xl"
        
      >
        <Grid 
          position="relative"
          container
          spacing={2}
          sx={{
            height: '60rem',
            alignItems:'center',
            textAlign: 'start',
          }}
        >
          <Grid
            sx={{ 
              zIndex: '1',
              position: 'relative',
              display:'flex',
              flexDirection:'column',
              alignItems: 'flex-start',
              gap: 1
            }} 
            size={ {xs: 12, md: 6}}
          >
            <Grid 
              sx={{
                mx: '1rem',
                height: '100%',
                minWidth: '2rem',
                backgroundColor: palettes.lightPurple.main,
                py: '.25rem',
                borderRadius: '.5rem',
                px:0,
                margin:0
              }}
            >
              <Typography
                sx={{
                  height: '100%',
                  textAlign: 'start',
                  color: palettes.secondary.main,
                  wordSpacing: '2px',
                  px: 2,
                  fontSize: '.9rem',
                }}
              >
                Laboratorio Patológico
              </Typography>
            </Grid>
            <Grid 
              sx={{
                height: '100%',
                width: '100%',
              }}
              >
                <Typography
                sx={{ 
                  textAlign:'start',
                  fontSize:'3rem',
                  fontWeight: '700',
                  letterSpacing: '-.15rem',
                  wordSpacing: '.25rem',
                }}
                >
                  Bienvenidos a CEDHIC
                </Typography>
            </Grid>
            <Grid 
              sx={{
                height: '100%',
                width: '100%',
              }}
            >
              <Typography
                sx={{ 
                  textAlign:'start',
                  fontSize:'1.2rem',
                  color: palettes.gray.main,
                }}
              >
                  Somos un laboratorio patológico comprometido con la excelencia en el diagnóstico médico. Utilizamos tecnología de vanguardia y contamos con profesionales altamente calificados para brindarle resultados precisos y confiables.
              </Typography>
            </Grid>
            <Grid 
              sx={{
                textAlign:'start',
                flexGrow: 0,
                width: '100%',
                display: { 
                  xs: 'none',
                  md: 'flex' 
                }
              }}
            >
              <Stack 
                spacing={2}
                direction="row"
                sx={{ 
                  width: '100%',
                  py: 2
                }}
              >
                <Button 
                  sx={{
                    px:'1.15rem',
                    py:'.5rem'
                  }}
                  onClick={()=> navigate('/paciente/login')}
                  variant="buttonTwo">
                    Ver mis resultados
                </Button>
                <Button 
                  sx={{
                    px:'1.15rem',
                    py:'.5rem'
                  }}
                  onClick={scrollToContact}
                  variant="buttonOne"
                >
                  Contáctanos
                </Button>
              </Stack>
            </Grid>
          </Grid>
          <Grid
            position={{
              xs:'absolute',
              md:'static'
            }}
            size={6}
            sx={{
              width: { 
                xs:'100%',
                md: '46rem'
              },
              display: 'flex',
            }}
          >
            <Box
              sx={{
                margin: '0',
                width:'100%',
                height:'40rem',
                backgroundColor: palettes.lightPurple.main,
                borderRadius: '1rem',
                objectFit: 'cover',
              }}
              >
              <img
                src={fondo}
                alt="Fondo principal"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '1rem',
                  display: 'block',
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MainSection;
