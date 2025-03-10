import React from "react";

const Contact = () => {
  return (
    <div className="md:w-4/5 mx-auto flex md:flex-row flex-col md:gap-10 gap-5 items-center my-10 border border-dashed rounded-md p-2">
      <div className="aspect-square md:size-3/5 size-full bg-gradient-to-br from-fuchsia-300 via-pink-400 to-purple-500 animate-gradient bg-300% rounded-md shadow-md"></div>
      <div className="size-full flex flex-col items-center mx-auto">
        <form action="" method="post" className="space-y-3 md:px-2 rounded-md w-full">
          <div className="flex flex-col items-start">
            <label htmlFor="">
              Name
            </label>
            <input type="text" className="w-full p-2 border outline-none rounded" placeholder="John doe" />
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="">
              Email
            </label>
            <input type="text" className="w-full p-2 border outline-none rounded" placeholder="John doe" />
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="">
              Message
            </label>
            <textarea name="" id="" className="w-full border rounded-md p-2 resize-none" placeholder="Type in your message"></textarea>
          </div>
          <button type="submit" className="bg-black text-white p-2 w-full rounded-md">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
