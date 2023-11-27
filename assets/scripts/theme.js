
import { saveTheme,currentTheme } from "./localstorage.js";
export function darkMode() {
       const body = document.body;
       body.classList.toggle('dark-mode');
       const isDarkMode = body.classList.contains('dark-mode');
       saveTheme('darkmode', isDarkMode);
      }

export function Theme() {
      const mode = currentTheme();
      if (mode === 'true') {
          document.body.classList.add('dark-mode');
      }
      else{
        document.body.classList.remove('dark-mode');
      } 
  }