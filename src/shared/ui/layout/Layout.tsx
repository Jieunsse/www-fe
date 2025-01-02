import { Container } from './Index.ts';
import { Header } from '../../../widget/header/Header.tsx';
import { Footer } from '../../../widget/footer/Footer.tsx';

export const Layout = () => {
  return (
    <>
      <Container>
        <Header />
        <Footer />
      </Container>
    </>
  );
};
