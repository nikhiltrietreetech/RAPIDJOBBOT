import express from 'express';
import { registerJobSeeker,loginJobSeeker,getJobSeekers, 
    getJobSeekerById, 
    updateJobSeeker, 
    deleteJobSeeker  } from '../controllers/jobseekerController.js';

const router = express.Router();

router.post('/register', registerJobSeeker);
router.post("/login", loginJobSeeker);
router.get('/', getJobSeekers);                 
router.get('/:id', getJobSeekerById);            
router.put('/:id', updateJobSeeker);             
router.delete('/:id', deleteJobSeeker);         

export default router;
