import { 
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import palette from "../theme/palettes";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: 'white'}}>
      <Container
        sx={{
          backgroundColor: 'white',
        }}
        maxWidth="xl"
      >
        <Grid
          sx={{
            display:'flex',
            alignItems:'space-between',
            justifyContent:'space-between',
            width:'100%',
            paddingY: '2rem',
            borderTop: `.1rem solid ${palette.lightGray.main}`
          }}
        >
          <Typography
            sx={{
              margin:0,
              fontWeight:'600',
              fontSize:'1.25rem',
            }}
          >
            CEDHIC
          </Typography>
          <Typography
            sx={{
              margin:0,
              color:palette.gray.main,
            }}
          >
            © 2025 CEDHIC Laboratorio Patológico. Todos los derechos reservados.
          </Typography>
          <Grid
            container
            sx={{
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
              margin:0
            }}
            spacing={2}
          >
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;