import React, { useEffect, useState } from "react";
import spainFlag from "../../assets/es.svg";
import usaFlag from "../../assets/us.svg";

import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

import Switch from "../Switch";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      console.log("hola");
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    // REVIEW - Considerar hacerlo sticky
    <header
      className="fixed flex gap-4 justify-between z-50 px-6 py-4 glass hover:glass-lg
        border-2 border-[#d8d8d8] dark:border-white/20 xs:border-t-0 xs:rounded-b-2xl
        transition-all rounded-l-2xl xs:rounded-t-none right-0 max-xs:top-20 top-0
        xs:right-[20px] flex-col xs:flex-row 
    "
    >
      <section className="flex gap-2 items-center">
        <img src={spainFlag} alt="Spain flag" className="w-6 h-6" />

        <Switch
          value={isDarkMode}
          onCheck={(checked) => {
            setIsDarkMode(checked);
          }}
        />

        <img src={usaFlag} alt="USA flag" className="w-6 h-6" />
      </section>

      <div
        id="separator"
        className="border border-tertiary-400 dark:border-tertiary-950 h-[25px] max-xs:hidden"
      ></div>

      <section className="flex gap-2 items-center text-tertiary-400 dark:text-tertiary-950">
        <BsFillSunFill alt="Sun" size={24} />

        <Switch
          value={isDarkMode}
          onCheck={(checked) => {
            setIsDarkMode(checked);
          }}
        />

        <BsFillMoonFill alt="Moon" size={24} />
      </section>
    </header>
  );
}
