export const capitalize = (str) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const truncate = (str, length = 50) => {
  return str.length > length ? str.substring(0, length) + "..." : str;
};
