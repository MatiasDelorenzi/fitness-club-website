import "./programs.css";
import React from "react";
import { programsData }  from "../../data/programsData";
import rightArrow from "../../assets/rightArrow.png"

const Program = () => {
  return (
    <div className="programs" id="programs">
        <div className="programs-header">
            <span className="stroke-text">Select the</span>
            <span>program</span>
            <span className="stroke-text">four you</span>
        </div>

        <div className="program-categories">
            {programsData.map((program) =>  (
                <div className="category" key={program.heading}>
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now">
                        <span>Join Now</span>
                        <img src={rightArrow} alt="Join now"/>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Program;
