import { 
  Avatar,
  Grid,
  Typography,
} from "@mui/material";
import palette from "../../theme/palettes";

interface TeamCardProps {
  name: string,
  specialist: string,
  description:string,
};

const TeamCard = ({name, specialist, description}: TeamCardProps) => {
  return (
    <Grid
      container
      size={{
        xs: 12,
        md: 4
      }}
      sx={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
      }}
    >
      <Avatar
        alt='TeamPic'
        sx={{
          width:'15rem',
          height:'15rem',
          backgroundColor: palette.lightPurple.main,
          objectFit: 'cover',
          marginBottom: '1rem'
        }}
      ></Avatar>
      <Typography
        sx={{
          fontWeight:'900',
          fontSize:'1.3rem',
          marginBottom:'.3rem',
        }}
      >
        {name}
      </Typography>
      <Typography
        sx={{
          fontSize:'.9rem',
          color: palette.gray.main,
          marginBottom:'.3rem',
        }}
        >
        {specialist}
        </Typography>
      <Typography
        sx={{
          fontSize:'.9rem',
          color: palette.gray.main,
          marginBottom:'.3rem',
          width:'22rem',
        }}
        >
        {description}
      </Typography>
    </Grid>
  );
};

export default TeamCard;
