import { 
  Box,
  Grid,
  Typography,
} from "@mui/material";
import Item from "../common/Item";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import palette from "../../theme/palettes";

interface ServiceCardProps{
  title: string,
  description: string,
};

const ServiceCard = ({ title, description}: ServiceCardProps) => {
  return (
    <Grid
      size={{ 
        xs: 12,
        md: 4
      }}
    >
      <Item
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'start',
          gap: 2,
          paddingX: 3,
          paddingY: { xs: 3, md: 3.5 },
          border: `.05rem solid ${palette.lightGray.main}`,
          boxShadow: 0,
          '&:hover': {
            boxShadow: '0 .25rem .5rem rgba(0, 0, 0, 0.1)',
          },
          borderRadius: '.6rem',
          overflow: 'hidden',
        }}
      >
        <TaskAltIcon
          sx={{
            position: 'absolute',
            top: '40%',
            left: '18%',
            transform: 'translate(-50%, -50%)',
            fontSize: '14rem',
            color: palette.gray.main,
            opacity: 0.08,
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />
        <TaskAltIcon
          sx={{
            margin:0,
            marginTop:'.2rem',
            fontSize: '1.75rem',
            color:palette.purple.main
          }}
        />
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Typography
            sx={{
              textAlign: 'start',
              fontWeight: '700',
              fontSize: '1.2rem',
              color: 'black',
              mb: '.6rem'
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              textAlign: 'start',
              fontSize: '1rem'
            }}
          >
            {description}
          </Typography>
        </Box>
      </Item>
    </Grid>
  );
};

export default ServiceCard;
