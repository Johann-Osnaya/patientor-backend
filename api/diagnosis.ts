import app from '../app';
import diagnoseRouter from '../routes/diagnosis';

app.use('/api/diagnosis', diagnoseRouter);

export default app;