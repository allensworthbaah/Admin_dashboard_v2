import React, { useState } from 'react';
import { AnimateSharedLayout } from 'framer-motion';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { UilTimes } from '@iconscout/react-unicons';
import './Card.css';

const Card = (props) => {

        const [ expanded, setExpanded ] = useState(false);
    return (
       <AnimateSharedLayout>
            {expanded ? (
                <ExpandedCard param={props} setExpanded={()=>setExpanded(false)}/>
            ) : (
                <CompactCard param={props} setExpanded={()=>setExpanded(true)}/>
            )}
       </AnimateSharedLayout>
    )
 };

 function CompactCard({param, setExpanded}) {
    const Png = param.png;
    return (
        <div className="CompactCard" style={{
            background: param.color.backGround,
            boxShadow: param.color.boxShadow
        }}
        onClick={setExpanded}
        >
            <div className="radialBar">
                <CircularProgressbar 
                    value={param.barValue} 
                    text={`${param.barValue}%`} 
                />
                <span>{param.title}</span>
            </div>
            <div className="detail">
                <Png />
                <span>${param.value}</span>
                <span>Last 24 hours</span>
            </div>
        </div>
    );
 }

 function ExpandedCard({param, setExpanded}) {
    const Png = param.png;
    return (
        <div className="ExpandedCard" 
            style={{
                background: param.color.backGround,
                boxShadow: param.color.boxShadow
            }}
        >
            <UilTimes className="closeButton" onClick={setExpanded} />
            <span>{param.title}</span>
            <div className="chartContainer">
                <Png />
                <span>Last 24 hours</span>
            </div>
        </div>
    );
 }  

export default Card;    