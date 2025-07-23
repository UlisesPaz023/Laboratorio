import { 
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import palette from "../../theme/palettes";

interface FaqAccordionItemProps {
  id:number,
  question:string,
  answer:string,
};

const FacAccordionItem = ({id, question, answer}: FaqAccordionItemProps) => {
  return (
    <Accordion
      disableGutters
      sx={{
        m:'0 !important',
        boxShadow:0,
        p:'0 !important',
        backgroundColor:'unset',
      }}
    >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon/>
          }
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            p:'0 !important',
            '&.Mui-expanded': {
              borderTop: id === 0 ? 'none' : `1px solid ${palette.lightGray.main}`,
            },
          }}
        >
          <Typography 
            component="span"
            sx={{
              fontWeight:'500',
              fontSize:'1rem',
              m:'0 !important',
            }}
          >
            {question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            p:'0 .1rem',
            m:'0 !important',
          }}
        >
          <Typography
            sx={{
              mb:2,
              textAlign:'start',
              fontSize:'.85rem',
            }}
          >
            {answer}
          </Typography>
        </AccordionDetails>
    </Accordion>
  );
};

export default FacAccordionItem;
