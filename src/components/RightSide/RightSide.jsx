import React from 'react';
import './RightSide.css';
import Updates from '../Updates/Updates';
import Claims from '../Claims/Claims';
import ClaimsByPayerChart from '../Claims/ClaimsByPayer';

// import { SidebarData } from '../../Data/Data';
// import { UilSignOutAlt } from '../../Data/Data';

const RightSide = () => {
    return (
        <div className="RightSide">
            <div>
                <h3>Community Health Care Workers</h3>
                <Updates />
            </div>
            <div>
                <h3>Billing Claims</h3>
                <ClaimsByPayerChart /> 
            </div>
        </div>
    )
};

export default RightSide;