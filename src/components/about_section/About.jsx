const AboutSec = () => {
  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
        {/* bottom */}
        <div className=" flex-wrap flex items-center justify-between">
          {/* left */}
          <div className="md:w-[48%] w-full">
            {/* title */}
            <div className=" mb-12">
              <div className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
                <div className="">
                  <span className="text-[#CD1818]">#</span>about-me
                </div>
                <div className="line w-1/3 h-px bg-[CD1818]"></div>
              </div>
            </div>
            {/* disc */}
            <p className="text-[#ABB2BF] ">
              Hello, i’m Thi!
              <br />
              <br />
              I’m a self-taught front-end developer based in DaNang, VietNam . I
              can develop responsive websites from scratch and raise them into
              modern user-friendly web experiences.
              <br />
              <br />
              Transforming my creativity and knowledge into a websites has been
              my passion for over a year. I have been helping various clients to
              establish their presence online. I always strive to learn about
              the newest technologies and frameworks.
            </p>
            {/* button */}
            <div className="mt-7">
              <a
                href="#"
                className=" duration-150 hover:bg-[#c25d5d] border border-[#CD1818] px-4 py-2 text-white "
              >
                <button>Read more -{">"}</button>
              </a>
            </div>
          </div>
          {/* right */}
          <div className=" mx-auto mt-4">
            <img className="mx-auto  sm:mt-[20px]" src={require("./imgs/pc.jpg")} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSec;
