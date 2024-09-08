export const formattedDate = () => {
  const date: Date = new Date();
  const formattedDate: string = date.toDateString().slice(4, 15);

  return formattedDate;
};
