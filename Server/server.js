import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './config/db.js';
import jobseekerRoutes from './routes/jobseekerRoutes.js';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';
import employerRoutes from './routes/employerRoutes.js';
import personalDetailsRoutes from './routes/personalDetails.js';
import qualificationRoutes from './routes/qualificationRoutes.js';
import professionalSkillsRoutes from './routes/professionalSkillsRoutes.js';


dotenv.config();

const app = express();

app.use(cors());



app.use(bodyParser.json());
app.use('/uploads', express.static(path.join('uploads')));


app.use('/v1/api/jobseekers', jobseekerRoutes);
app.use('/v1/api/personal-details', personalDetailsRoutes);
app.use('/v1/api/qualifications', qualificationRoutes);
app.use('/v1/api/employers', employerRoutes);
app.use('/v1/api/professional-skills', professionalSkillsRoutes);



sequelize.sync({ alter: true })
  .then(() => console.log('Database connected'))
  .catch(err => console.error('Error syncing database', err));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});