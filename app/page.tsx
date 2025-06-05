/* eslint-disable @typescript-eslint/no-unused-vars */
import Chart from "./_component/Chart";
import Chat from "./_component/Chat";
import Container from "./_component/Container";
import Input from "./_component/Input";
import Message from "./_component/Message";
import Order from "./_component/Order";
import Price from "./_component/Price";
import ProductCard from "./_component/ProductCard";
import RatingCard from "./_component/RatingCard";
import Tabs from "./_component/Tabs";
import ThemeSwitcher from "./_component/ThemeSwitcher";
import Wrapper from "./_component/Wrapper";

export default function Home() {
  return (
    <Container>
      <ThemeSwitcher />
      <Wrapper>
        <Input />
        <Wrapper>
          <RatingCard score={91} />
        </Wrapper>
      </Wrapper>

      <Wrapper>
        <ProductCard />

        <Wrapper>
          <Chat />
        </Wrapper>

        <Wrapper>
          <Chart />
        </Wrapper>
      </Wrapper>
      <Wrapper>
        <Tabs />
      </Wrapper>

      <Wrapper>
        <Order />
        <Wrapper>
          <Price />
        </Wrapper>
        <Wrapper>
          <Message />
        </Wrapper>
      </Wrapper>
    </Container>
  );
}
