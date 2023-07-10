import React, {useRef} from "react";
import Xarrow from "react-xarrows";

const boxStyle = {border: "grey solid 2px", borderRadius: "10px", padding: "5px"};

function Blogs() {
    const box1Ref = useRef(null);
    return (
        <div>
            <div ref={box1Ref} style={boxStyle}>hey</div>
            <p id="elem2" className="mt-10" style={boxStyle}>hey2</p>
            <Xarrow
                start={box1Ref} //can be react ref
                end="elem2" //or an id
            />
        </div>
    );
}

export default Blogs;