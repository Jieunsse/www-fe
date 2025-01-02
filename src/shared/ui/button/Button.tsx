interface type {
  name: string;
}

export const Button = ({ name }: type) => {
  return <button>{name}</button>;
};
