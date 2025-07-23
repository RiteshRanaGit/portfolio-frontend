const API_BASE_URL = 'http://localhost:5000/api';

export const fetchResume = async () => {
  const response = await fetch(`${API_BASE_URL}/resume`);
  if (!response.ok) {
    throw new Error('Failed to fetch resume');
  }
  return response.json();
};