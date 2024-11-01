// controllers/professionalSkillsController.js
import ProfessionalSkills from '../models/ProfessionalSkills.js';

// Register new professional skills
export const registerProfessionalSkills = async (req, res) => {
  const { profession, jobRole, experienceYears, experienceMonths, skills, certifications, objective } = req.body;
  
  try {
    const professionalSkills = await ProfessionalSkills.create({
      profession,
      jobRole,
      experienceYears,
      experienceMonths,
      skills,
      certifications,
      objective,
    });
    res.status(201).json({ message: 'Professional skills registered successfully', professionalSkills });
  } catch (error) {
    console.error('Error registering professional skills:', error);
    res.status(500).json({ message: 'Failed to register professional skills' });
  }
};

// Get all professional skills
export const getAllProfessionalSkills = async (req, res) => {
  try {
    const skills = await ProfessionalSkills.findAll();
    res.status(200).json(skills);
  } catch (error) {
    console.error('Error fetching professional skills:', error);
    res.status(500).json({ message: 'Failed to fetch professional skills' });
  }
};

// Get professional skills by ID
export const getProfessionalSkillsById = async (req, res) => {
  const { id } = req.params;

  try {
    const skills = await ProfessionalSkills.findByPk(id);
    if (!skills) {
      return res.status(404).json({ message: 'Professional skills not found' });
    }
    res.status(200).json(skills);
  } catch (error) {
    console.error('Error fetching professional skills by ID:', error);
    res.status(500).json({ message: 'Failed to fetch professional skills' });
  }
};

// Update professional skills
export const updateProfessionalSkills = async (req, res) => {
  const { id } = req.params;
  const { profession, jobRole, experienceYears, experienceMonths, skills, certifications, objective } = req.body;

  try {
    const skillsToUpdate = await ProfessionalSkills.findByPk(id);
    if (!skillsToUpdate) {
      return res.status(404).json({ message: 'Professional skills not found' });
    }

    // Update the fields
    skillsToUpdate.profession = profession || skillsToUpdate.profession;
    skillsToUpdate.jobRole = jobRole || skillsToUpdate.jobRole;
    skillsToUpdate.experienceYears = experienceYears || skillsToUpdate.experienceYears;
    skillsToUpdate.experienceMonths = experienceMonths || skillsToUpdate.experienceMonths;
    skillsToUpdate.skills = skills || skillsToUpdate.skills;
    skillsToUpdate.certifications = certifications || skillsToUpdate.certifications;
    skillsToUpdate.objective = objective || skillsToUpdate.objective;

    await skillsToUpdate.save();
    res.status(200).json({ message: 'Professional skills updated successfully', data: skillsToUpdate });
  } catch (error) {
    console.error('Error updating professional skills:', error);
    res.status(500).json({ message: 'Failed to update professional skills' });
  }
};

export const deleteProfessionalSkills = async (req, res) => {
  const { id } = req.params;

  try {
    const skills = await ProfessionalSkills.findByPk(id);
    if (!skills) {
      return res.status(404).json({ message: 'Professional skills not found' });
    }

    await skills.destroy();
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting professional skills:', error);
    res.status(500).json({ message: 'Failed to delete professional skills' });
  }
};
