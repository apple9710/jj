export const Content = ({ data }: any) => {
  return (
    <div className="flex flex-col justify-start items-center w-full">
      <img
        src={data.image}
        alt=""
        className="w-[1250px] h-[700px] mb-[100px]"
      />
      <div className="flex flex-col justify-start items-start">
        <div className="mb-[40px] text-[32px] font-bold text-main">{data.title}</div>
        <ul className="flex flex-col justify-start items-start w-full">
          {data.contents?.map((obj: any, index: number) => (
            <li
              key={`main${index}`}
              className="flex flex-col justify-start items-start w-full my-[10px] p-[8px] pr-[100px] border shadow-[1px_2px_30px_-10px_rgba(0,0,0,0.3)] rounded-[36px]"
            >
              <div className="flex justify-start items-center w-full">
                <button className="border rounded-full min-w-[56px] min-h-[56px] mr-[25px] bg-main text-white">
                  {index + 1}
                </button>
                <div className="">{obj.content}</div>
              </div>
              {obj.subContent !== null && (
                <ul className="mt-[10px] pl-[80px]">
                  {obj.subContent?.map((el: any, idx: number) => (
                    <li key={`sub${idx}`} className="my-[10px] list-disc">
                      {el}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
