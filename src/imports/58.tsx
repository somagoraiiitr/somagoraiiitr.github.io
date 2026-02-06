import imgImage88 from "figma:asset/54101447730e9502526eb9404656c77a04514a73.png";

function Heading() {
  return (
    <div className="absolute h-[44px] left-[64px] top-[49px] w-[506px]" data-name="Heading-3">
      <div className="absolute bg-[#b8eec7] inset-[90.91%_52.17%_0_0.4%]" />
      <p className="absolute font-['Poppins:SemiBold',sans-serif] inset-[0_54.55%_18.18%_0] leading-[normal] not-italic text-[#0e1010] text-[24px]">Final Dashboard UI</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[rgba(209,179,255,0.3)] content-stretch flex items-center justify-center left-[66px] p-[10px] top-[calc(66.67%+182.33px)] w-[952px]">
      <p className="flex-[1_0_0] font-['Poppins:Medium',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#0e1010] text-[18px] whitespace-pre-wrap">{`Initial UATs revealed that users preferred this over the previous table layout. Users said it was easier for them to monitor and map the progress when the data was presented anchored to the spatial context. `}</p>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#fdfdfd] relative size-full" data-name="58">
      <Heading />
      <Frame />
      <div className="absolute h-[638px] left-[66px] top-[117px] w-[1520px]" data-name="image 88">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage88} />
      </div>
    </div>
  );
}