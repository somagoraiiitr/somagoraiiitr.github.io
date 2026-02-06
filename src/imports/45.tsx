import imgImage74 from "figma:asset/adde7536cd5d20f3a28c6cc72547113f59803a05.png";
import imgImage75 from "figma:asset/b2269323808fdc5f40e13626e52cbc75daefd397.png";
import imgImage76 from "figma:asset/da506d664ea7bb85f58bc83cd367a69e938f74cd.png";
import imgImage77 from "figma:asset/76ca72eaa3fd7a9a8b897fdb13e31860a3f7cc8a.png";
import imgImage78 from "figma:asset/b36965861b24252250506c483dd0c309d7e3f11e.png";
import imgImage79 from "figma:asset/bf2c16183e72ad07df140220a4c327e144f6ae97.png";

function Heading() {
  return (
    <div className="h-[44px] relative shrink-0 w-[506px]" data-name="Heading-3">
      <div className="absolute bg-[#a6cffb] inset-[90.91%_52.17%_0_0.4%]" />
      <p className="absolute font-['Poppins:SemiBold',sans-serif] inset-[0_0.59%_18.18%_0] leading-[normal] not-italic text-[#0e1010] text-[24px]">Heuristic Analysis of the Existing Platform</p>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <div className="bg-[rgba(250,227,103,0.3)] col-1 h-[31px] ml-0 mt-0 row-1 w-[379px]" />
      <div className="-translate-y-1/2 col-1 flex flex-col font-['Poppins:Medium',sans-serif] justify-center ml-[9px] mt-[15.5px] not-italic relative row-1 text-[#0e1010] text-[18px] whitespace-nowrap">
        <p className="leading-[normal]">Existing Style Guide</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <div className="bg-[rgba(250,227,103,0.3)] col-1 h-[31px] ml-0 mt-0 row-1 w-[379px]" />
      <div className="-translate-y-1/2 col-1 flex flex-col font-['Poppins:Medium',sans-serif] justify-center ml-[9px] mt-[15.5px] not-italic relative row-1 text-[#0e1010] text-[18px] whitespace-nowrap">
        <p className="leading-[normal]">Tables</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <div className="bg-[rgba(250,227,103,0.3)] col-1 h-[31px] ml-0 mt-0 row-1 w-[379px]" />
      <div className="-translate-y-1/2 col-1 flex flex-col font-['Poppins:Medium',sans-serif] justify-center ml-[9px] mt-[15.5px] not-italic relative row-1 text-[#0e1010] text-[18px] whitespace-nowrap">
        <p className="leading-[normal]">Pop Ups</p>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <div className="bg-[rgba(250,227,103,0.3)] col-1 h-[31px] ml-0 mt-0 row-1 w-[379px]" />
      <div className="-translate-y-1/2 col-1 flex flex-col font-['Poppins:Medium',sans-serif] justify-center ml-[9px] mt-[15.5px] not-italic relative row-1 text-[#0e1010] text-[18px] whitespace-nowrap">
        <p className="leading-[normal]">Accessibility Check</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Group />
      <div className="aspect-[1920/1091] relative shrink-0 w-full" data-name="image 74">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage74} />
      </div>
      <Group1 />
      <div className="aspect-[4088/1915] relative shrink-0 w-full" data-name="image 75">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage75} />
      </div>
      <div className="aspect-[3941/1837] relative shrink-0 w-full" data-name="image 76">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage76} />
      </div>
      <Group2 />
      <div className="aspect-[3795/1897] relative shrink-0 w-full" data-name="image 77">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage77} />
      </div>
      <div className="aspect-[4096/1752] relative shrink-0 w-full" data-name="image 78">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage78} />
      </div>
      <Group3 />
      <div className="h-[450px] relative shrink-0 w-[867px]" data-name="image 79">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage79} />
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#fdfdfd] content-stretch flex flex-col gap-[30px] items-start p-[64px] relative size-full" data-name="45">
      <Heading />
      <Frame />
    </div>
  );
}