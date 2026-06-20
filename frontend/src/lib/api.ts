import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3001',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

// ─── Login ─────────────────────────────

/** Email/Password Login */
export async function postLogin(data: Record<string, unknown>) {
  const response = await api.post('/api/login', data);
  return response.data;
}

// ─── GoogleLogin ─────────────────────────────

/** Google OAuth Login */
export async function postGoogleLogin(data: Record<string, unknown>) {
  const response = await api.post('/api/google-login', data);
  return response.data;
}

// ─── RecoverPassword ─────────────────────────────

/** Password Recovery */
export async function postRecoverPassword(data: Record<string, unknown>) {
  const response = await api.post('/api/recover-password', data);
  return response.data;
}

// ─── JobPostings ─────────────────────────────

/** Create Job Posting */
export async function postJobPostings(data: Record<string, unknown>) {
  const response = await api.post('/api/job-postings', data);
  return response.data;
}

/** Get All Job Postings */
export async function getJobPostings() {
  const response = await api.get('/api/job-postings');
  return response.data;
}

/** Get Job Posting by ID */
export async function getJobPostings:id() {
  const response = await api.get('/api/job-postings/:id');
  return response.data;
}

// ─── Bids ─────────────────────────────

/** Place Bid on Job Posting */
export async function postBids(data: Record<string, unknown>) {
  const response = await api.post('/api/bids', data);
  return response.data;
}

/** Get All Bids for User */
export async function getBids() {
  const response = await api.get('/api/bids');
  return response.data;
}

// ─── Contracts ─────────────────────────────

/** Create Contract for Job Posting */
export async function postContracts(data: Record<string, unknown>) {
  const response = await api.post('/api/contracts', data);
  return response.data;
}

/** Get All Contracts for User */
export async function getContracts() {
  const response = await api.get('/api/contracts');
  return response.data;
}

// ─── Payments ─────────────────────────────

/** Make Payment for Contract */
export async function postPayments(data: Record<string, unknown>) {
  const response = await api.post('/api/payments', data);
  return response.data;
}

/** Get All Payments for User */
export async function getPayments() {
  const response = await api.get('/api/payments');
  return response.data;
}

// ─── Ratings ─────────────────────────────

/** Leave Rating and Review for Contract */
export async function postRatings(data: Record<string, unknown>) {
  const response = await api.post('/api/ratings', data);
  return response.data;
}

// ─── Homepage ─────────────────────────────

/** Get Homepage Data */
export async function getHomepage() {
  const response = await api.get('/api/homepage');
  return response.data;
}

export default api;
