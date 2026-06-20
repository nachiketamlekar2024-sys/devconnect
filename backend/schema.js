const mongoose = require('mongoose');

// ── Users ─────────────────────────
const UsersSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  google_oauth_id: { type: String, unique: true },
}, { timestamps: true });

const Users = mongoose.model('Users', UsersSchema);

// ── JobPostings ─────────────────────────
const JobPostingsSchema = new mongoose.Schema({
  title: String,
  description: String,
  user_id: mongoose.Schema.Types.ObjectId,
}, { timestamps: true });

const JobPostings = mongoose.model('JobPostings', JobPostingsSchema);

// ── Bids ─────────────────────────
const BidsSchema = new mongoose.Schema({
  job_posting_id: mongoose.Schema.Types.ObjectId,
  user_id: mongoose.Schema.Types.ObjectId,
  amount: Number,
}, { timestamps: true });

const Bids = mongoose.model('Bids', BidsSchema);

// ── Contracts ─────────────────────────
const ContractsSchema = new mongoose.Schema({
  job_posting_id: mongoose.Schema.Types.ObjectId,
  user_id: mongoose.Schema.Types.ObjectId,
  bid_id: mongoose.Schema.Types.ObjectId,
  status: String,
}, { timestamps: true });

const Contracts = mongoose.model('Contracts', ContractsSchema);

// ── Payments ─────────────────────────
const PaymentsSchema = new mongoose.Schema({
  contract_id: mongoose.Schema.Types.ObjectId,
  amount: Number,
  status: String,
}, { timestamps: true });

const Payments = mongoose.model('Payments', PaymentsSchema);

// ── Ratings ─────────────────────────
const RatingsSchema = new mongoose.Schema({
  contract_id: mongoose.Schema.Types.ObjectId,
  user_id: mongoose.Schema.Types.ObjectId,
  rating: Number,
  review: String,
}, { timestamps: true });

const Ratings = mongoose.model('Ratings', RatingsSchema);

module.exports = { Users, JobPostings, Bids, Contracts, Payments, Ratings };