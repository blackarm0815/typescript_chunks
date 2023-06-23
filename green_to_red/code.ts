
const spectrumGreenRed = (numerator: number, denominator: number) => {
  const decimal = numerator / denominator;
  if (denominator === 0) {
    return 'spectrumZero';
  }
  if (decimal < 0.1) {
    return 'spectrumA';
  }
  if (decimal >= 0.1 && decimal < 0.2) {
    return 'spectrumB';
  }
  if (decimal >= 0.2 && decimal < 0.3) {
    return 'spectrumC';
  }
  if (decimal >= 0.3 && decimal < 0.4) {
    return 'spectrumD';
  }
  if (decimal >= 0.4 && decimal < 0.5) {
    return 'spectrumE';
  }
  if (decimal >= 0.5 && decimal < 0.6) {
    return 'spectrumF';
  }
  if (decimal >= 0.6 && decimal < 0.7) {
    return 'spectrumG';
  }
  if (decimal >= 0.7 && decimal < 0.8) {
    return 'spectrumH';
  }
  if (decimal >= 0.8 && decimal < 0.9) {
    return 'spectrumI';
  }
  if (decimal >= 0.9 && decimal < 1.0) {
    return 'spectrumJ';
  }
  if (decimal >= 1.0) {
    return 'spectrumK';
  }
};