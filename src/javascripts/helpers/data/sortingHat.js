const sortingHat = () => {
  const houses = ['gryffindor', 'slytherin', 'hufflepuff', 'ravenclaw'];
  const sortingHatHouse = houses[Math.floor(Math.random() * houses.length)];
  return sortingHatHouse;
};

export default sortingHat;
