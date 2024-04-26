import React,  from "react";
import { motion } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Project1",
    description: "lorem hdch d dhvchd jdvcdshc dc dhdvsdh dhs jsdhvh hgcihas dhcvsdc sdhcvsdc hsdvdshc hbvsdh bj",
    technologies: "NEXT.JS, HTML, CSS AND REACT",
  },
  {
    id: 2,
    title: "Project2",
    description:
      "lorem hdch d dhvchd jdvcdshc dc dhdvsdh dhs jsdhvh hgcihas dhcvsdc sdhcvsdc hsdvdshc hbvsdh bj",
    technologies: "NEXT.JS, HTML, CSS AND REACT",
  },
  {
    id: 3,
    title: "Project311",
    description: "lorem hdch d dhvchd jdvcdshc dc dhdvsdh dhs jsdhvh hgcihas dhcvsdc sdhcvsdc hsdvdshc hbvsdh bj",
    technologies: "NEXT.JS, HTML, CSS AND REACT",
  },
  {
    id: 4,
    title: "Project4",
    description: "lorem hdch d dhvchd jdvcdshc dc dhdvsdh dhs jsdhvh",
    technologies: "NEXT.JS, HTML, CSS AND REACT",
  },
];

export default function Portfolio() {
  return (
    <div className="relative bg-bgs grid gap-8 lg:p-20 p-5 lg:grid-cols-2 lg:h-screen bg-gradient-to-b from-bgs to to-bgs1">
      {items.map((item) => (
        <SingleChild item={item} key={item.id} />
      ))}
    </div>
  );
}

function SingleChild({ item }) {
  return (
    <motion.div
      className="flex justify-center items-center overflow-hidden w-full h-full dark:bg-gradient-to-b dark:from-white bg-bgs1 dark:to-gray-300 py-9 px-3"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className=" max-w-[1366px] h-[100%] lg:justify-center flex flex-col lg:flex-row  lg:px-10  lg:gap-[10px] gap-[10px] lg:m-auto items-center">
        <motion.div className=" flex flex-col lg:gap-[15px] gap-[15px] lg:text-left text-center">
          <p className="lg:text-[42px] text-[30px] text-gray-100">
            <code>{item.title}</code>
          </p>
          <p className="text-gray-300 tracking-[0.5rem]">{item.technologies}</p>
          <p className=" text-gray-500 dark:text-bgs text-[20px]">
            <code>{item.description}</code>
          </p>
          <div className="flex flex-row justify-between px-5">
            <button className="lg:self-start self-center flex items-center  lg:py-[20px] py-[10px] hover:text-purple-500 text-gray-300 text-[12px] gap-2 font-bold rounded">
              <svg
                fill="#ffffff"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="25px"
                height="25px"
                viewBox="0 0 442.04 442.04"
                xml:space="preserve"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M221.02,341.304c-49.708,0-103.206-19.44-154.71-56.22C27.808,257.59,4.044,230.351,3.051,229.203 c-4.068-4.697-4.068-11.669,0-16.367c0.993-1.146,24.756-28.387,63.259-55.881c51.505-36.777,105.003-56.219,154.71-56.219 c49.708,0,103.207,19.441,154.71,56.219c38.502,27.494,62.266,54.734,63.259,55.881c4.068,4.697,4.068,11.669,0,16.367 c-0.993,1.146-24.756,28.387-63.259,55.881C324.227,321.863,270.729,341.304,221.02,341.304z M29.638,221.021 c9.61,9.799,27.747,27.03,51.694,44.071c32.83,23.361,83.714,51.212,139.688,51.212s106.859-27.851,139.688-51.212 c23.944-17.038,42.082-34.271,51.694-44.071c-9.609-9.799-27.747-27.03-51.694-44.071 c-32.829-23.362-83.714-51.212-139.688-51.212s-106.858,27.85-139.688,51.212C57.388,193.988,39.25,211.219,29.638,221.021z" />{" "}
                    </g>{" "}
                    <g>
                      {" "}
                      <path d="M221.02,298.521c-42.734,0-77.5-34.767-77.5-77.5c0-42.733,34.766-77.5,77.5-77.5c18.794,0,36.924,6.814,51.048,19.188 c5.193,4.549,5.715,12.446,1.166,17.639c-4.549,5.193-12.447,5.714-17.639,1.166c-9.564-8.379-21.844-12.993-34.576-12.993 c-28.949,0-52.5,23.552-52.5,52.5s23.551,52.5,52.5,52.5c28.95,0,52.5-23.552,52.5-52.5c0-6.903,5.597-12.5,12.5-12.5 s12.5,5.597,12.5,12.5C298.521,263.754,263.754,298.521,221.02,298.521z" />{" "}
                    </g>{" "}
                    <g>
                      {" "}
                      <path d="M221.02,246.021c-13.785,0-25-11.215-25-25s11.215-25,25-25c13.786,0,25,11.215,25,25S234.806,246.021,221.02,246.021z" />{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>{" "}
              Demo
            </button>
            <button className="lg:self-start  flex items-center hover:text-purple-500 lg:py-[20px] py-[10px] text-gray-300 text-[12px] gap-2 font-bold rounded">
              <svg
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Code
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
