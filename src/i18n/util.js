export function getLangFromred(url) {
    // Implement your language detection logic here
    // For example:
    const lang = url.split('/')[1];
    if(lang==="projects"){
      return "";
    }
    if (lang==="en") {
      return "en";
    }
    return lang;
  }
  export function getLangfromhtml(url) {
    const lang = url.split('/')[1];
    if(lang===""){
      return "es";
    }
    return lang;
  }
  