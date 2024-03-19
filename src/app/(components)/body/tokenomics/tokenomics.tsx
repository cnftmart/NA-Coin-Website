import React, { useEffect, useRef } from "react";
import drawPieChart from "./pie.js";
import "./pie.css"; 

const Tokenomics: React.FC = () => {
    const pieChartRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        if (pieChartRef.current) {
            drawPieChart(pieChartRef.current, [
                { title: "Mom", value: 180, color: "#000000" },
                { title: "San Francisco", value: 60, color: "#CFD3D6" },
                { title: "London", value: 50, color: "#736D79" },
                { title: "New York", value: 30, color: "#776068" },
            ]);
        }
    }, []);

    return (
        <>
            <div className="flex flex-col w-full items-center mt-[10em]">
                <h2 className="text-[2em] font-black">Tokenomics</h2>
                <div className="flex mt-[5em] gap-[10em]">
                    <div className="w-[20em] h-[20em]">
                        <svg ref={pieChartRef} width="100%" height="100%" viewBox="0 0 450 450" />
                    </div>
                    <div className="self-center">
                        <h3 className="font-black text-[1.5em] mt-[1em] md:mt-0">Public sale</h3>
                        <p className="font-light text-[1.125em] mt-[-0.5em]">50%</p>
                        <p className="text-[0.625em] font-extrabold mt-[0.5em] leading-[1.1em] w-[20em]">This portion will be reserved for dexes such as minswap and wingrider.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tokenomics;
