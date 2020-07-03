export default (createdAt) => {
  const date = new Date(createdAt);

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  return `Created on ${day}/${month}/${year}`;
};
