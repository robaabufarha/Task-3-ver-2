
  export function saveTheme(isDarkMode){
    localStorage.setItem("darkMode",isDarkMode);
 
  }
  export function currentTheme()
  {
    return localStorage.getItem("darkMode");
  }
  