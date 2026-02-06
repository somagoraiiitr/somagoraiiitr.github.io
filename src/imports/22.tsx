import imgDesignParameters1 from "figma:asset/ab749714a42c01f5fdab46f2b1a1dc841eebbc40.png";
import imgUi11 from "figma:asset/4e593e4f63596986d3f0874f7d8e39b9961e5fbd.png";
import imgUi21 from "figma:asset/28d4a0b0948dc4170fc0cdb06123b31c83682150.png";

function Footer() {
  return (
    <div className="absolute border-[#d1b3ff] border-solid border-t font-['Poppins:Medium_Italic',sans-serif] h-[30px] italic leading-[0] left-[64px] text-[#0e1010] text-[12px] top-[calc(100%-64px)] w-[1522px]" data-name="Footer">
      <div className="absolute flex flex-col inset-[calc(30%-0.7px)_51.05%_calc(10%+0.1px)_0] justify-center">
        <ol start="4">
          <li className="ms-[18px] whitespace-pre-wrap">
            <span className="leading-[normal]">Contextual AI Insights for Warehouse Operations</span>
          </li>
        </ol>
      </div>
      <div className="absolute flex flex-col inset-[calc(30%-0.7px)_0_calc(10%+0.1px)_51.05%] justify-center text-right">
        <p className="leading-[normal] whitespace-pre-wrap">Page - 15</p>
      </div>
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
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[64px] top-[140px] w-[572px]">
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

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[64px] top-[calc(33.33%+32px)] w-[572px]">
      <div className="absolute bg-[rgba(237,221,132,0.3)] h-[31px] left-[-7px] top-0 w-[194px]" />
      <Content1 />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[44px] left-[64px] top-[64px] w-[506px]" data-name="Heading-3">
      <div className="absolute bg-[#d1b3ff] inset-[90.91%_52.17%_0_0.4%]" />
      <p className="absolute font-['Poppins:SemiBold',sans-serif] inset-[0_56.52%_18.18%_0] leading-[normal] not-italic text-[#0e1010] text-[24px]">Finalized Features</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[17px] items-start left-[93px] top-[calc(33.33%+89px)] w-[411px]">
      <div className="h-[155px] relative shrink-0 w-[467px]" data-name="Design Parameters 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[226.47%] left-[-0.15%] max-w-none top-0 w-[204.43%]" src={imgDesignParameters1} />
        </div>
      </div>
      <div className="h-[154px] relative shrink-0 w-[464px]" data-name="Design Parameters 4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[226.47%] left-[-105.79%] max-w-none top-0 w-[205.93%]" src={imgDesignParameters1} />
        </div>
      </div>
      <div className="h-[154px] relative shrink-0 w-[467px]" data-name="Design Parameters 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[226.47%] left-[-0.15%] max-w-none top-[-126.47%] w-[204.43%]" src={imgDesignParameters1} />
        </div>
      </div>
      <div className="h-[154px] relative shrink-0 w-[464px]" data-name="Design Parameters 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[226.47%] left-[-105.79%] max-w-none top-[-126.47%] w-[205.93%]" src={imgDesignParameters1} />
        </div>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#fdfdfd] relative size-full" data-name="22">
      <Footer />
      <Frame />
      <Frame2 />
      <div className="absolute flex h-[4px] items-center justify-center left-[64px] top-[419px] w-[560px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[rgba(209,179,255,0.3)] h-[560px] w-[4px]" />
        </div>
      </div>
      <Heading />
      <div className="absolute h-[412px] left-[calc(33.33%+172px)] top-[calc(33.33%+229px)] w-[864px]" data-name="UI1 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgUi11} />
      </div>
      <div className="absolute h-[430px] left-[calc(33.33%+171px)] top-[162px] w-[863px]" data-name="UI2 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgUi21} />
      </div>
      <Frame1 />
    </div>
  );
}