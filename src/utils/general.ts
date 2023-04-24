/**
 * Utility function to get the current URL of the webpage. Promise wrapper of chrome.tabs.query()
 * @returns {string}
 */
export const getCurrentURL = (): Promise<string> =>
  new Promise((resolve, reject) => {
    chrome.tabs.query({ active: true }, (tabs) => {
      const { url } = tabs[0];
      if (url) {
        return resolve(url);
      }
      reject();
    });
  });
