import JobSeeker from '../models/jobseekerModel.js';
import bcrypt from 'bcryptjs';
import Joi from 'joi';
import jwt from 'jsonwebtoken';


const registrationSchema = Joi.object({
    fullName: Joi.string().required(),
    middleName: Joi.string().optional(),
    lastName: Joi.string().required(),
    surname: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    mobileNumber: Joi.string().pattern(/^[0-9]{10}$/).required(),
    workStatus: Joi.string().valid('fresher', 'experienced').required(),
    promotions: Joi.boolean(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});


export const registerJobSeeker = async (req, res) => {
    const { error } = registrationSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    const { fullName, middleName, lastName, surname, email, password, mobileNumber, workStatus, promotions } = req.body;

    try {
        const existingJobSeeker = await JobSeeker.findOne({ where: { email } });
        if (existingJobSeeker) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newJobSeeker = await JobSeeker.create({
            fullName,
            middleName,
            lastName,
            surname,
            email,
            password: hashedPassword,
            mobileNumber,
            workStatus,
            promotions,
        });

        res.status(201).json({
            message: 'Job Seeker registered successfully',
            data: newJobSeeker,
        });
    } catch (error) {
        console.error('Error registering job seeker:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const getJobSeekers = async (req, res) => {
  try {
    const jobSeekers = await JobSeeker.findAll();
    res.status(200).json(jobSeekers);
  } catch (error) {
    console.error('Error fetching job seekers:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getJobSeekerById = async (req, res) => {
  try {
    const jobSeeker = await JobSeeker.findByPk(req.params.id);
    if (!jobSeeker) {
      return res.status(404).json({ message: 'Job Seeker not found' });
    }
    res.status(200).json(jobSeeker);
  } catch (error) {
    console.error('Error fetching job seeker:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const updateJobSeeker = async (req, res) => {
  const { error } = registrationSchema.validate(req.body, { allowUnknown: true });
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  try {
    const jobSeeker = await JobSeeker.findByPk(req.params.id);
    if (!jobSeeker) {
      return res.status(404).json({ message: 'Job Seeker not found' });
    }

    const { password, ...updatedData } = req.body;
    
    if (password) {
      updatedData.password = await bcrypt.hash(password, 10);
    }

    await jobSeeker.update(updatedData);
    res.status(200).json({ message: 'Job Seeker updated successfully', data: jobSeeker });
  } catch (error) {
    console.error('Error updating job seeker:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const deleteJobSeeker = async (req, res) => {
  try {
    const jobSeeker = await JobSeeker.findByPk(req.params.id);
    if (!jobSeeker) {
      return res.status(404).json({ message: 'Job Seeker not found' });
    }

    await jobSeeker.destroy();
    res.status(200).json({ message: 'Job Seeker deleted successfully' });
  } catch (error) {
    console.error('Error deleting job seeker:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
export const loginJobSeeker = async (req, res) => {


  const { error } = loginSchema.validate(req.body); 

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  const { email, password } = req.body;

  try {
    
    const jobSeeker = await JobSeeker.findOne({ where: { email } });
    if (!jobSeeker) {
      return res.status(404).json({ message: 'Job seeker not found' });
    }

  
    const isPasswordValid = await bcrypt.compare(password, jobSeeker.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }
    
    const token = jwt.sign(
      { id: jobSeeker.id, email: jobSeeker.email },
      process.env.JWT_SECRET || 'your_jwt_secret_key',
      { expiresIn: '1h' }
    );

 
    res.status(200).json({
      message: 'Login successful',
      token,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

