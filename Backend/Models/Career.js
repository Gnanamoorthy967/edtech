import mongoose from 'mongoose';

const careerSchema = new mongoose.Schema({
  position: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  requirements: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    default: 'Remote',
  },
  salary: {
    type: String,
    default: 'Negotiable',
    },
    how_to_apply: {
      type: String,
    },
  applicationInstructions: {
    type: String,
  },
});

export const Career =  mongoose.model('Career', careerSchema);
