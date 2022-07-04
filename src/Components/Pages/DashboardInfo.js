import React from "react";
import "./styles.css"
//import {ArrowUpwardIcon} from "@mui/icons-material/ArrowUpward";

export default function DashboardInfo() {
    return (
        <div className="featured">
            <div className="featuredInfo">
                <span className="featuredTitle"> Hours Studied</span>
                <div className="featuredInfoContainer">
                    <span className="featuredQuantity"> 20 hours </span>
                    <span className="featuredRate"> +20%  </span>
                </div>
                <span className="featuredComp"> Compared to last week</span>
                
            </div>
            <div className="featuredInfo">
                <span className="featuredTitle"> Assignments Left</span>
                <div className="featuredInfoContainer"> 
                    <span className="featuredQuantity"> 5 </span>
                </div>                
            </div>

            <div className="featuredInfo">
                <span className="featuredTitle"> Percent Through Semester</span>
                <div className="featuredInfoContainer">
                    <span className="featuredQuantity"> 66% </span>
                </div>                
            </div>
        </div>
    )
}