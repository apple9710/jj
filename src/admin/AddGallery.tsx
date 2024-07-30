import axios from "axios";
import React, { ChangeEvent, useRef, useState } from "react";

const AddGallery: React.FC = () => {
  const imgRef = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState<string>("");
  const [imgFile, setImgFile] = useState<any>("");
  const [contents, setContents] = useState<string>("");

  const postGallery = () => {
    return axios
      .post("http://localhost:8080/gallery", {
        title,
        contents,
        image: imgFile,
      })
      .then((data) => {
        console.log(data.data);
      })
      .catch((err) => console.error(err));
  };

  const formData = new FormData();
  const handleSaveFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const type = file.type;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (type.includes("image")) {
          setImgFile(reader.result);
          console.log(typeof reader.result);
          formData.append("image", reader.result as string);
        } else {
          alert("이미지 파일만 가능합니다.");
        }
      };
      // formData.append("image", e.target.files[0]);
    }
  };

  return (
    <main className="bg-slate-300 w-screen min-h-[calc(100vh-90px)] flex flex-col justify-center items-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          postGallery();
        }}
        className="bg-red-100 flex flex-col justify-start items-center p-[20px]"
      >
        <label className="" htmlFor="title">
          제목
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
          className=""
        />

        <label className="" htmlFor="contents">
          내용
        </label>
        <input
          id="contents"
          type="text"
          value={contents}
          onChange={(e) => setContents(e.currentTarget.value)}
          className=""
        />

        <input
          id="imageUpload"
          type="file"
          accept="image/png image/jpg image/jpeg"
          onChange={handleSaveFile}
          ref={imgRef}
          className="hidden"
        />
        <label
          htmlFor="imageUpload"
          className="flex justify-center items-center w-[200px] h-[200px] cursor-pointer"
        >
          {imgFile ? (
            <img src={imgFile} alt="업로드 이미지" className="w-full h-full" />
          ) : (
            <span>파일을 업로드 해주세요.</span>
          )}
        </label>

        <input type="submit" value="등록" className="" />
      </form>
    </main>
  );
};
export default AddGallery;
