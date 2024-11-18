// const express = require('express');
// const Career = require('../Models/Career.js');
import express from 'express'
import { Career } from '../Models/Career.js'


const router = express.Router();

// Get all careers
router.get('/getCareer', async (req, res) => {
  try {
    const careers = await Career.find();
    res.json(careers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific career by ID
router.get('/getCareer/:id', async (req, res) => {
  try {
    const career = await Career.findById(req.params.id);
    if (!career) return res.status(404).json({ message: 'Career not found' });
    res.json(career);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new career
router.post('/postCareer', async (req, res) => {
  const { position, description, requirements, location, salary, how_to_apply, applicationInstructions } = req.body;
  const career = new Career({ position, description, requirements, location, salary, how_to_apply, applicationInstructions });

  try {
    const newCareer = await career.save();
    res.status(201).json(newCareer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a career by ID
router.put('/postCareer/:id', async (req, res) => {
  try {
    const updatedCareer = await Career.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedCareer) return res.status(404).json({ message: 'Career not found' });
    res.json(updatedCareer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a career by ID
router.delete('/deleteCareer/:id', async (req, res) => {
  try {
    const deletedCareer = await Career.findByIdAndDelete(req.params.id);
    if (!deletedCareer) return res.status(404).json({ message: 'Career not found' });
    res.json({ message: 'Career deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
