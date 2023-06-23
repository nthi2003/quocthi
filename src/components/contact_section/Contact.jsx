const Contact = () => {
  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
        {/* top */}
        <div className="">
          {/* header */}
          <div className=" mb-10">
            <div className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
              <div className="">
                <span className="text-[#CD1818]">#</span>contacts
              </div>
              <div className="line w-1/3 h-px bg-[#CD1818]"></div>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className=" flex items-start flex-wrap gap-10 justify-between">
          {/* left */}
          <div className="left w-full md:w-1/2">
            <p className=" text-[#ABB2BF]">
              I’m interested in freelance opportunities. However, if you have
              other request or question, don’t hesitate to contact me
            </p>
          </div>
          {/* right */}
          <div className=" mx-auto">
            {/* box */}
            <div className="border border-[#ABB2BF] p-4">
              <h2 className=" mb-4 text-white font-semibold">
                Message me here
              </h2>
              {/* get in touch */}
              <div className="">
                {/* links */}
                <div className="flex gap-1 items-center">
                  <img src={require("./imgs/Discord.png")} alt="" />
                  <span className="text-[#ABB2BF]">ThiUM#0999</span>
                </div>
                <div className="flex gap-1 items-center">
                  <img src={require("./imgs/Email.png")} alt="" />
                  <span className="text-[#ABB2BF]">quocthi.dev@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
