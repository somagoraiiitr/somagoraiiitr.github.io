import imgRaptor1 from "figma:asset/fbc48c00a8609f4c9954eb43e06c4569b24266f9.png";
import imgImage40 from "figma:asset/ba4144f6f7cd924d0ea8687e6607142fe74a65e0.png";
import imgImage89 from "figma:asset/69a1f39853740db8bdacbf39bc0ecf211a3e2b4a.png";

function Footer() {
  return (
    <div className="absolute border-[#d1b3ff] border-solid border-t font-['Poppins:Medium_Italic',sans-serif] h-[30px] italic leading-[0] left-[64px] text-[#0e1010] text-[12px] top-[calc(100%-64px)] w-[1522px]" data-name="Footer">
      <div className="absolute flex flex-col inset-[calc(30%-0.7px)_51.05%_calc(10%+0.1px)_0] justify-center">
        <ol start="3">
          <li className="ms-[18px] whitespace-pre-wrap">
            <span className="leading-[normal]">Physical-to-Digital Monitoring for Robotic Systems</span>
          </li>
        </ol>
      </div>
      <div className="absolute flex flex-col inset-[calc(30%-0.7px)_0_calc(10%+0.1px)_51.05%] justify-center text-right">
        <p className="leading-[normal] whitespace-pre-wrap">Page - 7</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[64px] left-[64px] top-[64px] w-[506px]" data-name="Heading">
      <div className="absolute bg-[#b8eec7] inset-[87.5%_52.17%_0_0.4%]" />
      <p className="absolute bottom-1/4 font-['Poppins:SemiBold',sans-serif] leading-[normal] left-0 not-italic right-[-63.44%] text-[#0e1010] text-[32px] top-0">Physical-to-Digital Monitoring for Robotic Systems</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[#0e1010] w-full" data-name="Content">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] h-[32px] justify-center relative shrink-0 text-[18px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">{`Problem Statement `}</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[0px] text-[16px] w-full whitespace-pre-wrap">
        <span className="leading-[normal]">{`Robotic fulfillment warehouses function as tightly coupled physical systems, but existing software represents them as `}</span>
        <span className="decoration-solid leading-[normal] underline">fragmented data streams with little operational context</span>
        <span className="leading-[normal]">{`. Failures occur in physical space, such as stalled robots or blocked conveyors, yet managers must interpret abstract logs and metrics to understand what is happening and where. This `}</span>
        <span className="decoration-solid leading-[normal] underline">gap between physical operations and digital visibility</span>
        <span className="leading-[normal]">{` makes it difficult to identify bottlenecks, understand system impact, and act quickly, `}</span>
        <span className="decoration-solid leading-[normal] underline">increasing cognitive load and causing delays</span>
        <span className="leading-[normal]">{` that directly affect throughput and reliability.`}</span>
      </p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[#0e1010] w-full" data-name="Content">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] h-[32px] justify-center relative shrink-0 text-[18px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Solution Implemented</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[0px] text-[16px] w-full whitespace-pre-wrap">
        <span className="leading-[normal]">{`We designed a real-time physical-to-digital monitoring system that translates `}</span>
        <span className="decoration-solid leading-[normal] underline">live robotic operations into a clear, spatially grounded digital view</span>
        <span className="leading-[normal]">{` of the warehouse. The `}</span>
        <span className="decoration-solid leading-[normal] underline">interface mirrors the physical layout</span>
        <span className="leading-[normal]">{` and flow of RAPTOR systems, using visual states and progressive disclosure to surface system health, failures, and dependencies at a glance. Managers can move from system-level awareness to device-level diagnostics without losing context, while operators use optimized, touch-friendly PTL interfaces for fast execution on the floor. By aligning digital representation with physical behavior, the system enables faster understanding, quicker decisions, and confident action across roles.`}</span>
      </p>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[#0e1010] w-full" data-name="Content">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] h-[32px] justify-center relative shrink-0 text-[18px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">{`The Team `}</p>
      </div>
      <div className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[0px] text-[16px] w-full whitespace-pre-wrap">
        <p className="leading-[normal] mb-0">{`Design Team - 1 Interaction Designer (Me), 1 Visual Designer `}</p>
        <p className="leading-[normal] mb-0">Product Team - 1 Product Manager</p>
        <p>
          <span className="leading-[normal]">{`Development Team - 1 `}</span>
          <span className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic">Database Architect,</span>
          <span className="leading-[normal]">{` 2 Front-end Engineers, 3 Back-end Engineers, 1 QA Engineer`}</span>
        </p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[64px] top-[160px] w-[936px]">
      <div className="absolute bg-[rgba(237,221,132,0.3)] h-[31px] left-[-7px] top-0 w-[194px]" />
      <div className="absolute bg-[rgba(237,221,132,0.3)] h-[31px] left-[-7px] top-[204px] w-[225px]" />
      <div className="absolute bg-[rgba(237,221,132,0.3)] h-[31px] left-[-7px] top-[432px] w-[107px]" />
      <Content />
      <Content1 />
      <Content2 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[#0e1010] w-full" data-name="Content">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] h-[32px] justify-center relative shrink-0 text-[18px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Context</p>
      </div>
      <div className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[0px] text-[16px] w-full whitespace-pre-wrap">
        <p className="mb-0">
          <span className="leading-[normal]">Raptor system (</span>
          <span className="decoration-solid font-['Poppins:Regular',sans-serif] leading-[normal] not-italic underline">Robotic Arm Picking and Order Release</span>
          <span className="leading-[normal]">) is</span>
        </p>
        <p className="leading-[normal] mb-0">designed to automate the fulfillment of mixed (rainbow) pallets for distribution. ​</p>
        <p className="leading-[normal] mb-0">&nbsp;</p>
        <p className="leading-[normal] mb-0">This involves using robotic arms to pick and place items onto</p>
        <p className="leading-[normal] mb-0">pallets based on orders received from the Host Warehouse</p>
        <p className="leading-[normal]">Management System (WMS).</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[64px] top-[calc(33.33%+29.33px)] w-[497px]">
      <div className="absolute bg-[rgba(237,221,132,0.3)] h-[31px] left-[-7px] top-0 w-[93px]" />
      <Content3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex gap-[120px] items-center left-[74px] top-[calc(66.67%+109.67px)]">
      <div className="h-[409px] relative shrink-0 w-[541px]" data-name="RAPTOR 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRaptor1} />
      </div>
      <div className="h-[306px] relative shrink-0 w-[385px]" data-name="image 40">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage40} />
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#fdfdfd] relative size-full" data-name="50">
      <Footer />
      <Heading />
      <Frame />
      <Frame1 />
      <Frame2 />
      <div className="absolute h-[468.5px] left-[74px] top-[calc(33.33%+311.33px)] w-[953px]" data-name="image 89">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage89} />
      </div>
    </div>
  );
}