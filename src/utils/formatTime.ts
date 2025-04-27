import { formatDate } from "@vueuse/core";

const formatTime = (date: string) => {
  if (!date) return "";

  const dateObj = new Date(date);

  return formatDate(dateObj, "DD-MM-YYYY");
};

export default formatTime;
