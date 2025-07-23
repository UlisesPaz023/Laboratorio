import { Grid } from "@mui/material";
import HeaderContentBlock from "../common/HeaderContentBlock";
import TeamCard from "./TeamCard";
import { 
  Box,
  Container
} from "@mui/material";

interface TeamSectionProps {
  id ?: string;
};

const services = [
  {
    name: 'Dr. Nombre Apellido',
    specialist: 'Especialista en Patología',
    description: 'Profesional con más de 10 años de experiencia en diagnóstico patológico.',
  },
  {
    name: 'Dr. Nombre Apellido',
    specialist: 'Especialista en Patología',
    description: 'Profesional con más de 10 años de experiencia en diagnóstico patológico.',
  },
  {
    name: 'Dr. Nombre Apellido',
    specialist: 'Especialista en Patología',
    description: 'Profesional con más de 10 años de experiencia en diagnóstico patológico.',
  },
];

const TeamSection = ({id}: TeamSectionProps) => {
  return (
    <Box id={id} sx={{ backgroundColor: 'white', py: 10 }}>
      <Container maxWidth="xl">
        <Grid
          position = 'relative'
          container
          gap = {6}
        >
          <HeaderContentBlock
            title='Nuestro Equipo'
            description={
              'Ofrecemos una amplia gama de servicios de diagnóstico patológico con lamás alta calidad y precisión.'
            }
          />
          <Grid
            container
            sx={{
              m:0,
              justifyContent:'center',
              width:'100%'
            }}
            spacing={{
              xs:3,
              md:4
            }}
          >
            {services.map((service,index) => (
                <TeamCard
                  key={index}
                  name={service.name}
                  specialist={service.specialist}
                  description={service.description}
                />
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TeamSection;
