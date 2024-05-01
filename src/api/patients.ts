import app from '../app';
import patientsRouter from '../routes/patient';

app.use('/api/patients', patientsRouter);

export default app;