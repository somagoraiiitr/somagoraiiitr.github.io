import imgUsecase01 from "figma:asset/3846215c188a0474821a821bd0a2e527af14e1f5.png";
import imgUsecase11 from "figma:asset/a4d3d0d14ee6702a20564dd4b258c413a1b84a49.png";
import imgDesignParameters5 from "figma:asset/ab749714a42c01f5fdab46f2b1a1dc841eebbc40.png";

function Heading() {
  return (
    <div className="h-[64px] relative shrink-0 w-[506px]" data-name="Heading">
      <div className="absolute bg-[#d1b3ff] inset-[87.5%_52.17%_0_0.4%]" />
      <p className="absolute bottom-1/4 font-['Poppins:SemiBold',sans-serif] leading-[normal] left-0 not-italic right-[41.9%] text-[#0e1010] text-[32px] top-0">Finalized Features</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0 text-[#0e1010] w-full" data-name="Content">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] h-[32px] justify-center relative shrink-0 text-[18px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Features Overview</p>
      </div>
      <ol className="block font-['Poppins:Regular',sans-serif] relative shrink-0 text-[16px] w-full whitespace-pre-wrap" start="1">
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">AI-driven insights and recommendations appear contextually wherever losses, errors, or anomalies are detected.</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">Each insight includes a concise explanation along with actionable options to address the issue immediately.</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">Dashboard widgets can be analyzed individually, generating recommendations specific to the metric or trend shown.</span>
        </li>
        <li className="ms-[24px]">
          <span className="leading-[normal]">This approach keeps insights relevant, reduces cognitive load, and enables faster decision-making within the existing workflow.</span>
        </li>
      </ol>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[572px]">
      <div className="absolute bg-[rgba(237,221,132,0.3)] h-[31px] left-[-7px] top-0 w-[194px]" />
      <Content />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#0e1010] text-[18px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Design Parameters</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[572px]">
      <div className="absolute bg-[rgba(237,221,132,0.3)] h-[31px] left-[-7px] top-0 w-[194px]" />
      <Content1 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#fdfdfd] content-stretch flex flex-col gap-[39px] items-start px-[64px] py-[93px] relative size-full" data-name="63">
      <Heading />
      <Frame />
      <div className="h-[531px] relative shrink-0 w-[995px]" data-name="usecase0 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgUsecase01} />
      </div>
      <div className="h-[531px] relative shrink-0 w-[1007px]" data-name="Usecase 1 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgUsecase11} />
      </div>
      <Frame1 />
      <div className="h-[352px] relative shrink-0 w-[955px]" data-name="Design Parameters 5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[99.72%] left-[-0.07%] max-w-none top-0 w-[99.97%]" src={imgDesignParameters5} />
        </div>
      </div>
    </div>
  );
}