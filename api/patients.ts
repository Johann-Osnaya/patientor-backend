import app from '../app';
import patientsRouter from '../routes/patients';

app.use('/api/patients', patientsRouter);

export default app;