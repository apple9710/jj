// isPage : axios 응답으로 받은 => 현재 페이지와 totalPage 정보
// setParams : axios 요청을 위한 => 페이지 값

const Pagination = ({ isPage, totalPage, setPage }: any) => {
  const pageList = [];
  for (let i = isPage - 2; i <= isPage + 2; i++) {
    pageList.push(i);
  }

  return (
    <div className="flex justify-center items-center w-[380px] py-[12px] my-[100px] border border-solid border-slate-200 rounded-full shadow-[1px_1px_20px_-10px_rgba(0,0,0,0.7)] ">
      <button
        onClick={() => setPage(1)}
        className="flex justify-center items-center w-[14px] h-[14px] mx-[12px] rotate-180"
      >
        <img src="/Arrow_D.png" alt="첫 페이지 이동" />
      </button>
      <button
        onClick={() => {
          if (isPage > 1) setPage(isPage - 1);
        }}
        className="flex justify-center items-center w-[8px] h-[8px] mx-[12px] rotate-180"
      >
        <img src="/Arrow_S.png" alt="다음 페이지 이동" />
      </button>
      {pageList.map((el, idx) => {
        if (el >= 1 && el <= totalPage) {
          return (
            <button
              key={idx}
              onClick={() => setPage(el)}
              className={`w-[16px] h-[16px] mx-[12px] ${
                isPage === el && "font-bold"
              }`}
            >
              {el}
            </button>
          );
        } else {
          return <div className="w-[16px] h-[16px] mx-[12px]" key={idx} />;
        }
      })}
      <button
        onClick={() => {
          if (isPage < totalPage) setPage(isPage + 1);
        }}
        className="flex justify-center items-center w-[8px] h-[8px] mx-[12px]"
      >
        <img src="/Arrow_S.png" alt="다음 페이지 이동" />
      </button>
      <button
        onClick={() => setPage(totalPage)}
        className="flex justify-center items-center w-[14px] h-[14px] mx-[12px]"
      >
        <img src="/Arrow_D.png" alt="마지막 페이지 이동" />
      </button>
    </div>
  );
};

export default Pagination;
