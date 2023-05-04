const API_BASE_URL = 'https://api.getcardbase.com/api/web/v1';

export async function fetchSuites() {
  const response = await fetch(`${API_BASE_URL}/suite_years/suites`);
  const data = await response.json();
  return data;
}
