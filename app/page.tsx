"use client"
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
import { useTheme } from "./_component/ThemeContext";
import Wrapper from "./_component/Wrapper";

export default function Home() {

    const { theme, setTheme } = useTheme();


  return (
    <div className="flex ">
       <ResizableSidebar>
        <h1 className="text-center py-12 text-4xl font-extrabold font-mono">Switch-it</h1>
        <div className="flex flex-col min-w-[80%] items-center justify-center space-y-4">
          <button onClick={(e) =>(setTheme('winter'))} className="min-w-[80%] px-4 py-2 border bg-white rounded-2xl shadow-md hover:shadow-2xl hover:bg-gray-200  cursor-pointer font-bold text-black border-gray-300">Winter Theme</button>
          <button onClick={(e) =>(setTheme('synthwave'))}   className="w-[80%] px-4 py-2 border bg-white rounded-2xl shadow-md hover:shadow-2xl hover:bg-gray-200 cursor-pointer font-bold text-black border-gray-300">Synthwave Theme</button>
          <button onClick={(e) =>(setTheme('light'))} className="w-[80%] px-4 py-2 border  bg-white rounded-2xl shadow-md hover:shadow-2xl hover:bg-gray-200 cursor-pointer font-bold text-black border-gray-300">Light Mode</button>
          <button onClick={(e) => setTheme('dark')} className="w-[80%] px-4 py-2 border bg-white rounded-2xl shadow-md hover:shadow-2xl hover:bg-gray-200 cursor-pointer font-bold text-black border-gray-300">Dark Mode</button>
          <button onClick={(e) => setTheme('cyberpunk')} className="w-[80%] px-4 py-2 border bg-white rounded-2xl shadow-md hover:shadow-2xl hover:bg-gray-200 cursor-pointer font-bold text-black border-gray-300">Cyberpunk </button>
        </div>
      </ResizableSidebar>
    
    <div className="w-full">
    <Container >


      <Wrapper>
        <Input />

        <Wrapper>
          <RatingCard score={91} />
        </Wrapper>

         <Wrapper>
        <Tabs />
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
    </div>
  );
}
