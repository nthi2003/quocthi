import "./about.css";

const About = () => {
  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto  pt-20 lg:flex items-center justify-between flex-wrap">
      <div className="flex">
      <div className=" w-10/12 sm:w-8/12 mx-auto">
          <h1 className="font-semibold lg:text-[32px] text-[20px] text-white mb-3">
            THI is a <span className="text-[#CD1818]">web designer</span> and{" "}
            <span className="text-[#CD1818]">front-end developer</span>
          </h1>
          <p className="text-[#ABB2BF] my-6">
            He crafts responsive websites where technologies meet creativity
          </p>
          <button className="text-white font-medium py-2 px-4 border duration-200 border-[#CD1818] hover:bg-[#CD181833]">
            Contact me!!
          </button>
        </div>
        <div className="mx-auto ml-4px ">
          <div className="">
              <img src={require("./imgs/thi.jpg")} alt="" />
          </div>
      
          <div className="border flex items-center gap-2 border-[#ABB2BF] p-2 text-[#ABB2BF]">
            <div className="w-4 h-4 bg-[#CD1818]"></div>
            <div className="">
              Currently working on <span className="text-white">Portfolio</span>
            </div>
          </div>
        </div>
      </div>
      <div className=" px-5 py-10 lg:ml-[2  00px]">
         <div className="border flex items-center gap-2 border-[#ABB2BF] p-2 text-[#ABB2BF] lg:w-[700px] lg:ml-[200px]">
         It doesn’t matter how slowly you go as long as you do not stop
         </div>
         <div className="border flex items-center gap-2 border-[#ABB2BF] p-2 text-[#ABB2BF] w-[100px] sm:ml-[600px] lg:ml-[800px]">
         Confucius
         </div>
      </div>
      </div>
    </>
  );
};

export default About;
