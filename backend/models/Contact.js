const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: [true, 'Please add a name'],
    trim: true,
    maxlength: [50, 'Name cannot be more than 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email'
    ]
  },
  phone: {
    type: String,
    required: [true, 'Please add a phone number'],
    maxlength: [15, 'Phone number cannot be longer than 15 characters']
  },
  address: {
    type: String,
    required: false,
    maxlength: [200, 'Address cannot be more than 200 characters']
  },
  company: {
    type: String,
    required: false,
    maxlength: [100, 'Company name cannot be more than 100 characters']
  },
  notes: {
    type: String,
    required: false,
    maxlength: [500, 'Notes cannot be more than 500 characters']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

contactSchema.index({ user: 1, email: 1 }, { unique: true });

module.exports = mongoose.model('Contact', contactSchema);