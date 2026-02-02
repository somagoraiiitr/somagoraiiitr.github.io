import imgImage23 from "figma:asset/c3407a865a02c5ea010675c154ec148dc9831b93.png";
import imgImage24 from "figma:asset/b2269323808fdc5f40e13626e52cbc75daefd397.png";
import imgImage25 from "figma:asset/76ca72eaa3fd7a9a8b897fdb13e31860a3f7cc8a.png";

function Footer() {
  return (
    <div className="absolute border-[#d1b3ff] border-solid border-t font-['Poppins:Medium_Italic',sans-serif] h-[30px] italic leading-[0] left-[64px] text-[#0e1010] text-[12px] top-[calc(100%-64px)] w-[1522px]" data-name="Footer">
      <div className="absolute flex flex-col inset-[calc(30%-1px)_51.05%_10%_0] justify-center">
        <ol className="css-8097nc" start="2">
          <li className="css-4hzbpn ms-[18px]">
            <span className="leading-[normal]">Design System for Data-Intensive WES Interfaces</span>
          </li>
        </ol>
      </div>
      <div className="absolute flex flex-col inset-[calc(30%-1px)_0_10%_51.05%] justify-center text-right">
        <p className="css-4hzbpn leading-[normal]">Page - 17</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[64px] left-[64px] top-[64px] w-[506px]" data-name="Heading">
      <div className="absolute bg-[#a6cffb] inset-[87.5%_52.17%_0_0.4%]" />
      <p className="absolute bottom-1/4 css-ew64yg font-['Poppins:SemiBold',sans-serif] leading-[normal] left-0 not-italic right-[-57.31%] text-[#0e1010] text-[32px] top-0">Design System for Data-Intensive WES Interfaces</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[#0e1010] w-full" data-name="Content">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] h-[32px] justify-center relative shrink-0 text-[18px] w-full">
        <p className="css-4hzbpn leading-[normal]">{`Problem Statement `}</p>
      </div>
      <div className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[0px] w-full">
        <p className="css-4hzbpn mb-0 text-[16px]">
          <span className="leading-[normal]">{`Before implementing a design system, our product suffered from `}</span>
          <span className="decoration-solid font-['Poppins:Regular',sans-serif] leading-[normal] not-italic underline">UI inconsistencies, totally different color system in dark/light modes, accessibility issues, and inefficiencies</span>
          <span className="leading-[normal]">{` (1) in design and development. The absence of standardized components led to:`}</span>
        </p>
        <ol className="css-8097nc mb-0" start="1">
          <li className="css-4hzbpn mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[normal] text-[16px]">Developers recreating similar components multiple times.</span>
          </li>
          <li className="css-4hzbpn mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[normal] text-[16px]">Frequent back-and-forth between designers and developers to clarify colors and component states.</span>
          </li>
          <li className="css-4hzbpn ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[normal] text-[16px]">Increased debugging efforts due to inconsistent implementation.</span>
          </li>
        </ol>
        <p className="css-4hzbpn leading-[normal] mb-0 text-[16px]">&nbsp;</p>
        <p className="css-4hzbpn text-[16px]">
          <span className="leading-[normal]">{`We performed a `}</span>
          <span className="decoration-solid leading-[normal] underline">heuristic analysis</span>
          <span className="leading-[normal]">{` that highlighted these inconsistencies and shared our findings with stakeholders. This analysis, combined with before-and-after visual comparisons, demonstrated the need for a unified design system.`}</span>
        </p>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[#0e1010] w-full" data-name="Content">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] h-[32px] justify-center relative shrink-0 text-[18px] w-full">
        <p className="css-4hzbpn leading-[normal]">Impact</p>
      </div>
      <div className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[0px] text-[16px] w-full">
        <p className="css-4hzbpn leading-[normal] mb-0">Initially, stakeholders were hesitant to invest in a design system because there was no drastic visual change. To shift the conversation, we focused on efficiency gains and measurable impact:</p>
        <ul className="list-disc">
          <li className="css-4hzbpn mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="decoration-solid font-['Poppins:Regular',sans-serif] leading-[normal] not-italic underline">Upfront Component Creation</span>
            <span className="leading-[normal]">{` – Developers now build reusable components first, rather than designing screens individually, streamlining the development process.`}</span>
          </li>
          <li className="css-4hzbpn mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="decoration-solid font-['Poppins:Regular',sans-serif] leading-[normal] not-italic underline">Standardized Colors</span>
            <span className="leading-[normal]">{` – Eliminated the need to manually check and reassign colors for each screen.`}</span>
          </li>
          <li className="css-4hzbpn mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="decoration-solid font-['Poppins:Regular',sans-serif] leading-[normal] not-italic underline">Time Savings</span>
            <span className="leading-[normal]">{` – Screen development time was reduced by 50%, and when factoring in the effort to create reusable components, we estimated an overall 20% reduction in development time by minimizing context switching.`}</span>
          </li>
          <li className="css-4hzbpn ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="decoration-solid font-['Poppins:Regular',sans-serif] leading-[normal] not-italic underline">Simplified Debugging</span>
            <span className="leading-[normal]">{` – Components and colors can now be edited from a single source, reducing errors and rework.`}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-[#0e1010] w-full" data-name="Content">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] h-[32px] justify-center leading-[0] relative shrink-0 text-[18px] w-full">
        <p className="css-4hzbpn leading-[normal]">{`The Team `}</p>
      </div>
      <p className="css-4hzbpn font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] w-full">{`Design Team - 1 Interaction Designer (Me), 1 Visual Designer `}</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[64px] top-[160px] w-[928px]">
      <div className="absolute bg-[rgba(237,221,132,0.3)] h-[31px] left-[-7px] top-0 w-[194px]" />
      <div className="absolute bg-[rgba(237,221,132,0.3)] h-[31px] left-[-7px] top-[300px] w-[88px]" />
      <div className="absolute bg-[rgba(237,221,132,0.3)] h-[31px] left-[-7px] top-[600px] w-[111px]" />
      <Content />
      <Content1 />
      <Content2 />
    </div>
  );
}

function Content3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[64px] top-[calc(66.67%+20px)] w-[745px]" data-name="Content">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#0e1010] text-[18px] w-full">
        <p className="css-4hzbpn leading-[normal]">Glimpse of Heuristic Analysis Conducted:</p>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#fdfdfd] relative size-full" data-name="26">
      <Footer />
      <Heading />
      <Frame />
      <Content3 />
      <div className="absolute flex h-[4px] items-center justify-center left-[64px] top-[calc(66.67%-7px)] w-[1522px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[-90deg]">
          <div className="bg-[rgba(166,207,251,0.35)] h-[1522px] w-[4px]" />
        </div>
      </div>
      <div className="absolute h-[652px] left-[calc(33.33%+494px)] top-[160px] w-[542px]" data-name="image 23">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage23} />
      </div>
      <div className="absolute h-[337px] left-[calc(33.33%+191px)] top-[calc(66.67%+10px)] w-[720px]" data-name="image 24">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage24} />
      </div>
      <div className="absolute h-[276px] left-[75px] top-[calc(66.67%+62px)] w-[551px]" data-name="image 25">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage25} />
      </div>
    </div>
  );
}