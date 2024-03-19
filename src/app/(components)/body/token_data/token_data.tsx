import React from "react";
import Image from "next/image";

const Token_Data: React.FC = () => {
    return (
        <>
            <div className=" flex flex-col w-full items-center mt-[4em]">
                <h2 className=" text-[2em] font-black">Token</h2>

                <div className=" mobil | flex-col mt-[5em]">
                    <div className="mx-[1em]">
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
                        <div className="grid grid-cols-2 mb-[0.2em]" style={{ gridTemplateColumns: '80% 20%' }}>
                            <p className="font-light mb-[0.4em] text-left">Circulating supply:</p>
                            <p className="font-medium text-right">N/A</p>
                        </div>
                        <div className=" flex flex-col select-none gap-[0.2em] w-full font-semibold ">
                            <button className=" rounded-[9px] border-[2px] border-[#2a2b2a] bg-[#2a2b2a] text-white hover:border-[#484c48] hover:bg-[#484c48]">Buy</button>
                            <button className=" rounded-[9px] border-[2px] border-[#2a2b2a] text-[#2a2b2a] hover:bg-[#E0E4DB]">Sell</button>
                        </div>
                    </div>
                    <div className=" mt-[3.5em] mx-[1em]">
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

                <div className=" pc | mt-[5em] md:text-[1em] md:gap-[0.1em] lg:gap-[4em] xl:gap-[6em] 2xl:gap-[8em]">
                    <div className=" self-end md:mb-[1.5em] lg:mb-[1.5em] xl:mb-[1.5em] 2xl:mb-[1.5em] md:mr-[2em] mr-[3.5em] md:ml-[-6.5em] lg:ml-[-8em] 2xl:ml-0 w-[500px]">
                        <div className=" grid grid-cols-2 mb-[0.2em]" style={{ gridTemplateColumns: '83% 17%' }}>
                            <p className=" font-light text-right">Price: </p>
                            <p className=" font-medium text-right">N/A</p>
                        </div>
                        <div className=" grid grid-cols-2 mb-[0.2em]" style={{ gridTemplateColumns: '83% 17%' }}>
                            <p className=" font-light text-right">Volume:</p>
                            <p className=" font-medium text-right">N/A</p>
                        </div>
                        <div className=" grid grid-cols-2 mb-[0.2em]" style={{ gridTemplateColumns: '83% 17%' }}>
                            <p className=" font-light text-right">Market cap:</p>
                            <p className=" font-medium text-right">N/A</p>
                        </div>
                        <div className="grid grid-cols-2 mb-[0.2em]" style={{ gridTemplateColumns: '83% 17%' }}>
                            <p className="font-light mb-[0.4em] text-right">Circulating supply:</p>
                            <p className="font-medium text-right">N/A</p>
                        </div>
                        <div className=" flex flex-col select-none gap-[0.2em] font-semibold items-end">
                            <button className=" w-[11.6em] rounded-[9px] border-[2px] border-[#2a2b2a] bg-[#2a2b2a] text-white hover:border-[#484c48] hover:bg-[#484c48] ease-in-out duration-[180ms]">Buy</button>
                            <button className=" w-[11.6em] rounded-[9px] border-[2px] border-[#2a2b2a] text-[#2a2b2a] hover:bg-[#E0E4DB] ease-in-out duration-[180ms]">Sell</button>
                        </div>
                    </div>
                    <div>
                        <Image
                        src="/images/chart.svg"
                        width={500}
                        height={500}
                        draggable={false}
                        priority={true}
                        loading="eager"
                        alt="No data chart"
                        className=" select-none "
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
export default Token_Data;
