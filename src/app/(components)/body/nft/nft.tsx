import React from "react";
import Image from "next/image";
import { SlideCollection } from "./nft_slide_collection";

const NFT: React.FC = () => {
    const [slide, setSlide] = React.useState<number>(0);
    const NextSlide = () => {
      setSlide(slide === SlideCollection.length - 1 ? 0 : slide + 1);
    };
    const PrevSlide = () => {
      setSlide(slide === 0 ? SlideCollection.length - 1 : slide - 1);
    };
    React.useEffect(() => {
      let slider = setInterval(() => NextSlide(), 5000);
      return () => clearInterval(slider);
    }, [slide]);
    return (
        <>
            <div className=" flex flex-col w-full items-center mt-[8em] md:mt-[10em] mb-[5em]">
                <h2 className=" text-[2em] font-black mt-[2em]">OG NFTs</h2>
                <p className=" font-light text-[0.8em] ">Supply: <span className="font-medium pl-[0.4em]">N/A</span></p>
                <div className=" mt-[5em] md:text-[1em] gap-[2em] md:flex lg:flex xl:flex 2xl:flex">
                    <div>
                        {SlideCollection.map((index) => (
                            <div key={index.id} className={`${ index.id === slide ? "duration-300 ease-in" : "opacity-0 duration-300 ease-in"}`}>
                                {index.id === slide && (
                                    <Image
                                    src={index.image}
                                    width={400}
                                    height={400}
                                    draggable={false}
                                    priority={true}
                                    loading="eager"
                                    alt="NFT"
                                    className=" select-none w-[400px] h-[400px]"
                                    />
                                )}
                            </div>
                        ))}
                        <div className="flex justify-center mt-[0.5em] space-x-7 lg:space-x-8">
                            {SlideCollection.map((index) => (
                                <span
                                    key={index.id}
                                    className={`${
                                    slide === index.id
                                        ? "bg-[#a3a5a1] duration-300 ease-in"
                                        : "bg-[#2a2b2a] duration-300 ease-in"
                                    } rounded-[30%] cursor-pointer h-3.5 w-3.5 lg:h-4 lg:w-4 xl:h-4 xl:w-4 2xl:h-4 2xl:w-4`}
                                    onClick={() => setSlide(index.id)}>
                                </span>
                            ))}
                        </div>
                    </div>
                    
                    <div className="md:w-[300px] 2xl:w-[365px] self-end mb-[2em]">
                        {SlideCollection.map((index) => (
                            <div key={index.id} className={`${ index.id === slide ? "duration-300 ease-in" : "opacity-0 duration-300 ease-in"}`}>
                                {index.id === slide && (
                                <>
                                    <h3 key={index.id} className="font-black text-[1.5em] mt-[1em] md:mt-0">{index.alt}</h3>
                                </>
                                )}
                            </div>
                        ))}
                        <p className="font-light text-[1.125em] mt-[-0.5em]">Rarity: N/A</p>
                        <p className="text-[0.625em] font-extrabold mt-[0.5em] leading-[1.1em] w-[20em]">An error occurred while loading the image. Please try again later.</p>
                        <div className="flex flex-col select-none gap-[0.2em] font-semibold mt-[2em] md:mt-[3em]">
                            <button className="md:w-[12em] lg:w-[13em] xl:w-[14em] 2xl:w-[15em] rounded-[9px] p-[0.1em] border-[2px] mb-[0.3em] border-[#2a2b2a] bg-[#2a2b2a] text-white hover:border-[#484c48] hover:bg-[#484c48] ease-in-out duration-[180ms]">Mint</button>
                            <a className="md:w-[12em] lg:w-[13em] xl:w-[14em] 2xl:w-[15em] rounded-[9px] p-[0.1em] border-[2px] border-[#2a2b2a] bg-[#FFDB24] text-[#2a2b2a] hover:bg-[#f6cf01] ease-in-out duration-[180ms] text-center align-middle" href="https://www.jpg.store" target="_blank">jpg.store</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default NFT;
