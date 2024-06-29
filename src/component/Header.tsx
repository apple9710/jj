import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 bg-white flex flex-row justify-start items-center w-full h-[90px]">
      <Link to={"/"} className="flex justify-center items-center w-full max-w-[380px]">
        <img src="/main_logo.png" alt="logo" className="w-[166px]" />
      </Link>
        <nav className="flex flex-row justify-around items-center w-full max-w-[1200px]">
          <Link to={"/"} className="min-w-[90px] mx-[16px] font-bold text-[20px]">회사소개</Link>
          <Link to={"/"} className="min-w-[90px] mx-[16px] font-bold text-[20px]">사업분야</Link>
          <Link to={"/"} className="min-w-[90px] mx-[16px] font-bold text-[20px]">홍보센터</Link>
          <Link to={"/"} className="min-w-[90px] mx-[16px] font-bold text-[20px]">문의사항</Link>
          <Link to={"/"} className="min-w-[90px] mx-[16px] font-bold text-[20px]">공지사항</Link>
        </nav>
    </header>
  );
};

export default Header;
