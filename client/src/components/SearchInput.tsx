import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { 
  Grid,
  //Button
} from '@mui/material';
import palette from '../theme/palettes';

interface CustomInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e:React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchInput = ({placeholder, value, onChange}: CustomInputProps) => {
  return (
    <Grid
      container
      spacing={1}
      sx={{
        marginX:2,
      }}
    >
      <Grid
        size={12}
      >
        <Paper
          component="form"
          sx={{
            display: 'flex',
            alignItems: 'center',
            height:'2.5rem',
            boxShadow: 'none',
            border: `solid .1rem ${palette.lightGray.main}`
          }}
        >
          <IconButton type="button" aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{
              fontSize:'.95rem',
              textAlign:'left',
              flex: 1,
            }}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            inputProps={{
              'aria-label': 'search google maps',
              style: { textAlign: 'left' }
            }}
          />
        </Paper>
      </Grid>
      {/* <Grid
        sx={{margin:0}}
        size={1}
      >
        <Button
          variant="buttonTwo"
          sx={{
            height: '2.5rem',
            width:'100%',
          }}
        >
          Buscar
        </Button>
      </Grid> */}
    </Grid>
  );
};

export default SearchInput;
