/* eslint-disable @typescript-eslint/no-unused-vars */
import Container from "./_component/Container";
import Input from "./_component/Input";
import ProductCard from "./_component/ProductCard";
import ThemeSwitcher from "./_component/ThemeSwitcher";
import Wrapper from "./_component/Wrapper";



export default function Home() {
  return (
  <Container>
     <ThemeSwitcher />
    <Wrapper>
      <Input/>
      <Wrapper>
      <ProductCard/>
      </Wrapper>
    </Wrapper>
  </Container>

  );
}
