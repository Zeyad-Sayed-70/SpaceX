import React, { useEffect, useState } from "react";
import classNames from 'classnames';
import { crewData } from "./link_list";


export const Crew = () => {
    const [index, setIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [isAnimate, setIsAnimate] = useState(false);
    const [crewDataList, setCrewDataList] = useState([]);
    const {job, title, paragpaph, img} = crewDataList;

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            setIsAnimate(true);
        }, 500);
    }, [loading]);

    useEffect(() => {
        setCrewDataList(crewData[index]);
        setLoading(true);
    }, [index]);

    const handlerClick = (ind) => {
        setIndex(ind);
        setIsAnimate(!isAnimate);
    };
    
    return (
        <>
        {loading && <h1 className="loading"><div className="spiner"></div></h1>}
        <section className="crew">
            <div className="container">
                <div className="title"><span>02</span>MEET YOUR CREW</div>
                <div className="crew-content">
                    <div className="crew-info">
                        <span className={`${isAnimate ? 'toRight' : '' }`}>{job}</span>
                        <h4 className={`header-4 ${isAnimate ? 'toLeft' : '' }`}>{title}</h4>
                        <p className={` para ${isAnimate ? 'toTop' : '' }`}>{paragpaph}</p>
                        <div className={` penirations ${isAnimate ? 'toShow' : '' }`}>
                            {crewData.map((e, i) => {
                                return <span key={i} className={`${index === i ? 'active' : ''}`} onClick={() => {handlerClick(i)}}></span>
                            })}
                        </div>
                    </div>
                    <div className={`crew-img ${isAnimate ? 'toTop' : '' }`}><img src={img} alt="img" /></div>
                </div>
            </div>
        </section>
        </>
    );
};