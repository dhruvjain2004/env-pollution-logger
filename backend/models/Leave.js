import mongoose from 'mongoose';

const leaveSchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
  startDate: Date,
  endDate: Date,
  reason: String,
  status: { type: String, default: 'Pending' },
});

export default mongoose.model('Leave', leaveSchema);