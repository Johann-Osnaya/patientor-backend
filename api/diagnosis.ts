import app from '../app';
import diagnoseRouter from '../routes/diagnosis';

app.use('/api/diagnoses', diagnoseRouter);

export default app;