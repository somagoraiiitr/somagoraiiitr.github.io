import imgImage83 from "figma:asset/ec9a37fa339df834505cbd6ac609c0d7227b92c3.png";

function Heading() {
  return (
    <div className="absolute h-[44px] left-[64px] top-[64px] w-[506px]" data-name="Heading-3">
      <div className="absolute bg-[#b8eec7] inset-[90.91%_52.17%_0_0.4%]" />
      <p className="absolute font-['Poppins:SemiBold',sans-serif] inset-[0_63.44%_18.18%_0] leading-[normal] not-italic text-[#0e1010] text-[24px]">Design Process</p>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#fdfdfd] relative size-full" data-name="51">
      <Heading />
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[66px] not-italic text-[#0e1010] text-[16px] top-[138px] w-[1294px] whitespace-pre-wrap">We started with understanding more about the Warehouse industry standards. Some of the learnings are below:</p>
      <div className="absolute h-[949px] left-[66px] top-[174px] w-[1375px]" data-name="image 82" />
      <div className="absolute h-[1011px] left-[66px] top-[174px] w-[1520px]" data-name="image 83">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage83} />
      </div>
    </div>
  );
}