"use client";
import React from "react";
import Token_Data from "./(components)/body/token_data/token_data";
import Tokenomics from "./(components)/body/tokenomics/tokenomics";
import Presale from "./(components)/body/presale/presale";
import NFT from "./(components)/body/nft/nft";

export default function Home() {
  return (
    <>
      <div className="relative">
          <Token_Data />
          <Presale />
          <Tokenomics />
          <NFT /> 
      </div>
    </>
  );
}
