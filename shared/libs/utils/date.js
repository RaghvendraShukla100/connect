export const formatDate = (date) => {
  return new Date(date).toISOString();
};

export const getCurrentTimestamp = () => {
  return new Date().getTime();
};
