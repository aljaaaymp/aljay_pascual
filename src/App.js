import "./App.css";
import { Button } from "@material-tailwind/react";
import { TypeAnimation } from "react-type-animation";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineBook,
  AiOutlineArrowDown,
  AiOutlineBars,
} from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import ProgressBar from "@ramonak/react-progress-bar";
import { useState } from "react";

function App() {

  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <>
        <>
          <div id="#">
            <nav className="  flex flex-wrap justify-center  h-auto w-auto md:w-screen fixed  border-b px-0 border-white border-opacity-20 backdrop-blur md:px-44  ">
              <div className="container  flex flex-wrap items-center justify-between py-4 w-screen ">
                <div className="w-full relative flex justify-between md:w-auto md:static md:block md:justify-start">
                  <h1 className="pt-3 text-3xl md:text-5xl text-green-400 font-black ">
                    PASCUAL.
                  </h1>
                  <button
                    className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                    type="button"
                    onClick={() => setNavbarOpen(!navbarOpen)}
                  >
                    <i className="fas fa-bars">
                      <AiOutlineBars />
                    </i>
                  </button>
                </div>
                <div
                  className={
                    "md:flex flex-grow flex-col md:flex-row items-start md:items-end justify-end  pr-8 md:pr-0" +
                    (navbarOpen ? " flex" : " hidden")
                  }
                  id="example-navbar-danger"
                >
                  <div/>

                  <div className=" relative flex flex-grow-2 flex-col md:flex-row justify-center align-middle pt-6 gap-7">
                    <h1 className="text-l  text-white font-bold ">
                      <a href="#">01. HOME</a>
                    </h1>
                    <h1 className="text-l  text-white font-bold">
                      <a href="#aboutMe">02. ABOUT</a>
                    </h1>
                    <h1 className="text-l  text-white font-bold ">
                      <a href="#mySkills">03. SKILLS </a>
                    </h1>

                    <h1 className="text-l  text-white font-bold ">
                      <a href="#myResume">04. RESUME</a>
                    </h1>
                  </div>
                  {/* <div className=" flex items-center justify-center my-20 mx-10 rounded bg-green-400 md:mb-4 md:mt-4">
                    <Button>
                      <span className=" text-black hover:bg-white px-5 py-3">
                        {" "}
                        HIRE ME{" "}
                      </span>
                    </Button>
                  </div> */}
                </div>
              </div>
            </nav>
          </div>
          <div className="bodyContainer">
            <div className="w-full h-screen  bg-gray-800   flex justify-between items-center pt-40 px-40 flex-col md:h-screen border-b  border-white border-opacity-20">
              <div className="flex flex-col justify-center items-center">
                <div className=" w-40 h-40 rounded-full border-b border-4 border-green-400  bg-white mt-0 md:mt-20" />
                <span className="text-white text-2xl md:text-4xl flex flex-col md:flex-row gap-2 font-black">
                  Hi, I am{" "}
                  <TypeAnimation
                    sequence={[
                      " Aljay M. Pascual",
                      1000,
                      " Software Engineer",
                      1000,
                    ]}
                    wrapper="h2"
                    repeat={Infinity}
                    style={{ color: "#00FA9A" }}
                  />
                </span>
                <span className="text-white opacity-80 text-start md:text-center mt-2  text-sm md:text-lg ">
                  {" "}
                  Seeking a position as a Full Stack Developer where I can
                  utilize my skills and experience in developing web-based
                  software.
                </span>
                <div className="flex flex-row mt-1 md:mt-10 gap-4 ">
                  <AiFillFacebook
                    size={42}
                    style={{
                      border: "1px solid",
                      color: "white",
                      opacity: "0.5",
                    }}
                  />
                  <AiFillLinkedin
                    size={42}
                    style={{
                      border: "1px solid",
                      color: "white",
                      opacity: "0.5",
                    }}
                  />
                  <AiFillGithub
                    size={42}
                    style={{
                      border: "1px solid",
                      color: "white",
                      opacity: "0.5",
                    }}
                  />
                </div>
              </div>
              <div className="mb-20">
                <a href="#aboutMe">
                  <button className="md:mt-24 mt-2 text-white opacity-80 flex flex-row gap-1 text-xs animate-bounce">
                    <AiOutlineArrowDown className="mt-1" /> SCROLL DOWN
                  </button>
                </a>
              </div>
            </div>
          </div>
        </>
        <div id="aboutMe">
          <div className="w-full bg-gray-800 py-20 flex justify-start items-center flex-col border-b  border-white border-opacity-20 ">
            <div className="flex flex-col justify-center align-middle ">
              <span className="text-white font-black text-4xl ">ABOUT ME</span>
              <span className="relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-white bg-opacity-20 ml-8 mt-8 ">
                <span class="absolute left-0 top-0 inline-block h-full w-1.5 animate-lefttoright rounded-full bg-green-400" />
              </span>
            </div>
            <div className="flex flex-row justify-center align-middle -mt-24">
              <span className="opacity-5 text-white flex font-black text-8xl md:text-9xl w-screen md:w-auto justify-center ">
                ABOUT
              </span>
            </div>
            <div className=" justify-start gap-6 mt-10 flex flex-col md:flex-row">
              <div className="h-96 w-96  bg-white flex "></div>

              <div className="h-96 w-auto text-white">
                <div className="flex flex-col gap-2 mt-10">
                  <div className="flex flex-row gap-3 items-center font-bold text-2xl">
                    <span>Hi, I am </span>
                    <span className="text-green-300">Aljay Pascual</span>
                  </div>{" "}
                  <div className="flex flex-row gap-3 items-center">
                    <span className="h-2 w-2 bg-green-300 rounded-full" />
                    <span className="inline-block min-w-[120px] font-medium">
                      First Name{" "}
                    </span>
                    <span className="opacity-80"> : Aljay</span>
                  </div>
                  <div className="flex flex-row gap-3 items-center">
                    <span class="h-2 w-2 bg-green-300 rounded-full" />
                    <span className="inline-block min-w-[120px] font-medium">
                      Last Name{" "}
                    </span>
                    <span className="opacity-80">: Pascual</span>
                  </div>{" "}
                  <div className="flex flex-row gap-3 items-center">
                    <span class="h-2 w-2 bg-green-300 rounded-full" />
                    <span className="inline-block min-w-[120px] font-medium">
                      Age{" "}
                    </span>
                    <span className="opacity-80"> : 24 years</span>
                  </div>{" "}
                  <div className="flex flex-row gap-3 items-center">
                    <span class="h-2 w-2 bg-green-300 rounded-full" />
                    <span className="inline-block min-w-[120px] font-medium">
                      Nationality{" "}
                    </span>
                    <span className="opacity-80"> : Filipino</span>
                  </div>{" "}
                  <div className="flex flex-row gap-3 items-center">
                    <span class="h-2 w-2 bg-green-300 rounded-full" />
                    <span className="inline-block min-w-[120px] font-medium">
                      Languages{" "}
                    </span>
                    <span className="opacity-80">: English</span>
                  </div>{" "}
                  <div className="flex flex-row gap-3 items-center">
                    <span class="h-2 w-2 bg-green-300 rounded-full" />
                    <span className="inline-block min-w-[120px] font-medium">
                      Address{" "}
                    </span>
                    <span className="opacity-80">
                      {" "}
                      : Bacoor City, Cavite Philippines
                    </span>
                  </div>{" "}
                  <div className="flex flex-row gap-3 items-center">
                    <span class="h-2 w-2 bg-green-300 rounded-full" />
                    <span className="inline-block min-w-[120px] font-medium">
                      Freelance{" "}
                    </span>
                    <span className="opacity-80">: Available</span>
                  </div>{" "}
                  <div className="mt-4">
                    <button className="text-black bg-green-300 px-8 py-4 rounded-md text-xs font-semibold ">
                      DOWNLOAD RESUME
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

      <div id="mySkills">
        <div className="w-full   bg-gray-800  flex justify-start items-center flex-col   md:h-screen border-b  border-white border-opacity-20 py-20">
          <div className="flex flex-col justify-center align-middle ">
            <span className="text-white font-black text-4xl ">MY SKILLS</span>
            <span className="relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-white bg-opacity-20 ml-8 mt-8 ">
              <span class="absolute left-0 top-0 inline-block h-full w-1.5 animate-lefttoright rounded-full bg-green-400" />
            </span>
          </div>
          <div className="flex flex-row justify-center align-middle -mt-24">
            <span className="opacity-5 text-white flex font-black text-9xl w-screen md:w-auto justify-center">
              SKILLS
            </span>
          </div>
          <div className="flex flex-col justify-start align-middle gap-5 mt-10">
            <div className="justify-center items-center gap-5 flex flex-col md:flex-row">
              <div className="h-60 w-60 bg-white bg-opacity-5 ">
                <div className="flex flex-col justify-center items-center pt-5  ">
                  <CircularProgressbar
                    value={60}
                    text={`${60}%`}
                    className="px-10 pb-2"
                    styles={buildStyles({
                      pathColor: "#00FA9A",
                      trailColor: "#808080",
                      textColor: "white",
                    })}
                  />
                  <text className="text-white font-bold text-lg">
                    {" "}
                    Back-end Development{" "}
                  </text>
                </div>
              </div>
              <div className="flex  justify-center items-center">
                <div className="h-60 w-60 bg-white bg-opacity-5 ">
                  <div className="flex flex-col justify-center items-center pt-5  ">
                    <CircularProgressbar
                      value={65}
                      text={`${65}%`}
                      className="px-10 pb-2"
                      styles={buildStyles({
                        pathColor: "#00FA9A",
                        trailColor: "#808080",
                        textColor: "white",
                      })}
                    />
                    <text className="text-white font-bold text-lg">
                      {" "}
                      Front-end Development{" "}
                    </text>
                  </div>
                </div>
              </div>
              <div className="flex  justify-center items-center">
                <div className="h-60 w-60 bg-white bg-opacity-5 ">
                  <div className="flex flex-col justify-center items-center pt-5  ">
                    <CircularProgressbar
                      value={68}
                      text={`${68}%`}
                      className="px-10 pb-2"
                      styles={buildStyles({
                        pathColor: "#00FA9A",
                        trailColor: "#808080",
                        textColor: "white",
                      })}
                    />
                    <text className="text-white font-bold text-lg">
                      {" "}
                      Network Configuration{" "}
                    </text>
                  </div>
                </div>
              </div>
              <div className="flex  justify-center items-center">
                <div className="h-60 w-60 bg-white bg-opacity-5 ">
                  <div className="flex flex-col justify-center items-center pt-5  ">
                    <CircularProgressbar
                      value={55}
                      text={`${55}%`}
                      className="px-10 pb-2"
                      styles={buildStyles({
                        pathColor: "#00FA9A",
                        trailColor: "#808080",
                        textColor: "white",
                      })}
                    />
                    <text className="text-white font-bold text-lg">
                      {" "}
                      Other Skills{" "}
                    </text>
                  </div>
                </div>
              </div>
            </div>
            <div class=" gap-4 py-4 px-4 grid grid-cols-1 md:grid-cols-2">
              <div className="flex flex-col justify-start">
                <span className="text-white font-semibold text-lg">
                  {" "}
                  Java -{" "}
                  <span className="text-green-300 h-4 w-full"> (60%)</span>
                </span>
                <ProgressBar
                  completed="60"
                  bgColor="#00FA9A"
                  className="pt-3 h-4 w-full"
                  labelColor="black"
                  animateOnRender
                />
              </div>
              <div className="flex flex-col justify-start">
                <span className="text-white font-semibold text-lg">
                  {" "}
                  Javascript -{" "}
                  <span className="text-green-300 h-4 w-full"> (65%)</span>
                </span>
                <ProgressBar
                  completed="65"
                  bgColor="#00FA9A"
                  className="pt-3 h-4 w-full"
                  labelColor="black"
                  animateOnRender
                />
              </div>
              <div className="flex flex-col justify-start pt-5">
                {" "}
                <span className="text-white font-semibold text-lg ">
                  {" "}
                  Spring Boot -{" "}
                  <span className="text-green-300 h-4 w-full"> (55%)</span>
                </span>
                <ProgressBar
                  completed="55"
                  bgColor="#00FA9A"
                  className="pt-3 h-4 w-full"
                  labelColor="black"
                  animateOnRender
                />
              </div>
              <div className="flex flex-col justify-start pt-5">
                <span className="text-white font-semibold text-lg">
                  {" "}
                  HTML & CSS -{" "}
                  <span className="text-green-300 h-4 w-full"> (65%)</span>
                </span>
                <ProgressBar
                  completed="65"
                  bgColor="#00FA9A"
                  className="pt-3 h-4 w-full"
                  labelColor="black"
                  animateOnRender
                />
              </div>
              <div className="flex flex-col justify-start pt-5">
                <span className="text-white font-semibold text-lg">
                  {" "}
                  MySQL -{" "}
                  <span className="text-green-300 h-4 w-full"> (65%)</span>
                </span>
                <ProgressBar
                  completed="65"
                  bgColor="#00FA9A"
                  className="pt-3 h-4 w-full"
                  labelColor="black"
                  animateOnRender
                />
              </div>
              <div className="flex flex-col justify-start pt-5 ">
                {" "}
                <span className="text-white font-semibold text-lg">
                  {" "}
                  CISCO -{" "}
                  <span className="text-green-300 h-4 w-full"> (60%)</span>
                </span>
                <ProgressBar
                  completed="60"
                  bgColor="#00FA9A"
                  className="pt-3 h-4 w-full"
                  labelColor="black"
                  animateOnRender
                />
              </div>
            </div>
          </div>
        </div>

        <div id="myResume">
          <div className="w-full   bg-gray-800  flex justify-start items-center flex-col   md:h-screen border-b  border-white border-opacity-20 py-20">
            <div className="flex flex-col justify-center align-middle ">
              <span className="text-white font-black text-4xl ">MY RESUME</span>
              <span className="relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-white bg-opacity-20 ml-8 mt-8 ">
                <span class="absolute left-0 top-0 inline-block h-full w-1.5 animate-lefttoright rounded-full bg-green-400" />
              </span>
            </div>
            <div className="flex flex-row justify-center align-middle -mt-24">
              <span className="opacity-5 text-white flex font-black text-8xl md:text-9xl w-screen md:w-auto justify-center">
                RESUME
              </span>
            </div>

            <div className="w-full gap-4 py-4 px-10 grid grid-cols-1 md:grid-cols-2 md:px-52 ">
              <div className="flex flex-col justify-start items-start pl-0 md:items-end md:pl-20">
                <span className="text-white font-semibold text-2xl flex flex-row  gap-2">
                  {" "}
                  <AiOutlineBook size={28} style={{ color: "#00FA9A" }} />
                  Educational Qualification
                </span>
                <div className="flex flex-row justify-center align-middle gap-5 pt-5">
                  <div className="timeline-right relative border-r-0 border-b-0 md:border-b-4 border-white border-opacity-20 pl-8 flex flex-col md:border-r-4">
                    <span className="text-green-300 font-semibold text-lg">
                      {" "}
                      High School
                    </span>
                    <span className="text-white font-semibold">
                      {" "}
                      Eastern Bacoor Naitonal High School{" "}
                    </span>
                    <span className="text-white text-opacity-50">
                      {" "}
                      2010-2014
                    </span>
                    <span className="py-2 pr-2 text-white text-opacity-50 ">
                      {" "}
                      Blk 27 Lot 17 Queen's Ave, Queen Row, Bacoor, 4102 Cavite
                    </span>
                  </div>
                </div>

                <div className="flex flex-row justify-center align-middle gap-5 ">
                  <div className="timeline-right relative border-r-0 border-b-0 md:border-b-4 border-white border-opacity-20 pl-8 flex flex-col md:border-r-4">
                    <span className="text-green-300 font-semibold text-lg">
                      {" "}
                      College
                    </span>
                    <span className="text-white font-semibold pr-28 mr-2">
                      {" "}
                      Technological University of the Philippines
                    </span>
                    <span className="text-white text-opacity-50">
                      {" "}
                      2014-2017
                    </span>
                    <span className="py-2 pr-2 text-white text-opacity-50 mr-20 ">
                      {" "}
                      Computer Engineering Technology <br />
                    </span>
                  </div>
                </div>
                <div className="flex flex-row justify-center align-middle gap-5">
                  <div className="timeline-right relative border-r-0 border-b-0 md:border-b-4 border-white border-opacity-20 pl-8 flex flex-col md:border-r-4">
                    <span className="text-green-300 font-semibold text-lg">
                      {" "}
                      College
                    </span>
                    <span className="text-white font-semibold pr-28 mr-2">
                      {" "}
                      Technological University of the Philippines
                    </span>
                    <span className="text-white text-opacity-50">
                      {" "}
                      2018-2019
                    </span>
                    <span className="py-2 pr-2 text-white text-opacity-50 mr-20 ">
                      {" "}
                      BTTE - Computer Engineering Technology <br />
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start pl-0 md:pl-20 ">
                <span className="text-white font-semibold text-2xl flex flex-row  gap-2">
                  {" "}
                  <MdWorkOutline size={28} style={{ color: "#00FA9A" }} />
                  Work Experience
                </span>
                <div className="flex flex-row justify-start align-middle gap-5 pt-5 ">
                  <div className="timeline-right relative border-r-0 border-b-0 md:border-b-4 border-white border-opacity-20 pl-8 flex flex-col md:border-r-4">
                    <span className="text-green-300 font-semibold text-lg   ">
                      Customer Service Representative
                    </span>
                    <span className="text-white font-semibold">
                      SYKES Enterprises, Inc.
                    </span>
                    <span className="text-white text-opacity-50">
                      04/2019 - 10/2019
                    </span>
                    <span className="py-2 pr-60  text-white text-opacity-50  ">
                      Alabang, Muntinlupa
                    </span>
                  </div>
                </div>

                <div className="flex flex-row justify-center align-middle gap-5 ">
                  <div className="timeline-right relative border-r-0 border-b-0 md:border-b-4 border-white border-opacity-20 pl-8 flex flex-col md:border-r-4">
                    <span className="text-green-300 font-semibold text-lg ">
                      {" "}
                      IT Specialist
                    </span>
                    <span className="text-white font-semibold">
                      {" "}
                      Assurant BPO Solutions, Inc.
                    </span>
                    <span className="text-white text-opacity-50">
                      {" "}
                      02/2020 - 05/2022
                    </span>
                    <span className="py-2 pr-64 mr-5  text-white text-opacity-50  ">
                      {" "}
                      MOA Pasay City
                    </span>
                  </div>
                </div>
                <div className="flex flex-row justify-center align-middle gap-5">
                  <div className="timeline-right relative border-r-0 border-b-0 md:border-b-4 border-white border-opacity-20 pl-8 flex flex-col md:border-r-4">
                    <span className="text-green-300 font-semibold text-lg  ">
                      {" "}
                      Junior Java Developer
                    </span>
                    <span className="text-white font-semibold">
                      {" "}
                      Norima Techonologies, Inc.
                    </span>
                    <span className="text-white text-opacity-50">
                      {" "}
                      05/2022 - Present
                    </span>
                    <span className="py-2 pr-56 mr-8 text-white text-opacity-50  ">
                      {" "}
                      Dasmariñas, Cavite
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
