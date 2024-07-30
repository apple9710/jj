// import axios from "axios";
// import React, { useState } from "react";

const AddNotice: React.FC = () => {
  //   const [title, setTitle] = useState<string>("");
  //   const [contents, setContents] = useState<string>("");

  //   const postNotice = () => {
  //     return axios
  //       .post("http://localhost:8080/notice", {
  //         title,
  //         contents,
  //       })
  //       .then((data) => {
  //         console.log(data.data);
  //       })
  //       .catch((err) => console.error(err));
  //   };

  return (
    <main className="bg-slate-300 w-screen min-h-[calc(100vh-90px)] flex flex-col justify-center items-center">
      {/* <form
        onSubmit={(e) => {
          e.preventDefault();
          postNotice();
        }}
        className="bg-red-100 flex flex-col justify-center items-center w-[300px] h-[200px] "
      >
        <label className="" htmlFor="title">
          제목
        </label>
        <input
          className=""
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
        <label className="" htmlFor="contents">
          내용
        </label>
        <input
          className=""
          id="contents"
          type="text"
          value={contents}
          onChange={(e) => setContents(e.currentTarget.value)}
        />
        <input className="" type="submit" value="등록" />
      </form> */}
    </main>
  );
};
export default AddNotice;
