export function randomString() {
  return (Math.random() * 1e18).toString(36);
}

export function randomAmount() {
  return Math.floor(Math.random() * 100) + 1;
}

export function randomAmountasString() {
  return `${Math.floor(Math.random() * 100) + 1}.00`;
}
