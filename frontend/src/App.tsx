import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function Dashboard() {
  const [jobPostings, setJobPostings] = useState([]);
  const [bids, setBids] = useState([]);
  const [contracts, setContracts] = useState([]);
  const [payments, setPayments] = useState([]);
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    axios.get('/api/job-postings')
      .then(r => r.data)
      .then(setJobPostings);
    axios.get('/api/bids')
      .then(r => r.data)
      .then(setBids);
    axios.get('/api/contracts')
      .then(r => r.data)
      .then(setContracts);
    axios.get('/api/payments')
      .then(r => r.data)
      .then(setPayments);
    axios.get('/api/ratings')
      .then(r => r.data)
      .then(setRatings);
  }, []);

  return (
    <div className="p-6">
      <h1>Dashboard</h1>
      <h2>Job Postings:</h2>
      <ul>
        {jobPostings.map((jobPosting, index) => (
          <li key={index}>{jobPosting.title}</li>
        ))}
      </ul>
      <h2>Bids:</h2>
      <ul>
        {bids.map((bid, index) => (
          <li key={index}>{bid.amount}</li>
        ))}
      </ul>
      <h2>Contracts:</h2>
      <ul>
        {contracts.map((contract, index) => (
          <li key={index}>{contract.status}</li>
        ))}
      </ul>
      <h2>Payments:</h2>
      <ul>
        {payments.map((payment, index) => (
          <li key={index}>{payment.amount}</li>
        ))}
      </ul>
      <h2>Ratings:</h2>
      <ul>
        {ratings.map((rating, index) => (
          <li key={index}>{rating.rating}</li>
        ))}
      </ul>
    </div>
  );
}