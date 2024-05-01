function getRandomPastelColor() {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 41) + 30;
  const lightness = Math.floor(Math.random() * 31) + 60;
  const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

  return color;
}
