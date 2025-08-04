import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [Employees, setEmployees] = useState([]);
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    axios.get('/api/employees').then(res => setEmployees(res.data));
    axios.get('/api/leaves').then(res => setLeaves(res.data));
  }, []);

  const updateStatus = (id, status) => {
    axios.patch(`/api/leaves/${id}/status`, { status }).then(() => {
      setLeaves(prev => prev.map(l => l._id === id ? { ...l, status } : l));
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Leave Applications</h1>
      {leaves.map(leave => (
        <div key={leave._id} className="border p-4 my-2">
          <p><strong>Employee:</strong> {leave.employeeId?.name}</p>
          <p><strong>From:</strong> {leave.startDate.slice(0, 10)} to {leave.endDate.slice(0, 10)}</p>
          <p><strong>Reason:</strong> {leave.reason}</p>
          <p><strong>Status:</strong> {leave.status}</p>
          <select value={leave.status} onChange={e => updateStatus(leave._id, e.target.value)}>
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
      ))}
    </div>
  );
}

export default App;
