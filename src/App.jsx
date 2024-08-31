
function App() {
  return (
    <>
      <div className=" max-w-[600px] mx-auto rounded-md px-4 md:px-10 py-4 bg-pink-300 mt-16">
        <div className="flex items-center justify-center mt-8">
          <input
            className="border-2 border-gray-500 outline-none p-2 w-96  rounded-md mr-1 "
            type="text"
            placeholder="Enter City Name"
          />
          <button className="bg-gray-500 px-4 py-2 text-white rounded-full">Search</button>
        </div>
        <div className="flex flex-col mt-6 mb-4 items-center justify-center">
          <div className="text-lg font-bold">Place</div>
          <div>date</div>
          <h1 className="text-4xl font-bold"> mist</h1>
          <div>mist</div>
        </div>
        <div className="flex justify-between pb-2 ">
          <div className="flex flex-col">
            <div className="text-sm font-bold">wind speed</div>
            <div className="text-sm font-bold">wind speed</div>
          </div>
          <div className="flex flex-col">
            <div className="text-sm font-bold">Humidity</div>
            <div className="text-sm font-bold">humidity</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
