export const generateUsername = () => {
  const animals = [
    'Cat', 'Dog', 'Mouse', 'Hamster', 'Giraffe', 'Donkey',
    'Elephant', 'Crocodile', 'Gazelle', 'Bear', 'Parrot',
    'Zebra', 'Seagull', 'Cow', 'Pig', 'Goat', 'Whale', 'Otter',
    'Jellyfish', 'Salmon',
  ];
  const colors = [
    'Red', 'Blue', 'Green', 'Violet', 'Orange', 'Purple', 'Indigo',
  ];
  const n1 = Math.floor(animals.length * Math.random());
  const n2 = Math.floor(colors.length * Math.random());

  return `${colors[n2]} ${animals[n1]}`;
};

export const generateHash = length => (
  Math.random().toString(36).replace(/[^A-Z1-9]+/g, '').substr(0, length)
);
