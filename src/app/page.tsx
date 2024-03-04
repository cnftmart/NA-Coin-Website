"use client";
import React from "react";

import Token_Data from "./(components)/body/token_data";
import Tokenomics from "./(components)/body/tokenomics";
import Presale from "./(components)/body/presale";
import NFT from "./(components)/body/nft";

export default function Home() {
  return (
    <>
      <div className="relative">
          <Token_Data />
          <Presale />
          {/* <Tokenomics />
          <NFT /> */}
      </div>
    </>
  );
}
