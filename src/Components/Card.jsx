import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";
function Card({ data, reference }) {
  return (
    <>
      <motion.div
        drag
        dragConstraints={reference}
        whileDrag={{ scale: 1.2 }}
        dragElastic={0.2}
        className="relative w-60 h-72 flex-shrink-0 rounded-[45px] f bg-sky-900/20 text-white px-8 py-10 overflow-hidden "
      >
        <FaRegFileAlt />
        <p className="mt-5 font-semibold leading-tight">{data.dec}</p>
        <div className="footer absolute left-0 w-full h-20  bottom-0">
          <div className="flex justify-between items-center py-3 px-8 mb-2">
            <h5>{data.filesize}</h5>
            <span className="w-5 h-5 rounded-full flex items-center justify-center bg-zinc-200">
              {data.close ? (
                <IoIosClose />
              ) : (
                <LuDownload size=".7em" color="#000 " />
              )}
            </span>
          </div>
          {data.tag.isopen && (
            <div
              className={`tag w-full py-0.50rem flex items-center justify-center ${
                data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
              }`}
            >
              <h3 className="text-md">{data.tag.tagTitle}</h3>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}

export default Card;
