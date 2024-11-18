import express from 'express';
import { ProjectChallenge } from '../Models/ProjectChallengeRoutes.js';
// const express = require('express');
// const ProjectChallenge = require('../Models/projectChallengeRoute.js');


const router = express.Router();

// Get all project challenges
router.get('/getProject', async (req, res) => {
  try {
    const challenges = await ProjectChallenge.find();
    res.json(challenges);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific project challenge by ID
router.get('/getProject/:id', async (req, res) => {
  try {
    const challenge = await ProjectChallenge.findById(req.params.id);
    if (!challenge) return res.status(404).json({ message: 'Challenge not found' });
    res.json(challenge);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new project challenge
router.post('/postProject', async (req, res) => {
  const { challengeName, description, status, deadline, prizes, eligibility, submissionLink } = req.body;
  const projectChallenge = new ProjectChallenge({
    challengeName,
    description,
    status,
    deadline,
    prizes,
    eligibility,
    submissionLink,
  });

  try {
    const newChallenge = await projectChallenge.save();
    res.status(201).json(newChallenge);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a project challenge by ID
router.put('/postProject/:id', async (req, res) => {
  try {
    const updatedChallenge = await ProjectChallenge.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedChallenge) return res.status(404).json({ message: 'Challenge not found' });
    res.json(updatedChallenge);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a project challenge by ID
router.delete('/deleteProject/:id', async (req, res) => {
  try {
    const deletedChallenge = await ProjectChallenge.findByIdAndDelete(req.params.id);
    if (!deletedChallenge) return res.status(404).json({ message: 'Challenge not found' });
    res.json({ message: 'Challenge deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
