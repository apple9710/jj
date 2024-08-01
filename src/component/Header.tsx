import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 bg-white flex flex-row justify-start items-center w-full h-[90px] border shadow-[1px_1px_20px_-10px_rgba(0,0,0,0.3)] z-10">
      <Link to={"/"} className="flex justify-center items-center w-full max-w-[380px]">
        <img src="/Logo_Large.png" alt="logo" className="w-[166px]" />
      </Link>
        <nav className="flex flex-row justify-around items-center w-full max-w-[1200px] px-[16px] mr-[32px]">
          <Link to={"/introduce"} className="min-w-[90px] mx-[16px] font-bold text-[20px]">회사소개</Link>
          <Link to={"/business"} className="min-w-[90px] mx-[16px] font-bold text-[20px]">사업분야</Link>
          <Link to={"/gallery"} className="min-w-[100px] mx-[16px] font-bold text-[20px]">시공갤러리</Link>
          <Link to={"/question"} className="min-w-[90px] mx-[16px] font-bold text-[20px]">문의하기</Link>
          <Link to={"/road"} className="min-w-[90px] mx-[16px] font-bold text-[20px]">오시는길</Link>
        </nav>
    </header>
  );
};

export default Header;
