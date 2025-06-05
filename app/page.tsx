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
import ResizableSidebar from "./_component/Sidebar";
import Tabs from "./_component/Tabs";
import ThemeSwitcher from "./_component/ThemeSwitcher";
import Wrapper from "./_component/Wrapper";

export default function Home() {
  return (
    <div className="flex">
       <ResizableSidebar>
        <h1 className="text-center py-12 text-4xl font-extrabold">Switch-it</h1>
        <div className="flex flex-col min-w-[80%] items-center justify-center space-y-4">
          <button className="min-w-[80%] px-4 py-2 border rounded-2xl shadow-md hover:shadow-2xl hover:bg-amber-900 cursor-pointer border-gray-300">One</button>
          <button className="w-[80%] px-4 py-2 border rounded-2xl shadow-md hover:shadow-2xl hover:bg-amber-900 cursor-pointer border-gray-300">Two</button>
          <button className="w-[80%] px-4 py-2 border rounded-2xl shadow-md hover:shadow-2xl hover:bg-amber-900 cursor-pointer border-gray-300">Three</button>
          <button className="w-[80%] px-4 py-2 border rounded-2xl shadow-md hover:shadow-2xl hover:bg-amber-900 cursor-pointer border-gray-300">Four</button>
        </div>
      </ResizableSidebar>
    
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
    </div>
  );
}
