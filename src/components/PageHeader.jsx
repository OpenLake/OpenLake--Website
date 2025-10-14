import React from "react";
import Xarrow from "react-xarrows";
import { HeaderDot } from "../components";

const PageHeader = ({ mainTitle = "Resources", subTitle }) => {
  const box1Ref = React.useRef(null);
  const box2Ref = React.useRef(null);

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex flex-row gap-2 md:gap-10">
          <Xarrow
            start={box2Ref}
            end={box1Ref}
            color="#2B86AE"
            strokeWidth={2}
            headSize={15}
            tailSize={15}
            showHead={false}
            startAnchor="bottom"
            endAnchor="left"
            path="smooth"
            edge={5}
          />
          <div className="HeaderDot" ref={box2Ref}>
            <HeaderDot />
          </div>
          <h1 className="relative text-white text-3xl md:text-5xl font-bold leading-tight">
            {mainTitle}
          </h1>
        </div>
      {subTitle && (
        <div className="relative flex flex-col md:flex-row sm:ml-2 md:ml-32 gap-10 py-6 px-4 md:px-8 items-start w-full md:w-2/3">
          <h1
            ref={box1Ref}
            className="font-bold text-2xl md:text-4xl text-white leading-tight"
          >
            {subTitle}
          </h1>
        </div>
      )}
    </div>
  );
};

export default PageHeader;
