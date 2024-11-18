"use client";

import { useEffect, useState } from "react";

function DataView() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("../api/cards/get100random")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <p>1 Garth One-Eye</p>
      <p>
        1 Arid Mesa (MH2) 436<br></br>
        1 Ash Barrens (MB2) 103<br></br>
        1 Badlands (30A) 570<br></br>
        1 Bayou (30A) 571<br></br>
        1 Bloodstained Mire (MH3) 435<br></br>
        1 City of Brass (2X2) 403<br></br>
        1 Command Tower (CMM) 659<br></br>
        1 Exotic Orchard (SLD) 1231<br></br>
        1 Flooded Strand (MH3) 436<br></br>
        1 Indatha Triome (IKO) 309<br></br>
        1 Jetmir's Garden (SNC) 291<br></br>
        1 Ketria Triome (IKO) 310<br></br>
        1 Mana Confluence (SLD) 1012a<br></br>
        1 Marsh Flats (MH2) 437<br></br>
        1 Misty Rainforest (MH2) 438<br></br>
        1 Plateau (30A) 572<br></br>
        1 Polluted Delta (MH3) 438<br></br>
        1 Raffine's Tower (SNC) 292<br></br>
        1 Raugrin Triome (IKO) 311<br></br>
        1 Savai Triome (IKO) 312<br></br>
        1 Savannah (30A) 573<br></br>
        1 Scalding Tarn (MH2) 439<br></br>
        1 Scrubland (30A) 574<br></br>
        1 Snow-Covered Forest (MB2) 120<br></br>
        1 Snow-Covered Island (MB2) 117<br></br>
        1 Snow-Covered Mountain (MB2) 119<br></br>
        1 Snow-Covered Plains (MB2) 116<br></br>
        1 Snow-Covered Swamp (MB2) 118<br></br>
        1 Spara's Headquarters (SNC) 293<br></br>
        1 Taiga (30A) 575<br></br>
        1 Tropical Island (30A) 576<br></br>
        1 Tundra (30A) 577<br></br>
        1 Underground Sea (30A) 578<br></br>
        1 Verdant Catacombs (MH2) 440<br></br>
        1 Volcanic Island (30A) 579<br></br>
        1 Windswept Heath (MH3) 440<br></br>
        1 Wooded Foothills (MH3) 441<br></br>
        1 Xander's Lounge (SNC) 294<br></br>
        1 Zagoth Triome (IKO) 313<br></br>
        1 Ziatora's Proving Ground (SNC) 295
      </p>
      {data.map((item) => (
        <p key={item._id}>1 {item.name}</p>
      ))}
    </div>
  );
}

export default function Page() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/4 xl:w-1/4 p-4">
          <DataView />
        </div>
        <div className="w-full md:w-1/4 xl:w-1/4 p-4">
          <DataView />
        </div>
        <div className="w-full md:w-1/4 xl:w-1/4 p-4">
          <DataView />
        </div>
        <div className="w-full md:w-1/4 xl:w-1/4 p-4">
          <DataView />
        </div>
      </div>
    </div>
  );
}
