import { 
  Box,
  Grid,
  Typography,
} from "@mui/material";
import type { ReactNode } from "react";
import palette from "../../theme/palettes";

interface ContactSectionCardProps  {
  title: ReactNode,
  description: ReactNode,
  icon: ReactNode,
};

const ContactSectionCard = ({title, description, icon}: ContactSectionCardProps) => {
  return (
    <Grid
      sx={{
        backgroundColor: palette.ultraLightGray.main,
        justifyContent: 'center',
        alignItems: 'center',
        width:'22rem',
        height:'14rem',
        margin:0,
        borderRadius:'.5rem'
      }}
    >
      <Box
        sx={{
          display:'flex',
          flexDirection: 'column',
          marginTop:'1.5rem',
        }}
      >
        <Typography>
          {icon}
        </Typography>
        <Typography
          sx={{
            fontWeight:'700',
            fontSize:'1.5rem'
          }}
        >{title}
        </Typography>
        {description}
      </Box>
    </Grid>
  );
};

export default ContactSectionCard;