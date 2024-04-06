export const isString = (val: any) => {
  // Check for Arabic characters in the input
  const hasArabicCharacters = /[\u0600-\u06FF]/.test(val);

  if (hasArabicCharacters) {
    return true;
  }

  // Your existing conditions for other cases
  if (val.includes(".")) {
    return true;
  }
  if (val.length === 1 && val === " ") {
    return false;
  }
  if (
    val[val.length - 1] === " " &&
    val[val.length - 1] !== val[val.length - 2]
  ) {
    return true;
  }
  if (
    val[val.length - 1]?.trim()?.toLowerCase() !==
      val[val.length - 1]?.trim()?.toUpperCase() ||
    val === ""
  ) {
    return true;
  }

  return false;
};

export const isFloat = (val: any) => {
  if (val[val.length - 1] === " " || val === "." || val === "0") {
    return false;
  }
  if (val.includes(".")) {
    val = val.replace(".", "");
    // eslint-disable-next-line no-restricted-globals
    if ((!val.includes(".") && !isNaN(val?.trim())) || val === "") {
      return true;
    }
    return false;
  }
  // eslint-disable-next-line no-restricted-globals
  if (!isNaN(val?.trim()) || val === "") {
    return true;
  }
  return false;
};
export const isNumber = (val: any) => {
  if (val[val.length - 1] === " ") {
    return false;
  }
  if (val.includes(".")) {
    return false;
  }
  // eslint-disable-next-line no-restricted-globals
  if (!isNaN(val?.trim()) || val === "") {
    return true;
  }
  return false;
};
export const isValidInput = (value: string) => {
  if (value === "") {
    return true;
  }
  if (value.trim() === "") {
    return false; // Reject if the value is empty or only consists of whitespace
  }

  // Regular expression to allow alphanumeric characters, spaces, and all symbols except '/'
  const regex = /^[a-zA-Z0-9\s!@#$%^&*()_+\-=\[\]{};':"\\|,.<>?`~]*$/;

  if (!regex.test(value)) {
    return false; // Reject if the value contains '/'
  }

  return true; // Accept the input if it meets all the conditions
};

export const NumberFormat = (number: number) => {
  return parseFloat(`${number}`)
    .toFixed(2)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};
