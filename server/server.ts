import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import morgan from 'morgan';
import userRoutes from './routes/user.route';
import cashRoutes from './routes/cash.route';
import authRoutes from './routes/auth.route';
import sampleRoutes from './routes/sample.route';
//import cashRoutes from './routes/cash.route';
//import cashDayRoutes from './routes/cashday.route';
import materialRoutes from './routes/material.route';
import reportRoutes from './routes/report.route';
//import validatedReportRoutes from './routes/validated_report.route';

(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

const app = express();

dotenv.config();
app.use(morgan('dev'));
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));
app.use(bodyParser.json());
app.use(express.json());

app.use('/api/user/', userRoutes);
app.use('/api/auth/', authRoutes);
app.use('/api/cash/', cashRoutes);
//app.use('/api/cash-day/', cashDayRoutes);
app.use('/api/sample/', sampleRoutes);
app.use('/api/material/', materialRoutes);
app.use('/api/report/', reportRoutes);
//app.use('/api/v-report/', validatedReportRoutes);

const PORT = process.env.PORT;
const DB_PORT = 5432;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Connected to PostgreSQL on port ${DB_PORT}`);
});

export default app;