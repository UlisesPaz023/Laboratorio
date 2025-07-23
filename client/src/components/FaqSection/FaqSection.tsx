import { 
  Box,
  Container,
  Grid
} from '@mui/material';
import FaqAccordion from './FaqAccordion';
import HeaderContentBlock from '../common/HeaderContentBlock';
import palette from '../../theme/palettes';

interface FaqSectionProps {
  id?: string;
};

const FaqSection = ({id}: FaqSectionProps) => {
  return (
    <Box id={id} sx={{ backgroundColor: palette.ultraLightGray.main, py: 10 }}>
      <Container maxWidth="xl">
        <Grid
          container
          gap = {5}
        >
          <HeaderContentBlock
            title={'Preguntas Frecuentes'}
            description={'Respuestas a las dudas más comunes sobre nuestros servicios.'}
          />
          <FaqAccordion/>
        </Grid>
      </Container>
    </Box>
  );
};

export default FaqSection;
