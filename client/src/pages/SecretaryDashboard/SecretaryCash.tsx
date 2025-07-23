import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import SearchInput from "../../components/SearchInput";
import GenericTable from "../../components/common/GenericTable/GenericTable";
import type { Column } from "../../components/common/GenericTable/GenericTable";
import palette from "../../theme/palettes";
import HeaderDashboardBlock from "../../components/common/HeaderDashboardBlock";
import Input from "../../components/common/Input";
import { useState, useEffect } from "react";
import axios from "axios";
import formatDateToDDMMYYYY from "../../components/common/formatDateToDDMMYYYY";

const sampleColumns: Column<RowItem>[] = [
  { id: 'id', label: 'ID', minWidth: 50 },
  { id: 'fecha', label: 'Fecha', minWidth: 100 },
  { 
    id: 'tipo_transaccion',
    label: 'Tipo de Transacción',
    minWidth: 170,
    renderCell: (row) => (
      <Typography 
        sx={{ 
          width:'fit-content',
              padding: '0.3rem 0.8rem',
              borderRadius: '20px',
              color: 
                row.tipo_transaccion === 'Ingreso' ? '#28A745' :
                row.tipo_transaccion === 'Egreso' ? '#780600' :
                '#9E9E9E',
              fontSize:'.85rem',
              fontWeight: '400',
              backgroundColor:
                row.tipo_transaccion === 'Ingreso' ? '#D1FFBD' :
                row.tipo_transaccion === 'Egreso' ? '#FA8072' :
                '#9E9E9E',
        }}>
        {row.tipo_transaccion}
      </Typography>
    ),
  },
  { id: 'categoria', label: 'Categoría', minWidth: 170 },
  { id: 'monto', label: 'Monto', minWidth: 100 },
  { id: 'descripcion', label: 'Descripción', minWidth: 170 },
];

interface CashItem {
  id: string;
  fecha: string;
  tipo_transaccion: string;
  categoria: string;
  monto: string;
  fecha_transaccion: string;
  descripcion: string;
};

interface RowItem {
  id: string;
  fecha: string;
  tipo_transaccion: string;
  categoria: string;
  monto: string;
  fecha_transaccion: string;
  descripcion: string;
  [key: string]: unknown;
};

const categoryLabels: Record<string,string> = {
  analisis: 'Análisis Patológicos',
  consulta: 'Consultas',
  servicio: 'Servicios',
  insumo: 'Insumos',
  otro: 'Otros',
};

const SecretaryCash = () => {
  const [transactionType, setTransactionType] = useState('ingreso');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRows, setFilteredRows] = useState<RowItem[]>([]); 
  const [category, setCategory] = useState('analisis');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [rows, setRows] = useState<RowItem[]>([]);
  const [active, setActive] = useState<'nuevo' | 'historial'>('nuevo');
  const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
  
  const handleSection = ( section: 'nuevo' | 'historial' ) => {
    setActive(section);
  }

    useEffect(() => {
      const fetchSamples = async () => {
        const resp = await axios.get("http://localhost:5000/api/cash/get-cashes", {withCredentials:true});
        const mappedRows = resp.data.data.map((item: CashItem): RowItem => ({
          id: String(item.id),
          fecha: formatDateToDDMMYYYY(item.fecha),
          tipo_transaccion: item.tipo_transaccion === 'ingreso' ? 'Ingreso' : 'Egreso',
          categoria: categoryLabels[item.categoria] || item.categoria,
          monto: `$ ${item.monto}`,
          fecha_transaccion: formatDateToDDMMYYYY(item.fecha_transaccion),
          descripcion: item.descripcion,
        }));
        setRows(mappedRows);
      };
      fetchSamples();
    }, []);

    useEffect(() => {
    let filtered = [...rows];

    if (searchTerm.trim()) {
      const lower = searchTerm.toLowerCase();
      filtered = filtered.filter(row =>
        row.tipo_transaccion.toLowerCase().includes(lower) ||
        row.fecha_transaccion.toLowerCase().includes(lower)
      );
    }

    setFilteredRows(filtered);
  }, [searchTerm, rows]);

  const sendCashForm = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!dateRegex.test(date) ) {
      alert('La fecha debe tener el formato DD/MM/AAAA');
    return;
  }

    try {
      await axios.post('http://localhost:5000/api/cash/create-cash', {
          fecha: date,
          tipo_transaccion: transactionType,
          categoria: category,
          monto: amount,
          fecha_transaccion: date,
          descripcion: description,
        }, { 
          withCredentials:true,
        }
      );
      alert('Has registrado la muestra exitosamente.');
      setTransactionType('');
      setCategory('');
      setAmount('');
      setDate('');
      setDescription('');
    } catch (error) {
      alert('Su registro no se pudo completar');
      console.log(error);
    };
  };

  return (
    <Grid
      size={10}
      sx={{
        backgroundColor: palette.ultraLightGray.main,
        margin:0,
        paddingTop: '1rem',
        minHeight: '100vh',
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
                title='Caja Contable'
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
              Nueva Transacción</Button>
            <Button
              sx={{
                backgroundColor: active === 'historial' ? 'white' : palette.lightGray.main,
                color: active === 'historial' ? 'black' : palette.gray.main,
                border:0,
                paddingX:1.5,
              }}
              onClick={()=> handleSection('historial')}
            >
              Historial de Transacciones</Button>
          </Grid>
          {
            active === 'nuevo' ? (
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
                title='Registrar Transacción'
                description='Ingrese los datos de la transacción'
              />
              <Grid
                container
                component="form"
                onSubmit={sendCashForm}
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
                  <Input
                    type="select"
                    label="Tipo de Transacción"
                    value={transactionType}
                    onChange={(e) => {
                      setTransactionType(e.target.value);
                    }}
                    options={[
                      { value: "ingreso", label: "Ingreso" },
                      { value: "egreso", label: "Egreso" },
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
                    label="Categoría"
                    value={category}
                    onChange={(e) => {
                      setCategory(e.target.value);
                    }}
                    options={[
                      { value: "analisis", label: "Análisis Patológicos" },
                      { value: "consulta", label: "Consultas" },
                      { value: "insumo", label: "Insumos" },
                      { value: "servicio", label: "Servicios" },
                      { value: "otro", label: "Otros" }
                    ]}
                    sx={{
                      '& .MuiSelect-select': {
                        textAlign: 'left',
                      }
                    }}
                  />
                </Grid>
                <Grid size={6} sx={{ margin: 0 }}>
                  <Input value={amount} onChange={(e)=> setAmount(e.target.value)} label="Monto" placeholder="$ 0.00"/>
                </Grid>
                <Grid size={6} sx={{ margin: 0 }}>
                  <Input value={date} onChange={(e)=> setDate(e.target.value)} label="Fecha" placeholder="DD/MM/AAAA"/>
                </Grid>
                <Grid size={12} sx={{ margin: 0 }}>
                  <Input value={description} onChange={(e)=> setDescription(e.target.value)} label="Descripción" placeholder="Descripción de la transacción"/>
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
                    Registrar Transacción
                  </Button>
                </Box>
              </Grid>
            </Grid>
            ) : (
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
                      title='Historial de Transacciones'
                      description='Historial de ingresos y egresos del laboratorio'
                    />
                  <SearchInput
                    placeholder='Buscar transacción por tipo o fecha...'
                    value={searchTerm}
                    onChange={(e)=> setSearchTerm(e.target.value)}
                  />
                  <GenericTable<RowItem> columns={sampleColumns}  rows={filteredRows} />
                </Grid>
            )
          }
        </Grid>
      </Container>
    </Grid>
  );
};

export default SecretaryCash;