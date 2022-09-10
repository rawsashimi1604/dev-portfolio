import React from "react";

import HeadlineText from "@/components/common/HeadlineText";

import { BsEnvelope, BsGithub, BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <footer className="p-4 mb-2">
      <HeadlineText text="CONNECT" />

      <div className="flex gap-4 font-medium text-lg">
        <a
          href="https://github.com/rawsashimi1604/"
          className="transition-all duration-200 active:text-slate-700 hover:text-slate-700"
        >
          <BsGithub className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/gavin-loo-853047143/"
          className="transition-all duration-200 active:text-slate-700 hover:text-slate-700"
        >
          <BsLinkedin className="w-6 h-6" />
        </a>
        <a
          href="mailto:looweiren@gmail.com"
          className="transition-all duration-200 active:text-slate-700 hover:text-slate-700"
        >
          <BsEnvelope className="w-6 h-6" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
