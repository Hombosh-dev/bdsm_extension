document.addEventListener('DOMContentLoaded', () => {
  const slowFillingCheckbox = document.getElementById('slowFilling');

  // Load current setting
  chrome.storage.local.get(['slowFilling'], (result) => {
    slowFillingCheckbox.checked = !!result.slowFilling;
  });

  // Save setting on change
  slowFillingCheckbox.addEventListener('change', () => {
    chrome.storage.local.set({ slowFilling: slowFillingCheckbox.checked });
  });
});
