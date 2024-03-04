import React from "react";
import Image from "next/image";

const Token_Data: React.FC = () => {
    return (
        <>
            <div className=" flex flex-col w-full items-center mt-[4em]">
                <h2 className=" text-[2em] font-black">Token</h2>

                <div className=" mobil | flex-col mt-[5em]">
                    <div>
                        <div className=" grid grid-cols-2 mb-[0.2em]">
                            <p className=" font-light text-left">Price: </p>
                            <p className=" font-medium text-right">N/A</p>
                        </div>
                        <div className=" grid grid-cols-2 mb-[0.2em]">
                            <p className=" font-light text-left">Volume:</p>
                            <p className=" font-medium text-right">N/A</p>
                        </div>
                        <div className=" grid grid-cols-2 mb-[0.2em]">
                            <p className=" font-light text-left">Market cap:</p>
                            <p className=" font-medium text-right">N/A</p>
                        </div>
                        <div className="grid grid-cols-2 mb-[0.2em]" style={{ gridTemplateColumns: '70% 30%' }}>
                            <p className="font-light mb-[0.4em] text-left">Circulating supply:</p>
                            <p className="font-medium text-right">N/A</p>
                        </div>
                        <div className=" flex flex-col select-none gap-[0.2em] w-full font-semibold ">
                            <button className=" rounded-[9px] border-[2px] border-[#2a2b2a] bg-[#2a2b2a] text-white hover:border-[#484c48] hover:bg-[#484c48]">Buy</button>
                            <button className=" rounded-[9px] border-[2px] border-[#2a2b2a] text-[#2a2b2a] hover:bg-[#E0E4DB]">Sell</button>
                        </div>
                    </div>
                    <div className=" mt-[3.5em]">
                        <Image
                        src="/images/chart.svg"
                        width={500}
                        height={500}
                        draggable={false}
                        alt="No data chart"
                        className=" select-none"
                        />
                    </div>
                </div>

                <div className=" pc | mt-[5em] ">
                    <div className=" text-right mt-[4em]">
                            <p className=" font-light mb-[0.4em]">Price: <span className=" font-medium pl-[1.5em]">N/A</span></p>
                            <p className=" font-light mb-[0.4em]">Volume: <span className="font-medium pl-[1.5em]">N/A</span></p>
                            <p className=" font-light mb-[0.4em]">Market cap: <span className="font-medium pl-[1.5em]">N/A</span></p>
                            <p className=" font-light mb-[1em]">Circulating supply: <span className="font-medium pl-[1.5em]">N/A</span></p>
                        <div className=" flex flex-col select-none gap-[0.2em] w-[280px] font-semibold">
                            <button className=" rounded-[9px] border-[2px] border-[#2a2b2a] bg-[#2a2b2a] text-white hover:border-[#484c48] hover:bg-[#484c48]">Buy</button>
                            <button className=" rounded-[9px] border-[2px] border-[#2a2b2a] text-[#2a2b2a] hover:bg-[#E0E4DB]">Sell</button>
                        </div>
                    </div>
                    <div>
                        <Image
                        src="/images/chart.svg"
                        width={500}
                        height={500}
                        draggable={false}
                        alt="No data chart"
                        className=" select-none"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
export default Token_Data;
