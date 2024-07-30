import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Gallery: React.FC = () => {
  const data = [
    {
      id: 0,
      title: "1번 시공 사진",
      content: "스프링클러 시공 현장입니다.",
      images: ["/jj/introduce.jpg", "/jj/introduce.jpg", "/jj/introduce.jpg"],
      createdate: "2024-07-08",
    },
    {
      id: 1,
      title: "2번 시공 사진",
      content: "스프링클러 시공 현장입니다.",
      images: ["/jj/introduce.jpg", "/jj/introduce.jpg", "/jj/introduce.jpg"],
      createdate: "2024-07-08",
    },
    {
      id: 2,
      title: "3번 시공 사진",
      content: "스프링클러 시공 현장입니다.",
      images: ["/jj/introduce.jpg", "/jj/introduce.jpg", "/jj/introduce.jpg"],
      createdate: "2024-07-08",
    },
    {
      id: 3,
      title: "4번 시공 사진",
      content: "스프링클러 시공 현장입니다.",
      images: ["/jj/introduce.jpg", "/jj/introduce.jpg", "/jj/introduce.jpg"],
      createdate: "2024-07-08",
    },
    {
      id: 4,
      title: "5번 시공 사진",
      content: "스프링클러 시공 현장입니다.",
      images: ["/jj/introduce.jpg", "/jj/introduce.jpg", "/jj/introduce.jpg"],
      createdate: "2024-07-08",
    },
  ];

  const navigate = useNavigate();
  const [isData, setData] = useState<any>(data);

  const getGallerys = () => {
    return axios
      .get("http://localhost:8080/gallerys")
      .then((data) => {
        console.log(data.data);
        setData(data.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getGallerys();
  }, []);

  return (
    <>
      <img
        src="/jj/intro_banner.png"
        alt="intro banner"
        className="w-full h-[500px] bg-cover bg-no-repeat"
      />
      <section className="flex flex-col justify-start items-center my-[100px]">
        <ul className="grid grid-cols-3 grid-row-2 gap-[80px] place-items-center">
          {isData.map((el: any) => (
            <li
              key={el.id}
              onClick={() => navigate(`/gallery/${el.id}`)}
              className="flex flex-col justify-start items-start w-[360px] h-[400px] p-[25px] border shadow-[1px_2px_30px_-10px_rgba(0,0,0,0.3)] rounded-[24px] cursor-pointer"
            >
              <img src={el.images[0]} alt="시공 이미지" />
              <div className="text-[12px] mt-[10px]">{el.createdate}</div>
              <div className="font-bold mt-[10px]">{el.title}</div>
              <div className="mt-[15px]">{el.content}</div>
            </li>
          ))}
        </ul>
        <div className="my-[80px]">
          <button>1</button>
        </div>
      </section>
    </>
  );
};
export default Gallery;
