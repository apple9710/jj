import React from "react";
import main1 from "../assets/image/main1.png";

const Main: React.FC = () => {
  return (
    <main className="bg-slate-300 w-screen min-h-[calc(100vh-90px)]">
      {/* Main banner */}
      <div
        className="w-full h-[calc(100vh-90px)] bg-cover bg-center"
        style={{
          backgroundImage: `url(${main1})`,
        }}
      />

      {/* Background */}
      <div className="bg-red-100 w-full h-[400px]">(이미지)</div>

      {/* Introduce */}
      <div className="flex flex-row justify-around items-center h-[720px]">
        <div className="flex flex-col justify-around items-start h-[200px]">
          <div>안녕하십니까 현대소방 대표 이동훈 입니다.</div>
          <div>현대소방은 ‘ㅇㅇ안전을 모티브로 실현해내고 있으며,</div>
          <div>
            고객만족과 더불어 고객의 안전을 책임지는 소방방재회사로 자리매김
            했습니다.
          </div>
          <div>앞으로 1대1 민접한 고객맞춤 서비스와, 고객에게 딱 맞는 </div>
          <div>
            (무엇을) 제공하는 현대소방으로 여러분 곁에 남을 수 있도록
            하겠습니다.
          </div>
        </div>
        <div className="bg-slate-400 w-[844px] h-[720px]"></div>
      </div>

      {/* Background */}
      <div className="bg-red-100 w-full h-[400px]">(이미지)</div>

      {/* Information */}
      <div className="bg-yellow-100 flex flex-col justify-start items-center w-full h-[400px] py-[50px] px-[100px]">
        <div>가로로 스크롤</div>
      </div>

      {/* Partner */}
      <div className="bg-red-100 flex flex-col justify-start items-center w-full h-[400px] py-[50px] px-[100px]">
        <div className="font-bold text-[24px] my-[10px]">Partner</div>
      </div>

      {/* Contact us */}
      <div className="bg-orange-100 flex flex-col justify-start items-center w-full py-[50px] px-[100px]">
        <div className="font-bold text-[32px] my-[20px]">Contact us</div>
        <div className="font-bold my-[12px]">
          코리아방재는 고객 여러분의 방문을 기다립니다.
        </div>
        <div className="bg-slate-600 w-full h-[300px] my-[20px]">
          (카카오 지도)
        </div>
      </div>
    </main>
  );
};

export default Main;
