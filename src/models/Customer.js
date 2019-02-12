import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
  login: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  emailVerify: {
    type: Boolean,
    required: [true, false]
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  currency: {
    type: String,
    required: [true, 'USD']
  }
}, {
  collection: 'customer'
});

const Customer = mongoose.model('Customer', CustomerSchema);

module.exports = Customer;
