import { 
  Box,
  Button,
  Grid,
  Modal,
  Typography,
} from "@mui/material";
import HeaderDashboardBlock from "../../components/common/HeaderDashboardBlock";
import GenericTable from "../../components/common/GenericTable/GenericTable";
import SearchInput from "../../components/SearchInput";
import Navbar from "./Navbar";
import type { Column } from "../../components/common/GenericTable/GenericTable";
import palette from "../../theme/palettes";
import { useEffect, useState } from "react";
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import axios from "axios";
import useAuth from "../../auth/auth";
import modalStyle from "../../theme/modalStyle";
import formatDateToDDMMYYYY from "../../components/common/formatDateToDDMMYYYY";

interface RowItem {
  id: string;
  fecha: string;
  paciente: string;
  tipo_cobertura: string;
  tipo_patologia: string;
  estado: string;
  nro_autorizacion: string;
  informe?: Informe;
  [key: string]: unknown;
};

interface SampleItem {
  id: string;
  fecha_entrega: string;
  id_paciente: string;
  tipo_cobertura: boolean;
  tipo_patologia: string;
  pacientes: {
    usuarios: {
        nombre: string;
        apellido: string;
      },
  };
  estado?: string;
  nro_autorizacion: string;
  informe?: Informe;
};

interface Informe {
  tipo_informe?: string;
  descripcion?: string;
  [key: string]: unknown;
}

const pathologyLabels: Record<string,string> = {
  option150105: 'BIOPSIA',
  option150106: 'CITOLOGÍA',
  option150111: 'CITOLOGÍA DE LÍQUIDOS',
};

const PatientDashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  const [reportType, setReportType] = useState('');
  const [reportDescription, setReportDescription] = useState('');
  const [selectedReport, setSelectedReport] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRows, setFilteredRows] = useState<RowItem[]>([]);
  const [rows, setRows] = useState<RowItem[]>([]);
  const {
    authName,
    authUserId,
    loading,
  } = useAuth();

  const sampleColumns: Column<RowItem>[] = [
      { id: 'nro_autorizacion', label: 'Nro de Autorización', minWidth:165},
      { id: 'fecha', label: 'Fecha Recepción', minWidth: 145 },
      { id: 'paciente', label: 'Paciente', minWidth: 150 },
      { id: 'tipo_cobertura', label: 'Cobertura', minWidth: 120 },
      { id: 'tipo_patologia', label: 'Tipo', minWidth: 100 },
      {
        id: 'estado',
        label: 'Estado',
        minWidth: 120,
        renderCell: (row) => (
          <Typography
            sx={{
              width:'fit-content',
              padding: '0.3rem 0.8rem',
              borderRadius: '20px',
              color: 
                row.estado === 'Completado' ? '#4BB543' :
                row.estado === 'Pendiente' ? '#C76E00' :
                '#9E9E9E',
              fontSize:'.85rem',
              fontWeight: '400',
              backgroundColor:
                row.estado === 'Completado' ? '#D1FFBD' :
                row.estado === 'Pendiente' ? '#FFD580' :
                '#9E9E9E',
            }}
          >
            {row.estado}
          </Typography>
        ),
      },
      {
        id:'informe', label:'Acciones', minWidth: 170,
        renderCell: (row) => (
          <Button
            sx={{
              display:'flex',
              gap:1,
            }}
            variant="buttonOne"
            onClick={()=> handleOpenModal(row)}
          >
            <DescriptionOutlinedIcon/>
            Informe
          </Button>
        ),
      },
    ];

    useEffect(() => {
    const fetchSamples = async () => {
      if(loading) return;
      try {
        const resp = await axios.get(`http://localhost:5000/api/sample/get-samples-by-patient/${authUserId}`, {withCredentials:true});
        const mappedRows = resp.data.data.map((item: SampleItem): RowItem => ({
          id: String(item.id),
          fecha: formatDateToDDMMYYYY(item.fecha_entrega),
          paciente: item.pacientes && item.pacientes.usuarios
            ? `${item.pacientes.usuarios.nombre} ${item.pacientes.usuarios.apellido}`
            : "Sin datos",
          tipo_cobertura: item.tipo_cobertura ? "Obra Social" : "Particular",
          tipo_patologia: pathologyLabels[item.tipo_patologia] || item.tipo_patologia,
          estado: !item.informe || !item.informe.descripcion
          ? "Pendiente"
          : "Completado",
          nro_autorizacion: item.nro_autorizacion,
          informe: item.informe,
        }));
        setRows(mappedRows);
      } catch (error) {
        console.error("Error al traer las muestras:", error);
      };
    };
    fetchSamples();
  }, [loading]);
  
  const handleOpenModal = (row: RowItem) => {
    setSelectedReport({
      ...row.informe,
      id_muestra: row.id,
    });
    setReportType(row.informe?.tipo_informe || '');
    setReportDescription(row.informe?.descripcion || '');
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedReport(null);
  };

  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredRows(rows);
    } else {
      const lower = searchTerm.toLowerCase();
      setFilteredRows(
        rows.filter(
          (row) =>
            row.nro_autorizacion.toLowerCase().includes(lower)
        )
      );
    }
  }, [searchTerm, rows]);

  return (
    <Grid
      sx={{width:'100%', backgroundColor:palette.ultraLightGray.main}}
    >
      <Navbar/>
      <Grid
        sx={{
          minHeight: '100vh',
          paddingTop:'5rem',
          paddingX:'1.5rem',
        }}
        maxWidth="xl"
      >
        <HeaderDashboardBlock
          sx={{
            margin:0,
            marginBottom:'1rem',
          }}
          fontWeightTitle='700'
          fontSizeTitle='2rem'
          fontWeightDescription='400'
          fontSizeDescription='1'
          title='Mis Resultados'
          description='Consulte todos sus resultados de laboratorio'
        />
        <Grid
          sx={{
            margin:0,
            width:'100%',
            backgroundColor: 'white',
            border: `solid .1rem ${palette.lightGray.main}`,
            borderRadius:'.5rem',
          }}
        >
            <HeaderDashboardBlock
              sx={{
                paddingY:2,
                paddingX:3,
              }}
              fontWeightTitle='600'
              fontSizeTitle='1.5rem'
              fontWeightDescription='400'
              fontSizeDescription='0.9rem'
              title='Buscar Resultados'
              description='Filtre sus resultados por fecha o tipo de estudio'
            />
            <SearchInput 
              placeholder='Buscar por tipo de estudio o ID...'
              value={searchTerm}
              onChange={(e)=> setSearchTerm(e.target.value)}
            />
            <GenericTable<RowItem> columns={sampleColumns} rows={filteredRows} />
            <Modal open={openModal} onClose={handleCloseModal}>
              <Box sx={modalStyle}>
                <Typography sx={{
                  textAlign:'left',
                  fontWeight:'700',
                }}>{`Informe de ${authName}`}</Typography>
                {
                  reportDescription===''?(
                    <Typography
                      sx={{
                        marginY:'1rem',
                        textAlign:'left',
                      }}
                    >
                      Diagnóstico en proceso. Vuelve a intentarlo más tarde.
                    </Typography>
                  ) : (
                    <Grid
                      sx={{
                        marginY:'1rem',
                      }}
                    >
                      <Typography 
                        sx={{
                          textAlign:'left',
                        }}
                      >
                        {`Tipo de informe: ${reportType}`}
                      </Typography>
                      <Typography 
                        sx={{
                          textAlign:'left',
                        }}
                      >
                        {`Diagnóstico: ${reportDescription}`}
                      </Typography>
                    </Grid>
                  )
                }
                <Button variant="buttonTwo" onClick={handleCloseModal}>Salir</Button>
              </Box>
            </Modal>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PatientDashboard;