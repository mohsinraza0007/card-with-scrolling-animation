import React, { useRef, useState } from "react";
import Card from "./Card";

function Foreground() {
  const ref = useRef(null);
  const data = [
    {
      dec: "This is the backgound color of Recat js Frontend develeper",
      filesize: ".9mb",
      close: false,
      tag: { isopen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      dec: "This is the backgound color of the Card that will be displayed",
      filesize: ".9mb",
      close: false,
      tag: { isopen: true, tagTitle: "Upload", tagColor: "blue" },
    },
    {
      dec: "This is the backgound color of Recat js Frontend develeper",
      filesize: ".9mb",
      close: false,
      tag: { isopen: false, tagTitle: "Download", tagColor: "green" },
    },
  ];
  return (
    <>
      <div
        ref={ref}
        className="fixed top-0 left-0 w-full h-full z-[3] flex flex-wrap p-5 gap-10"
      >
        {data.map((item, index) => (
          <Card key={index} data={item} reference={ref} />
        ))}
      </div>
    </>
  );
}

export default Foreground;
