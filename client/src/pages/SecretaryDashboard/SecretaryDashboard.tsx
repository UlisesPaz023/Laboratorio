import { Grid } from "@mui/material";
import SecretaryPanel from "./SecretaryPanel";
import SecretarySamples from "./SecretarySamples";
import SecretaryPatients from "./SecretaryPatients";
import SecretaryCash from "./SecretaryCash";
import { useState } from "react";

const SecretaryDashboard = () => {
  const [section, setSection] = useState<'muestras' | 'pacientes' | 'caja'>('muestras');

  return (
    <Grid
      container
      sx={{
        minHeight: '100vh',
        padding:0,
      }}
    >
      <SecretaryPanel onSectionChange={setSection} />
      {section === 'muestras' && <SecretarySamples />}
      {section === 'pacientes' && <SecretaryPatients />}
      {section === 'caja' && <SecretaryCash />}
    </Grid>
  );
};

export default SecretaryDashboard;