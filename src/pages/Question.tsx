import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Question: React.FC = () => {
  const formRef = useRef<any>(null);

  const onSendForm = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm("service_doong9", "template_70tsefe", formRef.current, {
        publicKey: "n7Um0Ejq6wRT52WbO",
      })
      .then(
        () => {
          alert("메일 전송 완료");
        },
        (err) => {
          alert("메일 전송에 실패했습니다.");
          console.log(err);
        }
      );
  };

  return (
    <>
      <img
        src="/jj/intro_banner.png"
        alt="intro banner"
        className="w-full h-[500px] bg-cover bg-no-repeat"
      />
      <section className="flex justify-center items-end mt-[100px] mb-[200px]">
        <div className="flex flex-col justify-start items-start mr-[20px] p-[32px]">
          <img
            src="/jj/Logo_Large.png"
            alt="명함 로고"
            className="w-[440px] h-[200px] mb-[80px]"
          />
          <div className="my-[12px] text-[32px] font-bold">현대소방 </div>
          <div className="my-[12px] text-[32px] font-bold">대표 이동훈</div>
          <div className="my-[12px] text-[24px]">010-3153-7503</div>
          <div className="my-[12px] text-[24px]">
            주소 경기도 안산시 상록구 해양 5로 17
          </div>
          <div className="my-[12px] text-[24px]">
            소방완비증명 / 소방시설공사 / 방염필증 / 스프링클러
          </div>
        </div>
        <form
          ref={formRef}
          onSubmit={(e) => onSendForm(e)}
          className="flex flex-col justify-start items-end p-[32px]"
        >
          <div className="flex justify-start items-center my-[12px]">
            <label className="whitespace-nowrap">보내시는 분</label>
            <input
              name="name"
              className="w-[660px] ml-[12px] p-[8px] bg-slate-300"
            />
          </div>
          <div className="flex justify-start items-center my-[12px]">
            <label className="whitespace-nowrap">이메일</label>
            <input
              name="email"
              className="w-[660px] ml-[12px] p-[8px] bg-slate-300"
            />
          </div>
          <div className="flex justify-start items-start my-[12px]">
            <label className="whitespace-nowrap">내용</label>
            <textarea
              name="message"
              className="w-[660px] h-[300px] ml-[12px] p-[8px] resize-none bg-slate-300"
            />
          </div>
          <button className="border rounded-xl py-[12px] px-[20px] bg-main text-white">
            제출
          </button>
        </form>
      </section>
    </>
  );
};
export default Question;
