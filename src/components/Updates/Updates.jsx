import React from "react";
import { UpdatesData } from "../../Data/Data";
import "./Updates.css";

const Updates = () => {
    return (
        <div className="Updates">
            {UpdatesData.map((update)=>{
                return (
                    <div className="update" key={update.id}>
                        <img className="avatar" src={update.img} alt="CHW" />
                        <div className="noti">
                            <div>
                                <span className="update-name">{update.name}</span>
                                <span className="update-noti"> {update.noti}</span>
                            </div>
                            <span className="update-time">{update.time}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Updates 
