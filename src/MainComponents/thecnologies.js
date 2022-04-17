import React, { useEffect, useState } from "react";
import {technologyData} from './link_list';

export const Thechnologies = () => {
    const [index, setIndex] = useState(0);
    const [teckData, setTechData] = useState(technologyData);
    const [isAnimate, setIsAnimate] = useState(false);
    let {bagin_title, title, para, img_1, img_2} = technologyData[index];

    useEffect(() => {
        setTimeout(() => {
            setIsAnimate(true);
        }, 10);
        console.log(isAnimate)
    }, [teckData]);

    const changeDisplay = (ind) => {
        const newTechData = technologyData.filter((e) => {
            return e.id === ind
        })
        setIndex(ind);
        setTechData(newTechData);

        setIsAnimate(false);
        
    };

    return (
        <>
        <section className="technecal">
            <div className="container">
                <div className="section-title">
					<span>03</span> SPACE LAUNCH 101
				</div>
            </div>
                <div className="tecnoogy-content">
                    <div className={`img-viewer ${isAnimate ? 'toTop' : ''}`} 
                    style={{backgroundImage: `url(${img_2})`}}>

                    </div>
                    <div className="container">
                        <div className={`switchers ${isAnimate ? 'toShow' : ''}`}>
                            {technologyData.map((e, i) => {
                                return <span key={i} className={`${index === i ? 'active' : ''}`} onClick={() => {changeDisplay(i)}}>{i+1}</span>
                            })}
                        </div>
                        <div className="technology-info">
                            <span className={`begin-title ${isAnimate ? 'toRight' : ''}`}>{bagin_title}</span>
                            <h4 className={`header-4 ${isAnimate ? 'toLeft' : ''}`}>{title}</h4>
                            <p className={`para ${isAnimate ? 'toTop' : ''}`}>{para}</p>
                        </div>
                        <div className="technology-img">
                            <img className={`${isAnimate ? 'toRight' : ''}`} src={img_1} alt={title} />
                        </div>
                    </div>
                </div>
        </section>
        </>
    );
};