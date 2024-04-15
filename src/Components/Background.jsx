import React from "react";

function Background() {
  return (
    <>
      <div className="w-full h-full fixed">
        <div className="w-full py-10 font-semibold text-xl flex justify-center">
          Documents.
        </div>
        <h1 className="absolute text-[13vw] leading-none tracking-tighter -translate-x-[50%] font-semibold text-zinc-900 -translate-y-[50%] top-1/2 left-1/2">
          Docs.
        </h1>
      </div>
    </>
  );
}

export default Background;
