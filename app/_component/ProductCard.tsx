

import Image from 'next/image';
import React from 'react';

const ProductCard: React.FC = () => {
  return (
    <div className="w-full max-w-sm min-w-[200px]  px-2 py-1 rounded-xl shadow-xl bg-base-200" >
    <div className="group my-3 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-base-300 bg-base-100 shadow-md px-2 py-1">
    <div className='mx-3 my-2'>
     <a className="relative mx-2 mt-1 flex h-60 overflow-hidden rounded-xl" href="#">
        <Image
          width={300}
          height={240}
          className="peer absolute top-0 right-0 h-full w-full object-cover"
          src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="product image"
        />
        <Image
          width={300}
          height={240}
          className="peer absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0 peer-hover:right-0"
          src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="product image"
        />
        <div className="absolute bottom-0 mb-4 flex space-x-4 w-full justify-center">
          <div className="rounded-full h-3 w-3 bg-base-200 border-2 border-base-100"></div>
          <div className="rounded-full h-3 w-3 bg-base-200 border-2 border-base-100"></div>
          <div className="rounded-full h-3 w-3 bg-base-200 border-2 border-base-100"></div>
        </div>
        <svg
          className="pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-base-content transition-opacity group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 32 32"
        >
          <path
            fill="currentColor"
            d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z"
          />
        </svg>
        <span className="absolute top-0 left-0 m-2 rounded-full bg-neutral px-2 text-center text-sm font-medium text-neutral-content">
          39% OFF
        </span>
      </a>
      <div className="mt-4 px-5 pb-5">
        <a href="#">
          <h5 className="text-xl tracking-tight text-base-content">Nike Air MX Super 2500 - Red</h5>
        </a>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-base-content">$449</span>
            <span className="text-sm text-base-content/70 line-through">$699</span>
          </p>
        </div>
        <a
          href="#"
          className="flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-center text-sm font-medium text-primary-content hover:bg-primary/80 focus:outline-none focus:ring-4 focus:ring-primary/50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Add to cart
        </a>
      </div>
    </div>
 
   
    </div>
    </div>
  );
};

export default ProductCard;