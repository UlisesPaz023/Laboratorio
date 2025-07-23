import { 
  Grid,
  Typography 
} from "@mui/material";
import palette from "../../theme/palettes";

interface HeaderContentBlockProps{
  title: string,
  description: string,
};

const HeaderContentBlock = ({title, description}: HeaderContentBlockProps) => {
  return (
      <Grid 
        sx={{
          display:'flex',
          flexDirection:'column',
          width:'100%',
          justifyContent:'center',
          alignItems:'center',
        }}
        size={12}
      >
        <Typography
          sx={{
            textAlign:'center',
            fontWeight: '700',
            fontSize: '3rem',
            letterSpacing: '-.1rem'
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            textAlign:'center',
            fontSize: '1.25rem',
            color: palette.gray.main,
            width:'40rem',
          }}
        >
          {description}
        </Typography>
      </Grid>
  );
};

export default HeaderContentBlock;