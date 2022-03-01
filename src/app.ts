import express, { Application } from 'express';

const app: Application = express();

import authRoutes from './routes/auth';

//settings
app.set('port', 4000);

//routes
app.use(authRoutes);

export default app;