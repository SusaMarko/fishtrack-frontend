const dateToTime = (createdAt) => {
  const date = new Date(createdAt);
  return date.toLocaleString("en-GB", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
};

export default dateToTime;
