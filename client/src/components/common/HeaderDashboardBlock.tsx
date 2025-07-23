import { 
  Box,
  Typography,
} from "@mui/material"
import palette from "../../theme/palettes"

interface HeaderDashboardBlockProps {
  sx ?: object,
  fontWeightTitle ?: string,
  fontSizeTitle ?: string,
  fontWeightDescription ?: string,
  fontSizeDescription ?: string,
  title: string,
  description: string,
};

const HeaderDashboardBlock = ({
  sx,
  fontWeightTitle,
  fontSizeTitle,
  fontWeightDescription,
  fontSizeDescription,
  title,
  description
}: HeaderDashboardBlockProps) => {
  return (
    <Box
      sx={sx}
    >
      <Typography
        sx={{
          textAlign:'start',
          fontSize:fontSizeTitle,
          fontWeight:fontWeightTitle,
          letterSpacing:'-.05rem',
        }}
      >{title}</Typography>
      <Typography
        sx={{
          textAlign:'start',
          fontSize:fontSizeDescription,
          fontWeight:fontWeightDescription,
          color: palette.gray.main,
        }}
      >{description}</Typography>
    </Box>
  )
}

export default HeaderDashboardBlock