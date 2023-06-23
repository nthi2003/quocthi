import {
  FacebookShareButton,
  FacebookShareCount,
  HatenaShareCount,
  FacebookMessengerShareButton,
  PinterestShareCount,
  RedditShareCount,
  TumblrShareCount,
  VKShareCount,



} from "react-share";
import { FacebookIcon, FacebookMessengerIcon } from "react-share";
const Project_card = ({ img, langs, title, disc }) => {
  return (
    <>
      <div className="border mx-auto w-[90%] md:w-[48%] lg:w-[30%] border-[#ABB2BF] p-0">
        {/* img */}
        <div className="">
          <img className=" w-full" src={img} alt="" />
        </div>
        {/* skills */}
        <div className="flex gap-2 flex-wrap p-2 border-y border-[#ABB2BF]">
          {langs.map((e) => {
            return <span className=" text-[#ABB2BF]">{e}</span>;
          })}
        </div>
        {/* disc */}
        <div className=" p-4">
          <h2 className="text-[#FFFFFF] text-2xl font-medium">{title}</h2>
          <p className=" py-4 text-[#ABB2BF]">{disc}</p>
          {/* btns */}
          <div className="flex ">
            <div className="">
              <button className=" py-8 px-4 text-white border border-[#CD1818] hover:bg-[#ce5555] duration-150 w-[100%]">
                <a href="https://nthi2003.github.io/sofa/">  Live {"<"}~{">"}</a>
              </button>


            </div>
            <div>
              <button className=" py-2 px-4 text-white border border-[#CD1818] hover:bg-[#ce5555] duration-150 w-[100%] ">
                <FacebookShareButton url="https://nthi2003.github.io/sofa/"
                  quote={"Hey live start Project Quoc Thi"}
                  hashtag="#QUOCTHI"
                >
                  <div className="flex">
                    <FacebookIcon className=" py-2 px-4" logoFillColor="white" round={true}>

                    </FacebookIcon>
                  
                  </div>
                </  FacebookShareButton>
                < FacebookMessengerShareButton url="https://nthi2003.github.io/sofa/"
                  quote={"Hey live start Project Quoc Thi"}
                  hashtag="#QUOCTHI"
                >
                 <FacebookMessengerIcon className=" py-2 px-4" logoFillColor="white" round={true}></FacebookMessengerIcon>
                </ FacebookMessengerShareButton>
               
              </button>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project_card;
