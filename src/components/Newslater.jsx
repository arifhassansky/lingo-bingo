const Newslater = () => {
  return (
    <div className=" border-2 bg-gradient-to-b from-blue-200 via-white to-blue-300 shadow-lg m-2 p-6 rounded-3xl w-8/12 mx-auto mb-20 ">
      <div className="py-10  px-0 md:px-8 lg:px-64 bg-white text-center border rounded-3xl">
        <h2 className="font-bold text-3xl mb-4">Subscribe to our Newsletter</h2>
        <p className="font-medium text-xl text-gray-500">
          Get the latest updates and news right in your inbox!
        </p>
        <div className="flex flex-col md:flex-row justify-center mt-6 gap-1 md:gap-4 m-4">
          <input
            className="px-4 w-full md:w-[450px] py-3 rounded-xl border border-primary"
            type="text"
            placeholder="Enter Your Email"
          />
          <button
            className="py-3 px-2 lg:px-7 rounded-xl bg-gradient-to-r
           from-blue-200 to-blue-500 hover:bg-gradient-to-l font-bold"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newslater;
