import axios from "axios";
import React, { useEffect, useState } from "react";

const Gallery: React.FC = () => {
  const data = {
    id: 0,
    title: "1번 시공 사진",
    content: "스프링클러 시공 현장입니다.",
    images: ["/jj/introduce.jpg", "/jj/introduce.jpg", "/jj/introduce.jpg"],
    createdate: "2024-07-08",
  };

  const [isData, setData] = useState<any>(data);

  const getGallery = () => {
    return axios
      .get(`http://localhost:8080/gallery/${1}`)
      .then((data) => {
        console.log(data.data);
        setData(data.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getGallery();
  }, []);

  return (
    <>
      <img
        src="/jj/intro_banner.png"
        alt="intro banner"
        className="w-full h-[500px] bg-cover bg-no-repeat"
      />
      <section className="flex flex-col justify-start items-center my-[100px]">
        <div className="">
          <div className="flex flex-col justify-start items-center mb-[100px] border rounded-2xl shadow-[1px_2px_30px_-10px_rgba(0,0,0,0.3)] p-[52px]">
            <div className="flex justify-between items-end w-full border-b-2 border-solid border-main mb-[10px] pb-[10px]">
              <div className="text-[24px] font-bold">{isData.title}</div>
              <div className="text-[12px]">{isData.createdate}</div>
            </div>
            <ul className="flex flex-col justify-start items-center">
              {isData.images?.map((img: any, idx: number) => (
                <li key={idx} className="m-[24px]">
                  <img
                    src={img}
                    alt="시공 이미지"
                    className="w-[875px] h-[432px] bg-no-repeat bg-cover"
                  />
                </li>
              ))}
            </ul>
            <div className="w-full my-[10px] px-[24px]">{isData.content}</div>
          </div>
          <div className="flex justify-start items-center w-full my-[16px] text-[18px] border rounded-3xl shadow-[0_2px_24px_-10px_rgba(0,0,0,0.4)] p-[8px] cursor-pointer">
            <div className="whitespace-nowrap px-[20px] py-[10px] border rounded-3xl bg-main text-white">
              이전 글
            </div>
            <div className="whitespace-nowrap w-full ml-[24px]">title</div>
            <div className="whitespace-nowrap mr-[16px] text-[12px]">
              2024.07.09
            </div>
          </div>
          <div className="flex justify-start items-center w-full my-[16px] text-[18px] border rounded-3xl shadow-[0_2px_24px_-10px_rgba(0,0,0,0.4)] p-[8px] cursor-pointer">
            <div className="whitespace-nowrap px-[20px] py-[10px] border rounded-3xl bg-main text-white">
              다음 글
            </div>
            <div className="whitespace-nowrap w-full ml-[24px]">title</div>
            <div className="whitespace-nowrap mr-[16px] text-[12px]">
              2024.07.07
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Gallery;
