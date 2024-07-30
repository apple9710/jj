import React, { useState } from "react";
import { businessData } from "./Business/businessData";
import { Content } from "./Business/content";

const Business: React.FC = () => {
  const [menu, setMenu] = useState<string>("certificate");

  const handleChangeMenu = (e: React.MouseEvent<HTMLLIElement>) => {
    setMenu(e.currentTarget.id);
  };

  const tabMenu = [
    { id: "certificate", text: "소방완비필증" },
    { id: "facility", text: "소방시설공사" },
    { id: "sprinkler", text: "스프링클러" },
    { id: "retardant", text: "방염" },
  ];

  return (
    <>
      <img
        src="/jj/intro_banner.png"
        alt="사업분야 banner"
        className="w-full h-[500px] bg-cover bg-no-repeat"
      />

      <nav className="flex justify-center items-center w-full my-[20px]">
        <ul className="flex justify-start items-center w-full max-w-[1440px] h-[80px]">
          {tabMenu.map((el: any, idx: number) => (
            <li
              key={idx}
              id={el.id}
              onClick={handleChangeMenu}
              className="flex justify-start items-center w-[230px] h-[80px] mr-[10px] pl-[8px] border-b-4 border-solid border-main cursor-pointer"
            >
              <span className="text-2xl font-medium">{el.text}</span>
            </li>
          ))}
        </ul>
      </nav>

      <section className="flex flex-col justify-start items-center w-full my-[64px]">
        {menu === "certificate" && <Content data={businessData.certificate} />}
        {menu === "facility" && <Content data={businessData.facility} />}
        {menu === "sprinkler" && <Content data={businessData.sprinkler} />}
        {menu === "retardant" && <Content data={businessData.retardant} />}
      </section>
    </>
  );
};
export default Business;
