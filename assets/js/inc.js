// include.js
const includeHTML = async (elementId, filePath) => {
  try {
    const response = await fetch(filePath);
    const content = await response.text();
    document.getElementById(elementId).innerHTML = content;
  } catch (error) {
    console.error(`Error loading file ${filePath}: ${error}`);
  }
};