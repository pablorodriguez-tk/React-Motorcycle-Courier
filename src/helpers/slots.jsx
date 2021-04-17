const slots = (start, number) => {
  const slots = [];

  for (let i = 0; i < number; i++) {
    let minutes = i % 2 ? 30 : 0;
    let hours = start + i / 2;
    var d = new Date(2021, 0, 1, hours, minutes);
    hours = String(d.getHours()).padStart(2, "0");
    minutes = String(d.getMinutes()).padStart(2, "0");
    slots.push(`${hours}:${minutes}`);
  }

  return slots;
};

export default slots;
