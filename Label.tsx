import styled from '@emotion/styled';

const Container = styled.div`
  text-align: center;
`;

interface Props {
  data: number;
}

export const Label = (props: Props) => {
  return <Container>{props.data}</Container>;
};
