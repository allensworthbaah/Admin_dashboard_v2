import React from "react"
import ClaimsByPayerChart from "./ClaimsByPayer.jsx"
import "./Claims.css"

const Claims = ()=> {
    return(
        <div className="Claims">
            <ClaimsByPayerChart/>
            <div>Claims are here</div>
        </div>
    )
}

export default Claims

