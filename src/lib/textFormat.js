exports.truncation = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;  
    }
}

exports.cleanText = (str) => {
  return str.trim().replace(/&nbsp;/g, " ");
}