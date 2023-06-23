import Project_card from "../project_card/Project_card";


const Projects = () => {
  // date
  const projects = [
    {
      img: "https://nthi2003.github.io/Profile/img/sofaStyle.png",
      langs: ["html", "css", "javascript",  "tailwind css"],
      title: "SofaStyle.",
      
    }
  
  ];

  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
        {/* top */}
        <div className=" flex justify-between items-center gap-5">
          {/* left */}
          <div className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
            <div className="">
              <span className="text-[#CD1818]">#</span>projects
            </div>
            <div className="line w-2/3 h-px bg-[#CD1818]"></div>
          </div>
          {/* right */}
          <div className=" text-white font-medium">
            <a href="">
              <span>View all ~~&gt;</span>
            </a>
          </div>
        </div>
        {/* bottom */}
        <div className="flex flex-wrap justify-between gap-4 my-12">
          {/* cards */}
          {projects.map(({ img, langs, title, disc }) => {
            return (
              <>
                <Project_card
                  img={img}
                  langs={langs}
                  title={title}
                  disc={disc}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
