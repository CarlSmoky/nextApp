export const toTitleCase = (str: string) => {
  const convertedArr = str.replace(/[-_`\s]/g, "_").split("_");
  let result = []
  for (let i = 0; i < convertedArr.length; i++) {
    if(isParentheses(convertedArr[i].charAt(0))) {
      result.push(convertedArr[i].charAt(0) + convertedArr[i].charAt(1).toUpperCase() + convertedArr[i].substring(2).toLowerCase());
    } else {
      result.push(convertedArr[i].charAt(0).toUpperCase() + convertedArr[i].substring(1).toLowerCase());
    }
  }
  return result.join(" ");
}

const isParentheses = (letter: string) => {
  const parentheses = ["(", "{", "["]
  for (let i = 0; i < parentheses.length; i++) {
    if (letter === parentheses[i]) return true;
  }
  return false;
}

export const removeExcessivePathSegments= (pathname: string) => {
  if (pathname.split("/").length > 2) {
    return pathname.split("/").slice(0, 2).join("/")
  }
  return pathname;
}