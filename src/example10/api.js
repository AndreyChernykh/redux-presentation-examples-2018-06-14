const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const fetchUser = () => delay(5000).then(() => ({
  id: 1,
  name: 'John Doe'
}));