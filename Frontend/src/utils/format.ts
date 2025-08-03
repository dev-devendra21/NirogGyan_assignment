function formatTo12Hour(timeStr: string) {
  const [hourStr, minute] = timeStr.split(":");
  const hour = parseInt(hourStr, 10);

  const period = hour >= 12 ? "PM" : "AM";
  const hour12 = hour % 12 || 12; // convert 0 to 12

  return `${hour12}:${minute} ${period}`;
}

export { formatTo12Hour };
