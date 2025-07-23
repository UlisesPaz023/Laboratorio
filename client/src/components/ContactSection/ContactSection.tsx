import { 
  Box,
  Container,
  Grid,
  Typography
} from "@mui/material";
import HeaderContentBlock from "../common/HeaderContentBlock";
import ContactSectionCard from "./ContactSectionCard";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import palette from "../../theme/palettes";

interface ContactSectionProps {
  id ?: string;
};

const contacts = [{ 
    title:'Dirección',
    description:<Typography
      sx={{
        color: palette.gray.main,
      }}
    >
      Laprida 802
    </Typography>,
    icon:<LocationOnIcon
      sx={{
        fontSize:'3rem',
        color: palette.purple.main
      }}
    />,
  }, { 
    title:'Teléfono',
    description:<Typography
      sx={{
        color: palette.gray.main,
      }}
    >
      +54 9 381-212-8260 <br /> 381-4216061
    </Typography>,
    icon:<CallIcon
      sx={{
        fontSize:'3rem',
        color: palette.purple.main
      }}
    />,
  },{ 
    title:'Email',
    description: <Typography
      sx={{
        color: palette.gray.main,        
      }}
    >
      cedhicpatologia@gmail.com
    </Typography>,
    icon:<EmailIcon
      sx={{
        fontSize:'3rem',
        color: palette.purple.main
      }}
    />,
  },{ 
    title:'Horarios',
    description:<Typography
      sx={{
        color: palette.gray.main,
      }}
    >
      Lunes a Viernes <br />
      Mañana: 9:00 AM - 13:00 PM <br />
      Tarde: 14:30 PM - 19:30 PM
    </Typography>,
    icon:<WatchLaterIcon
      sx={{
        fontSize:'3rem',
        color: palette.purple.main
      }}
    />,
  },
];

const ContactSection = ({id}:ContactSectionProps) => {
  return (
    <Box id={id} sx={{ backgroundColor: 'white', py: 10 }}>
      <Container maxWidth="xl">
        <Grid
          container
          sx={{
            position:'relative'
          }}
          gap={4}
        >
          <HeaderContentBlock
            title='Contacto'
            description='Estamos aquí para atenderte. No dudes en contactarnos para cualquier consulta.'
          />
          <Grid
            container
            size={3}
            spacing={2}
            sx={{
              marginTop:'2rem',
              display:'flex',
              width:'100%',
              justifyContent:'space-between',
            }}
          >
            {
              contacts.map((contact, index)=> (
                <ContactSectionCard
                  key={index}
                  title={contact.title}
                  description={contact.description}
                  icon={contact.icon}
                />
              ))
            }
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection;
