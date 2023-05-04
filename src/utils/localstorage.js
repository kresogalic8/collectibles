const STORAGE_KEY = 'selectedSuites';

export const getSelectedSuites = () => {
  const selectedSuites = localStorage.getItem(STORAGE_KEY);
  return selectedSuites ? JSON.parse(selectedSuites) : [];
};

export const addSelectedSuite = (suite) => {
  const selectedSuites = getSelectedSuites();
  const updatedSuites = [...selectedSuites, suite];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedSuites));
};

export const removeSelectedSuite = (suite) => {
  const selectedSuites = getSelectedSuites();
  const updatedSuites = selectedSuites.filter((item) => item.id !== suite.id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedSuites));
};
