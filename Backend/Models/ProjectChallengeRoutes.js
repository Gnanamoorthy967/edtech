import mongoose from 'mongoose';

const projectChallengeSchema = new mongoose.Schema({
  challengeName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ['Live', 'Closed', 'Upcoming'],
    default: 'Upcoming',
  },
  deadline: {
    type: Date,
    required: true,
  },
  prizes: {
    type: String,
  },
  eligibility: {
    type: String,
  },
  submissionLink: {
    type: String,
  },
});

export const ProjectChallenge = mongoose.model('ProjectChallenge', projectChallengeSchema);
