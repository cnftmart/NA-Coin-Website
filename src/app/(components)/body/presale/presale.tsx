import React from "react";
import Image from "next/image";
import {
    batch_1,
    batch_2,
    batch_3,
} from "./presale_collection";

const Presale: React.FC = () => {
    const [open, setOpen] = React.useState<number>(1);
    const handleOpen = (value: number) => {
      setOpen(open === value ? 0 : value);
    };
    return (
        <>
            <div className=" flex flex-col w-full items-center mt-[10em]">
                <h2 className=" text-[2em] font-black">Presale</h2>
                <p className=" font-light text-[0.8em] ">Presale supply: <span className="font-medium pl-[0.4em]">N/A</span></p>

                <div className=" mobil | flex-col mt-[5em] items-center ml-10">
                    <div className=" w-[13.3em] mb-[0.5em]">
                        {batch_1.map((item) => (
                        <React.Fragment key={item.id}>
                            <div onClick={() => handleOpen(item.id)} className=" flex items-center font-black text-[1.125em] underline">
                                <Image
                                    src="/images/naicon.svg"
                                    width={40}
                                    height={40}
                                    draggable={false}
                                    priority={true}
                                    loading="eager"
                                    alt="N/A icon"
                                    className=" select-none mr-[0.4em] "
                                />
                                {item.title}
                            </div>
                            {open === item.id && (
                            <div onClick={() => handleOpen(item.id * 0)}>
                                <ul aria-busy={true}>
                                <div className=" flex flex-col mr-[2em] ml-[51.2px]">
                                    <li className=" font-light text-[0.9em]">{item.date}</li>
                                    <li className=" text-[0.625em] font-bold ">{item.description}</li>
                                </div>
                                </ul>
                            </div>
                            )}
                        </React.Fragment>))}
                    </div>
                    <div className=" w-[13.3em] mb-[0.5em]">
                        {batch_2.map((item) => (
                        <React.Fragment key={item.id}>
                            <div onClick={() => handleOpen(item.id)} className=" flex items-center font-black text-[1.125em] underline">
                                <Image
                                    src="/images/naicon.svg"
                                    width={40}
                                    height={40}
                                    draggable={false}
                                    priority={true}
                                    loading="eager"
                                    alt="N/A icon"
                                    className=" select-none mr-[0.4em] "
                                />
                                {item.title}
                            </div>
                            {open === item.id && (
                            <div onClick={() => handleOpen(item.id * 0)}>
                                <ul aria-busy={true}>
                                <div className=" flex flex-col mr-[2em] ml-[51.2px]">
                                    <li className=" font-light text-[0.9em]">{item.date}</li>
                                    <li className=" text-[0.625em] font-bold">{item.description}</li>
                                </div>
                                </ul>
                            </div>
                            )}
                        </React.Fragment>))}
                    </div>
                    <div className=" w-[13.3em] mb-[0.5em]">
                        {batch_3.map((item) => (
                        <React.Fragment key={item.id}>
                            <div onClick={() => handleOpen(item.id)} className=" flex items-center font-black text-[1.125em] underline">
                                <Image
                                    src="/images/naicon.svg"
                                    width={40}
                                    height={40}
                                    draggable={false}
                                    priority={true}
                                    loading="eager"
                                    alt="N/A icon"
                                    className=" select-none mr-[0.4em] "
                                />
                                {item.title}
                            </div>
                            {open === item.id && (
                            <div onClick={() => handleOpen(item.id * 0)}>
                                <ul aria-busy={true}>
                                <div className=" flex flex-col mr-[2em] ml-[51.2px]">
                                    <li className=" font-light text-[0.9em]">{item.date}</li>
                                    <li className=" text-[0.625em] font-bold">{item.description}</li>
                                </div>
                                </ul>
                            </div>
                            )}
                        </React.Fragment>))}
                    </div>
                </div>

                <div className=" pc | mt-[10em] justify-evenly w-full">
                    <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-[1.5em]">
                        <div className=" w-[12em]">
                            {batch_1.map((item) => (
                                <>
                                    <div className=" flex items-center font-black text-[1.5em]">
                                        <Image
                                            src="/images/naicon.svg"
                                            width={40}
                                            height={40}
                                            draggable={false}
                                            priority={true}
                                            loading="eager"
                                            alt="N/A icon"
                                            className=" select-none mr-[0.4em] "
                                        />
                                        {item.title}
                                    </div>
                                    <div>
                                        <ul aria-busy={true}>
                                        <div className=" flex flex-col w-full mr-[10em] ml-[54.4px] mt-[-0.5em] ">
                                            <li className=" font-light text-[1.125em]">{item.date}</li>
                                            <li className=" text-[0.625em] font-extrabold mt-[0.5em] leading-[1.1em] w-[18em]">{item.description}</li>
                                        </div>
                                        </ul>
                                    </div>
                                </>
                            ))}
                        </div>

                        <div className=" w-[12em]">
                            {batch_2.map((item) => (
                                <>
                                    <div className="flex items-center font-black text-[1.5em]">
                                        <Image
                                            src="/images/naicon.svg"
                                            width={40}
                                            height={40}
                                            draggable={false}
                                            priority={true}
                                            loading="eager"
                                            alt="N/A icon"
                                            className=" select-none mr-[0.4em] "
                                        />
                                        {item.title}
                                    </div>
                                    <div>
                                        <ul aria-busy={true}>
                                        <div className=" flex flex-col w-full mr-[10em] ml-[54.4px]">
                                            <li className=" font-light text-[1.125em]">{item.date}</li>
                                            <li className=" text-[0.625em] font-extrabold leading-[1.1em] w-[18em]">{item.description}</li>
                                        </div>
                                        </ul>
                                    </div>
                                </>
                            ))}
                        </div>

                        <div className=" w-[12em]">
                            {batch_3.map((item) => (
                                <>
                                    <div className="flex items-center font-black text-[1.5em]">
                                        <Image
                                            src="/images/naicon.svg"
                                            width={40}
                                            height={40}
                                            draggable={false}
                                            priority={true}
                                            loading="eager"
                                            alt="N/A icon"
                                            className=" select-none mr-[0.4em] "
                                        />
                                        {item.title}
                                    </div>
                                    <div>
                                        <ul aria-busy={true}>
                                        <div className=" flex flex-col w-full mr-[10em] ml-[54.4px]">
                                            <li className=" font-light text-[1.125em]">{item.date}</li>
                                            <li className=" text-[0.625em] font-extrabold leading-[1.1em] w-[18em]">{item.description}</li>
                                        </div>
                                        </ul>
                                    </div>
                                </>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};
export default Presale;
