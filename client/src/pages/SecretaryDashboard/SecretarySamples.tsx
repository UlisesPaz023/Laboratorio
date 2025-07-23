import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  Grid,
  Modal,
  Typography,
} from "@mui/material";
import SearchInput from "../../components/SearchInput";
import GenericTable from "../../components/common/GenericTable/GenericTable";
import type { Column } from "../../components/common/GenericTable/GenericTable";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import palette from "../../theme/palettes";
import Input from "../../components/common/Input";
import axios from "axios";
import { useState, useEffect } from "react";
import HeaderDashboardBlock from "../../components/common/HeaderDashboardBlock";
import modalStyle from "../../theme/modalStyle"
import formatDateToDDMMYYYY from "../../components/common/formatDateToDDMMYYYY";

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

interface RowItem {
  id: string;
  fecha: string;
  paciente: string;
  tipo_cobertura: string;
  tipo_patologia: string;
  estado: string;
  //acciones: null;
  nro_autorizacion: string;
  informe?: Informe;
  [key: string]: unknown;
};

interface Doctor {
  id:string,
  matricula: string,
  nombre: string,
  apellido: string,
  medicos?: {
    matricula?: string;
    especialidad?: string | null;
    usuario_id?: string;
  };
};

interface Patient {
  id:string,
  nombre: string,
  apellido: string,
  documento: string,
};

interface Material {
  id:string,
  nombre:string,
}

const pathologyLabels: Record<string,string> = {
  option150105: 'BIOPSIA',
  option150106: 'CITOLOGÍA',
  option150111: 'CITOLOGÍA DE LÍQUIDOS',
};

const SecretarySamples = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedReport, setSelectedReport] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRows, setFilteredRows] = useState<RowItem[]>([]); 
  const [filterStatus, setFilterStatus] = useState<'Todas'|'Pendiente'|'Completado'>('Todas');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [authId, setAuthId] = useState('');
  const [amount, setAmount] = useState('');
  const [coverage, setCoverage] = useState(true);
  const [pathologyType, setPathologyType] = useState('option150105');
  const [reportType, setReportType] = useState('');
  const [reportDescription, setReportDescription] = useState('');
  const [active, setActive] = useState(true);
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [patients, setPatients] = useState<Patient[]>([]);
  const [materials, setMaterials] = useState<Material[]>([]);
  const [selectedPatient, setSelectedPatient] = useState<string>('');
  const [selectedDoctor, setSelectedDoctor] = useState<string>('');
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [rows, setRows] = useState<RowItem[]>([]);
  const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
  
  const sampleColumns: Column<RowItem>[] = [
    { id: 'nro_autorizacion', label: 'Nro de Autorización', minWidth:165},
    { id: 'fecha', label: 'Fecha Recepción', minWidth: 145 },
    { id: 'paciente', label: 'Paciente', minWidth: 150 },
    { id: 'tipo_cobertura', label: 'Cobertura', minWidth: 120 },
    { id: 'tipo_patologia', label: 'Tipo', minWidth: 200 },
    {
      id: 'estado',
      label: 'Estado',
      minWidth: 150,
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
    //{ id: 'acciones', label: 'Acciones', minWidth: 170 },
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

  const handleOpenModal = (row: RowItem) => {
    setSelectedReport({
      ...row.informe,
      id_muestra: row.id, // este es el ID de la muestra
    });
    setReportType(row.informe?.tipo_informe || '');
    setReportDescription(row.informe?.descripcion || '');
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedReport(null);
  };

  const handleSection = (section: boolean) => {
    setActive(section);
  };

  useEffect(() => {
    const fetchSamples = async () => {
      const resp = await axios.get("http://localhost:5000/api/sample/get-samples", {withCredentials:true});
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
        //acciones: null,
        informe: item.informe,
      }));
      setRows(mappedRows);
    };

    const fetchDoctorsAndPatients = async () => {
      const [doctorsResp, patientsResp, materialsResp] = await Promise.all([
        axios.get("http://localhost:5000/api/user/get-doctors", {withCredentials:true}),
        axios.get("http://localhost:5000/api/user/get-patients", {withCredentials:true}),
        axios.get("http://localhost:5000/api/material/get-materials", {withCredentials:true}),
      ]);
      setDoctors(doctorsResp.data.data);
      setPatients(patientsResp.data.data);
      setMaterials(materialsResp.data.data);
    };

    fetchSamples();
    fetchDoctorsAndPatients();
  }, [reportDescription]);

  useEffect(() => {
    let filtered = [...rows];

    if (filterStatus !== 'Todas') {
      filtered = filtered.filter(row => row.estado === filterStatus);
    }

    if (searchTerm.trim()) {
      const lower = searchTerm.toLowerCase();
      filtered = filtered.filter(row =>
        row.nro_autorizacion.toLowerCase().includes(lower)
      );
    }

    setFilteredRows(filtered);
  }, [searchTerm, rows, filterStatus]);

  const sendSampleForm = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!dateRegex.test(deliveryDate) ) {
      alert('La fecha debe tener el formato DD/MM/AAAA');
    return;
  }

    try {
      await axios.post('http://localhost:5000/api/sample/create-sample', {
          fecha_entrega: deliveryDate,
          nro_autorizacion: authId,
          monto: parseFloat(amount),
          tipo_cobertura: coverage,
          tipo_patologia: pathologyType,
          id_paciente: parseInt(selectedPatient),
          id_medico: parseInt(selectedDoctor),
          id_secretario: 1,
          muestra_material: {
            create: selectedMaterials.map(id_material => ({
              id_material: Number(id_material)
            }))
          }
        }, { 
          withCredentials:true,
        },
      );
      alert('Has registrado la muestra exitosamente.');
      setDeliveryDate('');
      setAuthId('');
      setAmount('');
      setCoverage(true);
      setPathologyType('');
      setSelectedPatient('');
      setSelectedDoctor('');
      setSelectedMaterials([]);
    } catch (error) {
      alert('Su registro no se pudo completar');
      console.log(error);
    };
  };

  const handleSaveReport = async () => {
    try {
      await axios.patch(`http://localhost:5000/api/report/update-report/${selectedReport.id}`, {
        tipo_informe: reportType,
        descripcion: reportDescription,
      }, { withCredentials: true });
      alert('Informe actualizado correctamente');
      setOpenModal(false);
      setSelectedReport(null);
    } catch (error) {
      alert('No se pudo actualizar el informe');
      console.log(error);
    }
  };

  return (
    <Grid
      container
      size={10}
      sx={{
        backgroundColor: palette.ultraLightGray.main,
        margin:0,
        paddingTop: '1rem',
        minHeight: '100vh',
      }}
    >
      <Container>
          {
            active===true ? (              
              <Grid
                container
                sx={{
                  flexDirection:'column',
                  justifyContent:'start',
                  alignItems:'start',
                }}
              >
                <Grid
                  sx={{
                    margin:0,
                    display:'flex',
                    justifyContent:'space-between',
                    alignItems:'center',
                    width:'100%'
                  }}
                >
                  <HeaderDashboardBlock
                      sx={{
                        margin:0,
                      }}
                      fontWeightTitle='700'
                      fontSizeTitle='2rem'
                      fontWeightDescription='400'
                      fontSizeDescription='1'
                      title='Muestras'
                      description='Gestion de muestras del laboratorio'
                  />
                  <Button
                    variant="buttonTwo"
                    sx={{
                      height:'2.5rem',
                    }}
                    onClick={()=> handleSection(false)}
                  >
                    <Grid
                      container
                      sx={{
                        width:'100%',
                        gap:2,
                        justifyContent:'space-between',
                        alignItems:'center',
                      }}
                    >
                      <AddCircleOutlineIcon
                        sx={{
                          margin:0,
                          fontSize:'1.25rem',
                        }}
                      />
                      <Typography
                        sx={{
                          margin:0,
                          fontSize:'.9rem',
                          fontWeight:'600',
                        }}
                      >
                        Nueva Muestra
                      </Typography>
                    </Grid>
                  </Button>
                </Grid>
                <Grid
                  container
                  spacing={0.5}
                  sx={{
                    marginX:0,
                    marginY:2,
                    padding:.5,
                    backgroundColor:palette.lightGray.main,
                    borderRadius:'.5rem',
                  }}
                >
                  <Button
                    sx={{ 
                      backgroundColor: filterStatus === 'Todas' ? 'white' : palette.lightGray.main,
                      color: filterStatus === 'Todas' ? 'black' : 'gray',
                      paddingX:1.5,
                    }}
                    onClick={() => setFilterStatus('Todas')}
                  >
                    Todas</Button>
                  <Button
                    sx={{ 
                      backgroundColor: filterStatus === 'Pendiente' ? 'white' : palette.lightGray.main,
                      color: filterStatus === 'Pendiente' ? 'black' : 'gray',
                      paddingX:1.5,
                    }}
                    onClick={() => setFilterStatus('Pendiente')}
                  >
                    Pendientes</Button>
                  <Button
                    sx={{ 
                      backgroundColor: filterStatus === 'Completado' ? 'white' : palette.lightGray.main,
                      color: filterStatus === 'Completado' ? 'black' : 'gray',
                      paddingX:1.5,
                    }}
                    onClick={() => setFilterStatus('Completado')}
                  >
                    Completadas</Button>
                </Grid>
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
                      title='Todas las Muestras'
                      description='Listado de todas las muestras registradas en el sistema'
                    />
                  <SearchInput 
                    placeholder='Buscar muestra por número de autorización...'
                    value={searchTerm}
                    onChange={(e)=> setSearchTerm(e.target.value)}
                  />
                  <GenericTable<RowItem> columns={sampleColumns} rows={filteredRows} />
                  <Modal open={openModal} onClose={handleCloseModal}>
                    <Box 
                      sx={
                        modalStyle
                      }
                    >
                      <Typography sx={{
                        textAlign:'left',
                        fontWeight:'700',
                        marginBottom:'1rem',
                      }}>Completar Informe</Typography>
                      <Input
                        label="Tipo de Informe"
                        value={reportType}
                        onChange={(e) => setReportType(e.target.value)}
                      />
                      <Input
                        label="Descripción"
                        value={reportDescription}
                        onChange={(e) => setReportDescription(e.target.value)}
                      />
                      <Button 
                        variant="buttonTwo"
                        onClick={handleSaveReport}
                        sx={{
                          marginTop: '1rem'
                        }}
                      >
                        Guardar
                      </Button>
                    </Box>
                  </Modal>
                </Grid>
              </Grid>
            ):(
              <Grid
                container
                sx={{
                  flexDirection:'column',
                  justifyContent:'start',
                  alignItems:'start',
                }}
              >
                <Grid
                  sx={{
                    margin:0,
                    display:'flex',
                    justifyContent:'start',
                    alignItems:'center',
                    width:'100%',
                    gap:2,
                  }}
                >
                  <Button
                    variant="buttonTwo"
                    sx={{
                      height:'2.5rem',
                    }}
                    onClick={()=> handleSection(true)}
                  >
                    <Grid
                      container
                      sx={{
                        width:'100%',
                        gap:2,
                        justifyContent:'space-between',
                        alignItems:'center',
                      }}
                    >
                      <ArrowBackIcon/>
                    </Grid>
                  </Button>
                  <HeaderDashboardBlock
                    sx={{
                      margin:0,
                      marginBottom:2,
                    }}
                    fontWeightTitle='700'
                    fontSizeTitle='2rem'
                    fontWeightDescription='400'
                    fontSizeDescription='1'
                    title='Nueva Muestra'
                    description='Registro de nueva muestra para análisis'
                  />
                </Grid>
                <Grid
                  component="form"
                  onSubmit={sendSampleForm}
                  spacing={3}
                  noValidate
                  autoComplete="off" 
                    sx={{
                    padding:0,
                    width:'100%',
                    '& .MuiTextField-root': { m: 1},
                    margin:0,
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
                      title='Todas las Muestras'
                      description='Listado de todas las muestras registradas en el sistema'
                    />
                  <Grid
                    container
                    size={12}
                    spacing={3}
                    sx={{
                      padding:3,
                    }}
                  >
                    <Grid size={6} sx={{ margin: 0 }}>
                      <Input onChange={(event)=> setDeliveryDate(event.target.value)} label="Fecha de Entrega" placeholder="DD/MM/AAAA" value={deliveryDate}/>
                    </Grid>
                    <Grid size={6} sx={{ margin: 0 }}>
                      <Input onChange={(event)=> setAuthId(event.target.value)} label="Número de Autorización" placeholder="Ingrese nro de Autorización" value={authId}/>
                    </Grid>
                    <Grid size={6} sx={{ margin: 0 }}>
                      <Input onChange={(event)=> setAmount(event.target.value)} label="Importe a Pagar" placeholder="$0.00" value={amount}/>
                    </Grid>
                    <Grid size={6} sx={{ margin: 0 }}>
                      <Input
                        type="select"
                        label="Código de Prestación"
                        value={pathologyType}
                        onChange={(e) => {
                          setPathologyType(e.target.value);
                        }}
                        options={[
                          { value: "option150105", label: "150105 - ESTUDIO BIÓPSICO SERIADO Y SEMISERIADO" },
                          { value: "option150106", label: "150106 - CITOLOGÍA EXFOLIATIVA ONCOLÓGICA" },
                          { value: "option150111", label: "150111 - CITOLOGÍA EXFOLIATIVA ONCOLÓGICA DE LÍQUIDOS (LAVADOS, TRASUDADOS, EXUDADOS, ORINAS, ETC.)" },
                        ]}
                        sx={{
                          '& .MuiSelect-select': {
                            textAlign: 'left',
                          }
                        }}
                      />
                    </Grid>
                    <Grid size={6} sx={{ margin: 0 }}>
                      <Input
                        type="select"
                        label="Seleccione el médico"
                        value={selectedDoctor}
                        onChange={(e) => setSelectedDoctor(e.target.value)}
                        options={[
                          { value: "", label: "Seleccione el médico..." },
                          ...doctors.map((doctor: Doctor) => ({
                            value: doctor.id,
                            label: `${doctor.nombre} ${doctor.apellido} - Matrícula: ${doctor.medicos?.matricula || ""}`,
                          })),
                        ]}
                        sx={{
                          '& .MuiSelect-select': {
                            textAlign: 'left',
                          }
                        }}
                      />
                    </Grid>
                    <Grid size={6} sx={{ margin: 0 }}>
                      <Input
                        type="select"
                        label="Seleccione el paciente"
                        value={selectedPatient}
                        onChange={(e) => setSelectedPatient(e.target.value)}
                        options={[
                          { value: "", label: "Seleccione el paciente..." },
                          ...patients.map((patient: Patient) => ({
                            value: patient.id,
                            label: `${patient.nombre} ${patient.apellido} - Documento: ${patient.documento || ""}`,
                          })),
                        ]}
                        sx={{
                          '& .MuiSelect-select': {
                            textAlign: 'left',
                          }
                        }}
                      />
                    </Grid>
                    <Grid size={6} sx={{ margin: 0 }}>
                      <Input
                        type="radio"
                        label="Cobertura"
                        value={coverage ? "obra_social" : "particular"}
                        onChange={(e) => setCoverage(e.target.value=='obra_social')}
                        options={[
                          { value: "obra_social", label: "Obra Social" },
                          { value: "particular", label: "Particular" },
                        ]}
                      />
                    </Grid>
                    <Divider
                      sx= {{
                        width:'100%'
                      }}
                    />
                    <Typography
                      sx={{
                        width:'100%',
                        textAlign:'start',
                        fontSize:'1rem',
                        fontWeight:'600',
                      }}
                    >
                        Materiales
                    </Typography>
                    <Grid
                      component="form"
                      onSubmit={sendSampleForm}
                      spacing={3}
                      noValidate
                      autoComplete="off" 
                        sx={{
                          padding:2,
                        width:'100%',
                        '& .MuiTextField-root': { m: 1},
                        margin:0,
                        backgroundColor: 'white',
                        border: `solid .1rem ${palette.lightGray.main}`,
                        borderRadius:'.5rem',
                      }}
                    >
                      <Grid size={12}>
                        <Grid container sx={{ width: '100%' }}>
                          <Grid 
                            size={6}
                            sx={{
                              paddingRight:2,
                            }}
                          >
                              <Typography variant="subtitle2" sx={{ textAlign:'start' ,mb: 1 }}>
                                Lista de materiales:
                              </Typography>
                              {materials.length === 0 ? (
                                <Typography variant="body2" color="text.secondary">
                                  No hay materiales disponibles.
                                </Typography>
                              ) : (
                                materials.map((material) => (
                                  <Box
                                    key={material.id}
                                    sx={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      mb: 0.5,
                                      px: 1,
                                      py: 0.5,
                                      borderRadius: '8px',
                                      background: selectedMaterials.includes(material.id) ? '#ede7f6' : 'transparent',
                                      cursor: 'pointer',
                                      transition: 'background 0.2s',
                                      '&:hover': {
                                        background: '#e3f2fd',
                                      },
                                    }}
                                    onClick={() => {
                                      if (!selectedMaterials.includes(material.id)) {
                                        setSelectedMaterials([...selectedMaterials, material.id]);
                                      }
                                    }}
                                  >
                                    <Checkbox
                                      checked={selectedMaterials.includes(material.id)}
                                      tabIndex={-1}
                                      disableRipple
                                      sx={{ p: 0.5, mr: 1 }}
                                    />
                                    <Typography variant="body2">{material.nombre}</Typography>
                                  </Box>
                                ))
                              )}
                          </Grid>
                          <Grid 
                            size={6}
                            sx={{
                                paddingLeft:2,
                                minHeight: 48 * 2,
                                margin:0,
                                borderLeft: `solid .1rem ${palette.lightGray.main}`
                              }}
                          >
                              <Typography variant="subtitle2" sx={{ textAlign:'start' ,mb: 1 }}>
                                Materiales seleccionados:
                              </Typography>
                              {selectedMaterials.length === 0 ? (
                                <Typography variant="body2" color="text.secondary">
                                  Ningún material seleccionado.
                                </Typography>
                              ) : (
                                <Grid 
                                  sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap'
                                  }}
                                >
                                  {selectedMaterials.map((id) => {
                                    const mat = materials.find((m) => m.id === id);
                                    return (
                                      <Box
                                        key={id}
                                        sx={{
                                          display: 'flex',
                                          alignItems: 'center',
                                          justifyContent: 'space-between',
                                          background: '#ede7f6',
                                          borderRadius: '16px',
                                          px: 1.5,
                                          py: 0.5,
                                          width: '100%',
                                          mb: 0.5,
                                        }}
                                      >
                                        <Typography variant="body2">{mat?.nombre}</Typography>
                                        <Button
                                          size="small"
                                          sx={{ ml: 1, minWidth: 0, color: '#7c4dff' }}
                                          onClick={() =>
                                            setSelectedMaterials(selectedMaterials.filter((mid) => mid !== id))
                                          }
                                        >
                                          ×
                                        </Button>
                                      </Box>
                                    );
                                  })}
                                </Grid>
                              )}
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Box
                      sx={{
                        margin:0,
                      }}
                    >
                      <Button
                        type="submit"
                        sx={{
                          width:'100%',
                          backgroundColor: palette.purple.main,
                          paddingX:2,
                          paddingY:1,
                        }}
                      >
                        Registrar Muestra
                      </Button>
                    </Box>
                  </Grid>
                  {/* <Grid size={6} sx={{ margin: 0 }}>
                    <Input onChange={(event)=> setEntryDate(event.target.value)} label="Fecha de Ingreso" placeholder="Ingrese la fecha de ingreso" value={entryDate}/>
                  </Grid> */}
                </Grid>
              </Grid>
            )
          }
      </Container>
    </Grid>
  );
};

export default SecretarySamples;