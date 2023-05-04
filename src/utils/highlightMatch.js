function highlightMatch(text, searchTerm) {
  if (!searchTerm) {
    return text;
  }

  const regex = new RegExp(`(${searchTerm})`, 'gi');
  return text.replace(regex, (match) => `<span style="font-weight: bold">${match}</span>`);
}

export default highlightMatch;
