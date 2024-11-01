import express from 'express';
import { submitDetails,getAllDetails, 
    getDetailsById, 
    updateDetails, 
    deleteDetails  } from '../controllers/personalDetailsController.js';

const router = express.Router();

router.post('/register', submitDetails);
router.get('/', getAllDetails);               
router.get('/:id', getDetailsById);           
router.put('/:id', updateDetails);           
router.delete('/:id', deleteDetails);
export default router;
