import imgWhyMlAi1 from "figma:asset/71ff10a43d2cc9ac21fc15fa00d52f76200c5dea.png";

function Heading() {
  return (
    <div className="h-[64px] relative shrink-0 w-[506px]" data-name="Heading">
      <div className="absolute bg-[#d1b3ff] inset-[87.5%_52.17%_0_0.4%]" />
      <p className="absolute bottom-1/4 font-['Poppins:SemiBold',sans-serif] leading-[normal] left-0 not-italic right-[-56.52%] text-[#0e1010] text-[32px] top-0">Contextual AI Insights for Warehouse Operations</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[#0e1010] w-full" data-name="Content">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] h-[32px] justify-center relative shrink-0 text-[18px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">{`Problem Statement `}</p>
      </div>
      <div className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[0px] text-[16px] w-full whitespace-pre-wrap">
        <p className="leading-[normal] mb-0">{`Warehouse managers and supervisors can’t get actionable insights on the isolated data provided by Control Tower as it uses static models, limited data, and no recommendations.  `}</p>
        <p>
          <span className="leading-[normal]">{`To address this, we aim to develop a feature leveraging artificial intelligence, machine learning and advanced analytics to offer `}</span>
          <span className="decoration-solid font-['Poppins:Regular',sans-serif] leading-[normal] not-italic underline">actionable insights and recommendations</span>
          <span className="leading-[normal]">{`. `}</span>
        </p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[#0e1010] w-full" data-name="Content">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] h-[32px] justify-center relative shrink-0 text-[18px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">How does ML/AI come into the picture?</p>
      </div>
      <div className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[16px] w-full whitespace-pre-wrap">
        <p className="leading-[normal] mb-0">ML/AI can help answer questions like:</p>
        <ol start="1">
          <li className="mb-0 ms-[24px]">
            <span className="leading-[normal]">Which products should I re-slot to improve overall efficiency?</span>
          </li>
          <li className="ms-[24px]">
            <span className="leading-[normal]">If I move three more workers to Zone A, will I get my orders shipped on time?</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-[#0e1010] w-full" data-name="Content">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] h-[32px] justify-center leading-[0] relative shrink-0 text-[18px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">{`The Team `}</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] w-full whitespace-pre-wrap">{`Design Team - 1 Interaction Designer (Me), 1 Visual Designer `}</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <div className="absolute bg-[rgba(237,221,132,0.3)] h-[31px] left-[-7px] top-0 w-[194px]" />
      <div className="absolute bg-[rgba(237,221,132,0.3)] h-[31px] left-[-7px] top-[156px] w-[366px]" />
      <div className="absolute bg-[rgba(237,221,132,0.3)] h-[31px] left-[-7px] top-[288px] w-[105px]" />
      <Content />
      <Content1 />
      <Content2 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#fdfdfd] content-stretch flex flex-col gap-[46px] items-start px-[57px] py-[64px] relative size-full" data-name="59">
      <Heading />
      <Frame />
      <div className="h-[455px] relative shrink-0 w-[576px]" data-name="why ML AI 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWhyMlAi1} />
      </div>
    </div>
  );
}