import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-500 w-full h-[200px]">
      <div>
        <nav>
          <Link to={"/"}>회사소개</Link>
          <Link to={"/"}>찾아오시는길</Link>
          <Link to={"/"}>개인정보처리방침</Link>
          <Link to={"/"}>이용약관</Link>
        </nav>
      </div>
      <div>
        <div>
          <span>현대소방(주)</span>
          <span>대표이사:이동훈</span>
          <span>TEL:010-3153-7503</span>
          <span>FAX:031-000-0000</span>
          <span>E-mail:E.aabd26@naver.com</span>
        </div>
        <div>주소:경기도 안산시 상록구 해양 5로 17</div>
        <div>@Copyrightⓒ 2024 현대소방(주) All Right Reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
