import imgWhyMlAi1 from "figma:asset/71ff10a43d2cc9ac21fc15fa00d52f76200c5dea.png";
import imgResearch1 from "figma:asset/cc4b6b4d153c91f4c764e8deaeb7c5fb0a6d0314.png";

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
        <p className="leading-[normal] whitespace-pre-wrap">Page - 14</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[64px] left-[64px] top-[64px] w-[506px]" data-name="Heading">
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
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[64px] top-[160px] w-[745px]">
      <div className="absolute bg-[rgba(237,221,132,0.3)] h-[31px] left-[-7px] top-0 w-[194px]" />
      <div className="absolute bg-[rgba(237,221,132,0.3)] h-[31px] left-[-7px] top-[156px] w-[366px]" />
      <div className="absolute bg-[rgba(237,221,132,0.3)] h-[31px] left-[-7px] top-[288px] w-[105px]" />
      <Content />
      <Content1 />
      <Content2 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0 text-[#0e1010] w-full" data-name="Content">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] h-[32px] justify-center relative shrink-0 text-[18px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Market Research</p>
      </div>
      <div className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[0px] w-full whitespace-pre-wrap">
        <p className="font-['Poppins:Bold',sans-serif] leading-[normal] mb-0 text-[16px]">Ataccama</p>
        <ul className="list-disc mb-0">
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[normal] text-[16px]">Uses AI to assess data quality, surface inconsistencies, and generate contextual insights directly tied to specific issues in the workflow.</span>
          </li>
          <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[normal] text-[16px]">
              Provides smart summaries with recommended actions, allowing users to drill into dedicated pages to investigate and resolve problems.
              <br aria-hidden="true" />
              <br aria-hidden="true" />
            </span>
          </li>
        </ul>
        <p className="font-['Poppins:Bold',sans-serif] leading-[normal] mb-0 text-[16px]">AWS Supply Chain</p>
        <ul className="list-disc mb-0">
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[normal] text-[16px]">Automatically generates real-time insights on supply chain risks like overstock and stock-outs using unified data from the supply chain data lake.</span>
          </li>
          <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[normal] text-[16px]">
              Suggests recommended actions with projected outcomes and confidence scores, supported by a real-time visual map of inventory health across locations.
              <br aria-hidden="true" />
              <br aria-hidden="true" />
            </span>
          </li>
        </ul>
        <p className="font-['Poppins:Bold',sans-serif] leading-[normal] mb-0 text-[16px]">Tredence</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[normal] text-[16px]">Delivers contextual recommendations by combining internal operational data with external signals such as weather, geopolitical factors, and demand trends.</span>
          </li>
          <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[normal] text-[16px]">Prioritizes alerts and demand forecasts across multiple information channels to help users select the most relevant and impactful actions.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[64px] top-[calc(33.33%+257px)] w-[745px]">
      <div className="absolute bg-[rgba(237,221,132,0.3)] h-[31px] left-[-7px] top-0 w-[194px]" />
      <Content3 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#fdfdfd] relative size-full" data-name="21">
      <Footer />
      <Heading />
      <Frame />
      <Frame1 />
      <div className="absolute flex h-[4px] items-center justify-center left-[64px] top-[calc(33.33%+201px)] w-[1522px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[rgba(209,179,255,0.3)] h-[1522px] w-[4px]" />
        </div>
      </div>
      <div className="absolute h-[455px] left-[calc(33.33%+360px)] top-[124px] w-[576px]" data-name="why ML AI 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWhyMlAi1} />
      </div>
      <div className="absolute h-[478px] left-[calc(33.33%+360px)] top-[calc(33.33%+257px)] w-[649px]" data-name="Research 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[4.9%] max-w-none top-0 w-[95.1%]" src={imgResearch1} />
        </div>
      </div>
    </div>
  );
}