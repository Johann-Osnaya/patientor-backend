import app from '../app';
import patientsRouter from '../routes/patient';

app.use('/api/ping', patientsRouter);

export default app;