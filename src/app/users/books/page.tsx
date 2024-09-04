import React from "react";
import { Book } from "@/app/_assets/book";

const Books = () => {
  return (
    <div className="border rounded-md shadow-md w-[760px] p-[32px]">
      <h2>Китобларим</h2>
      <div className="flex items-center gap-5 mt-5">
        <Book />
        <div className="w-[400px]">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            excepturi iusto quia cupiditate voluptates aperiam sed praesentium
            quisquam quibusdam ipsa, debitis quam beatae non aut eaque dicta
            earum, sapiente aspernatur?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Books;
