"use client"

import React, { useState, useEffect } from "react";
import Link from "next/link";
import party from "party-js";

export default function Content() {
  const links = [
    { title: "Beredskabsstyrelsen: Tre døgn", callToAction: "Læs", url: "https://www.brs.dk/da/forberedt/" },
    { title: "Peter Prepper", callToAction: "Lyt", url: "https://www.dr.dk/lyd/special-radio/peter-prepper-5426250956000" },
    { title: "Prepping skal skabe tryghed, men kan i stedet fremkalde angst", callToAction: "Læs", url: "https://www.information.dk/debat/2024/03/prepping-skabe-tryghed-kan-stedet-fremkalde-angst" },
    { title: "Har du styr på prepping? Bliv klogere på trenden, der er flyttet ind hos danskerne", callToAction: "Læs", url: "https://www.tvsyd.dk/forberedt-paa-det-vaerste/har-du-styr-paa-prepping-bliv-klogere-paa-trenden-der-er-flyttet-ind-hos-danskerne" },
    { title: "Psykolog: Anbefalinger om prepping kan være et 'wakeupcall' for mange danskere", callToAction: "Læs", url: "https://www.dr.dk/nyheder/indland/psykolog-anbefalinger-om-prepping-kan-vaere-et-wakeupcall-mange-danskere" },
    { title: "Danskerne har været i gang med at preppe længe", callToAction: "Læs", url: "https://samvirke.dk/artikler/prepping-danskerne-har-vaeret-i-gang-med-at-preppe-laenge" },
  ];

  return (
    <div className="mx-auto text-center mt-12 md:w-1/2">
      <Link href="/" className="btn btn-outline-primary inline-block mb-10">Tilbage</Link>

      <div className="flex flex-col gap-3">
        {links.map((link, index) => (
          <div key={index} className="flex items-center justify-between gap-2 border-b border-gray-800 pb-2">
            <span className="text-left">{link.title}</span>
            <a
              href={link.url}
              target="_blank"
              className={`btn btn-primary ${link.callToAction === "Læs" ? "px-5" : "px-6"}`}
            >
              {link.callToAction}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
