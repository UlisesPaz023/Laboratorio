import { Box } from '@mui/material';
import FaqAccordionItem from './FacAccordionItem';

const accordionData = [{
    question:'¿Cómo puedo acceder a mis resultados en línea?',
    answer:'Para acceder a sus resultados, debe ingresar al portal de pacientes con el usuario y contraseña proporcionados durante su registro. Si es su primera vez, puede crear una cuenta con su correo electrónico y número de identificación.',
  },{
    question:'¿Cuánto tiempo tardan en estar listos los resultados?',
    answer:'El tiempo de entrega varía según el tipo de estudio. Los análisis de rutina suelen estar disponibles en 24-48 horas, mientras que estudios más especializados pueden tomar de 3 a 5 días hábiles.',      
  },{
    question:'¿Necesito cita previa para entregar muestras?',
    answer:'Para la mayoría de los estudios no es necesario agendar cita previa. Sin embargo, para ciertos procedimientos especializados, recomendamos llamar con anticipación para verificar disponibilidad.',      
  },{
    question:'¿Trabajan con seguros médicos?',
    answer:'Sí, trabajamos con las principales aseguradoras médicas. Le recomendamos verificar la cobertura específica de su póliza antes de realizar los estudios.',      
  },{
    question:'¿Ofrecen servicio a domicilio para toma de muestras?',
    answer:'Sí, contamos con servicio a domicilio para toma de muestras en ciertas áreas. Este servicio tiene un costo adicional y debe programarse con al menos 24 horas de anticipación.',      
}];

const FaqAccordion = () => {
  return (
    <Box
      sx={{
        width:'50rem',
      }}
    >{
        accordionData.map((accordionDatum, index)=>(
          <FaqAccordionItem
            key={index}
            id={index}
            question={accordionDatum.question}
            answer={accordionDatum.answer}
          />
      ))};
    </Box>
  );
}

export default FaqAccordion;
