import { 
  Box,
  Container,
  Grid,
} from '@mui/material';
import ServiceCard from './ServiceCard';
import HeaderContentBlock from '../common/HeaderContentBlock';
import palette from '../../theme/palettes';

interface ServiceSectionProps {
  id ?: string;
};

const services = [
  {
    title: 'Análisis Patológicos',
    description:
      'Diagnóstico preciso de tejidos y células para detectar anomalías y prevenir enfermedades.',
  },
  {
    title: 'Citología',
    description:
      'Exámen de células individuales para detectar anomalías y prevenit enfermedades.',
  },
  {
    title: 'Biopsias',
    description:
      'Extracción y análisis de muestras de tejido para diagnóstico médico.',
  },
  {
    title: 'Resultados en línea',
    description:
      'Acceso seguro a sus resultados desde cualquier dispositivo.',
  },
];

const ServiceSection = ({id}: ServiceSectionProps) => {
  return (
    <Box id={id} sx={{ backgroundColor: palette.ultraLightGray.main, py: 10 }}>
      <Container maxWidth="xl">
        <Grid
          position = 'relative'
          container
          gap = {6}
        >
          <HeaderContentBlock
            title={'Nuestros Servicios'}
            description={
              'Contamos con un equipo de profesionales altamente calificados y comprometidos con la excelencia en el diagnóstico patológico.'
            }
          />
          <Grid
            container
            spacing={{
              xs:3,
              md:4
            }}
          >
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
              />
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ServiceSection;
