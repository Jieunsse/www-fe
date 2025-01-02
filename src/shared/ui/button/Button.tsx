import { CustomButton } from './Index.ts';

interface type {
  name: string;
}

export const Button = ({ name }: type) => {
  return <CustomButton>{name}</CustomButton>;
};
