import { 
  Box,
  Button,
  Container,
  Grid,
  //Typography,
} from "@mui/material";
import palette from "../../theme/palettes";
//import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Input from "../../components/common/Input";
import { useState, useEffect } from "react";
import axios from "axios";
import HeaderDashboardBlock from "../../components/common/HeaderDashboardBlock";
import GenericTable from "../../components/common/GenericTable/GenericTable";
import SearchInput from "../../components/SearchInput";
import type { Column } from "../../components/common/GenericTable/GenericTable";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import formatDateToDDMMYYYY from "../../components/common/formatDateToDDMMYYYY";

const patientColumns: Column<RowItem>[] = [
  { id: 'id', label: 'ID', minWidth: 50 },
  { id: 'nombre', label: 'Nombre', minWidth: 100 },
  { id: 'apellido', label: 'Apellido', minWidth: 100 },
  { id: 'documento', label: 'DNI', minWidth: 100 },
  { id: 'correo', label: 'Correo', minWidth: 170 },
  { id: 'fecha_nacimiento', label: 'Fecha de Nacimiento', minWidth: 170 },
  //{ id: 'sexo', label: 'Sexo', minWidth: 100 },
  { id: 'telefono', label: 'Teléfono', minWidth: 170 },
  //{ id: 'contrasenia', label: 'Contraseña', minWidth: 170 },
  { id: 'acciones', label: 'Acciones', minWidth: 170 },
];

interface PatientItem {
  id: string;
  nombre: string;
  apellido: string;
  documento: string;
  correo: string;
  pacientes ?: {
    fecha_nacimiento: string;
    telefono: string;
  }
  //contrasenia: string;
};

interface RowItem {
  id: string;
  nombre: string;
  apellido: string;
  documento: string;
  correo: string;
  //contrasenia: string;
  fecha_nacimiento: string;
  telefono: string;
  [key: string]: unknown;
};

const SecretaryPatients = () => {
  const [ isEditing, setIsEditing] = useState(false);
  const [ editingPatient, setEditingPatient] = useState<RowItem | null>(null);
  const [ searchTerm, setSearchTerm] = useState('');
  const [ filteredRows, setFilteredRows] = useState<RowItem[]>([]); 

  const [ active, setActive] = useState<'nuevo'|'buscar'>('nuevo');
  const [rows, setRows] = useState<RowItem[]>([]);
  const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
  const [ name, setName] = useState('');  
  const [ lastName, setLastName] = useState('');
  const [ dni, setDni] = useState('');
  const [ email, setEmail] = useState('');
  const [ birthDate, setBirthDate] = useState('');
  //const [ gender, setGender] = useState('');
  const [ tel, setTel] = useState('');
  const [ password, setPassword] = useState('');
  const [ confirmPassword, setConfirmPassword] = useState('');

  const handleEdit = (row: RowItem) => {
    setIsEditing(true);
    setEditingPatient(row);
    setActive('nuevo');
    setName(row.nombre);
    setLastName(row.apellido);
    setDni(row.documento);
    setEmail(row.correo);
    setBirthDate(formatDateToDDMMYYYY(row.fecha_nacimiento));
    setTel(row.telefono);
  };

  const fetchPatients = async () => {
    const resp = await axios.get("http://localhost:5000/api/user/get-patients", {withCredentials:true});
    console.log(resp.data)
    const mappedRows = resp.data.data.map((item: PatientItem): RowItem => ({
      id: String(item.id),
      nombre: item.nombre,
      apellido: item.apellido,
      documento: item.documento,
      correo: item.correo,
      fecha_nacimiento: formatDateToDDMMYYYY(item.pacientes?.fecha_nacimiento ?? ''),
      telefono: item.pacientes?.telefono??'',
      //contrasenia: item.contrasenia,
    }));
    setRows(mappedRows);
  };

  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredRows(rows);
    } else {
      const lower = searchTerm.toLowerCase();
      setFilteredRows(
        rows.filter(
          (row) =>
            row.documento.toLowerCase().includes(lower) ||
            row.apellido.toLowerCase().includes(lower)
        )
      );
    }
  }, [searchTerm, rows]);

  useEffect(() => {
    fetchPatients();
  }, []);

  const handleDelete = async (id: string) => {
    if(window.confirm("Seguro que deseas eliminar este paciente?")) {
      await axios.delete(`http://localhost:5000/api/user/delete-user/${id}`, {withCredentials:true});
      fetchPatients();
    }
  };
  
  const rowsWithActions = (rowsToMap: RowItem[]) => rowsToMap.map(row => ({
    ...row,
    acciones: (
      <Box
        sx={{
          display:'flex',
        }}
      >
        <Button
          sx={{
            backgroundColor:'#FFD580',
            width:'fit-content',
            borderRadius:0,
            borderTopLeftRadius:'.5rem',
            borderBottomLeftRadius:'.5rem',
          }}
          size="small"
          onClick={() => handleEdit(row)}
        >
          <DriveFileRenameOutlineIcon sx={{color:'#E86100'}} fontSize="small" />
        </Button>
        <Button
          sx={{
            backgroundColor:'#FF7F7F',
            borderRadius:0,
            borderTopRightRadius:'.5rem',
            borderBottomRightRadius:'.5rem',
          }}
          size="small"
          color="error"
          onClick={() => handleDelete(row.id)}
        >
          <DeleteOutlineIcon fontSize="small" />
        </Button>
      </Box>
    )
  }));

  const handleSection = ( section:'nuevo' | 'buscar' ) => {
    setActive(section);
  }

  const sendForm = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!dateRegex.test(birthDate)) {
      alert('La fecha debe tener el formato DD/MM/AAAA');
      return;
    }
    if(password !== confirmPassword && !isEditing) {
      alert('Las contraseñas no coinciden.');
      return;
    };
    try {
      if (isEditing && editingPatient) {
        await axios.patch(`http://localhost:5000/api/user/update-patient/${editingPatient.id}`, {
          nombre:name,
          apellido:lastName,
          documento:dni,
          correo:email,
          fecha_nacimiento: birthDate,
          telefono: tel,
          //contrasenia:password,
          }, { withCredentials:true });
          alert('Paciente editado exitosamente.');
      } else {
        await axios.post('http://localhost:5000/api/user/create-patient', {
          nombre:name,
          apellido: lastName,
          correo: email,
          documento:dni,
          fecha_nacimiento: birthDate,
          telefono:tel,
          contrasenia: password,
        }, { withCredentials:true });
          alert('Has registrado el paciente exitosamente.');
      };
      resetForm();
      fetchPatients();
      setActive('buscar');
    } catch (error) {
      alert('Su registro no se pudo completar');
      console.log(error);
    };
  };

  const resetForm = () => {
    setName('');
    setLastName('');
    setDni('');
    setBirthDate('');
    setEmail('');
    setTel('');
    setPassword('');
    setConfirmPassword('');
    setIsEditing(false);
    setEditingPatient(null);
  };

  return (
    <Grid
      size={10}
      sx={{
        minHeight: '100vh',
        margin:0,
        paddingTop: '1rem',
        backgroundColor: palette.ultraLightGray.main,
      }}
    >
      <Container>
        <Grid container>
          <Grid
            sx={{
              margin:0,
              display:'flex',
              justifyContent:'space-between',
              alignItems:'center',
              width:'100%',
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
                title='Pacientes'
                description='Registros y atención de pacientes'
            />
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
                backgroundColor: active === 'nuevo' ? 'white' : palette.lightGray.main,
                color: active === 'nuevo' ? 'black' : palette.gray.main,
                border:0,
                paddingX:1.5,
              }}
              onClick={()=> handleSection('nuevo')}
            >
              Nuevo Paciente</Button>
            <Button
              sx={{
                backgroundColor: active === 'buscar' ? 'white' : palette.lightGray.main,
                color: active === 'buscar' ? 'black' : palette.gray.main,
                border:0,
                paddingX:1.5,
              }}
              onClick={()=> handleSection('buscar')}
            >
              Buscar Pacientes</Button>
          </Grid>
          {
            active === 'nuevo' ? 
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
                title='Registro del Nuevo Paciente'
                description='Ingrese los datos del nuevo paciente para registrarlo en el sistema'
              />
              <Grid
                container
                component="form"
                onSubmit={sendForm}
                spacing={3}
                sx={{
                  padding:3,
                  width:'100%',
                  '& .MuiTextField-root': { m: 1}
                }}
                noValidate
                autoComplete="off" 
              >
                <Grid size={6} sx={{ margin: 0 }}>
                  <Input onChange={(event)=> setName(event.target.value)} label="Nombre" placeholder="Ingrese el nombre" value={name}/>
                </Grid>
                <Grid size={6} sx={{ margin: 0 }}>
                  <Input onChange={(event)=> setLastName(event.target.value)} label="Apellido" placeholder="Ingrese el apellido" value={lastName}/>
                </Grid>
                <Grid size={6} sx={{ margin: 0 }}>
                  <Input onChange={(event)=> setDni(event.target.value)} label="DNI / Documento de Identidad" placeholder="Ingrese su DNI" value={dni}/>
                </Grid>
                <Grid size={6} sx={{ margin: 0 }}>
                  <Input onChange={(event)=> setBirthDate(event.target.value)} label="Fecha de Nacimiento" placeholder="Ingrese la fecha de nacimiento (DD/MM/AAAA)" value={birthDate}/>
                </Grid>
                <Grid size={6} sx={{ margin: 0 }}>
                  <Input onChange={(event)=> setEmail(event.target.value)} label="Correo Electrónico" placeholder="Ingrese el correo electrónico" value={email}/>
                </Grid>
                {/* <Grid size={6} sx={{ margin: 0 }}>
                  <Input onChange={(event)=> setGender(event.target.value)} label="Género" placeholder="Ingrese el género" value={gender}/>
                </Grid> */}
                <Grid size={6} sx={{ margin: 0 }}>
                  <Input onChange={(event)=> setTel(event.target.value)} label="Teléfono" placeholder="Ingrese el teléfono" value={tel}/>
                </Grid>
                <Grid size={6} sx={{ display: isEditing ? 'none': '', margin: 0 }}>
                  <Input onChange={(event)=> setPassword(event.target.value)} label="Contraseña" placeholder="Ingrese la contraseña" value={password}/>
                </Grid>
                <Grid size={6} sx={{ display: isEditing ? 'none': '', margin: 0 }}>
                  <Input onChange={(event)=> setConfirmPassword(event.target.value)} label="Confirmar contraseña" placeholder="Ingrese la contraseña para confirmar" value={confirmPassword}/>
                </Grid>
                <Box
                  sx={{
                    display:'flex',
                    gap:1,
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
                    {isEditing ? "Editar Paciente" : "Registrar Paciente"}
                  </Button>
                  <Button
                    variant='buttonOne'
                    type="submit"
                    sx={{
                      display: isEditing===true?'':'none',
                      width:'100%',
                      paddingX:2,
                      paddingY:1,
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                      overflow: 'hidden',
                    }}
                    onClick={()=>{
                      if (window.confirm("¿Seguro que deseas cancelar la edición?")) {
                        resetForm();
                        setActive('buscar');
                      }
                    }}
                  >
                    Cancelar Edicion
                  </Button>
                </Box>
              </Grid>
            </Grid> : 
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
                title='Buscar Pacientes'
                description='Busque pacientes registrados en el sistema'
              />
              <SearchInput 
                placeholder='Buscar paciente por DNI o apellido...'
                value={searchTerm}
                onChange={(e)=> setSearchTerm(e.target.value)}
              />
              <GenericTable<RowItem> columns={patientColumns} rows={rowsWithActions(filteredRows)} />
            </Grid>
          }
        </Grid>
      </Container>
    </Grid>
  );
};

export default SecretaryPatients;