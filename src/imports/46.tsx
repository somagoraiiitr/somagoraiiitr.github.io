import imgImage62 from "figma:asset/fd325cb64e60ef317dbb3118707ec5531b011a99.png";
import imgMs11 from "figma:asset/a7394d68f48341f939e62edd69c10c64107800b7.png";

function Heading() {
  return (
    <div className="absolute h-[64px] left-[64px] top-[64px] w-[506px]" data-name="Heading">
      <div className="absolute bg-[#a6cffb] inset-[87.5%_52.17%_0_0.4%]" />
      <p className="absolute bottom-1/4 font-['Poppins:SemiBold',sans-serif] leading-[normal] left-0 not-italic right-[-0.99%] text-[#0e1010] text-[32px] top-0">Optimizing Teams Notifications</p>
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
        <span className="leading-[normal]">{`Microsoft Teams treated every notification as urgent, creating a "noisy" environment where users struggled to `}</span>
        <span className="decoration-solid leading-[normal] underline">distinguish signal from noise.</span>
        <span className="leading-[normal]">{` This lack of hierarchy forced users to `}</span>
        <span className="decoration-solid leading-[normal] underline">constantly context-switch</span>
        <span className="leading-[normal]">{` to triage scattered messages, often leading to missed critical updates and high cognitive fatigue.`}</span>
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
        <span className="leading-[normal]">{`Explored four distinct conceptual directions to reduce cognitive load, moving beyond standard alerts. Concepts included a "Pull" system for `}</span>
        <span className="decoration-solid leading-[normal] underline">batching low-priority</span>
        <span className="leading-[normal]">{` summaries , a visual hierarchy model using color cues , bulk management tools for granular control , and source-anchored windows to preserve workflow context.`}</span>
      </p>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-[#0e1010] w-full" data-name="Content">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] h-[32px] justify-center leading-[0] relative shrink-0 text-[18px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">{`The Team `}</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] w-full whitespace-pre-wrap">{`Product Team - 1 Product Intern (Me), 1 Product Manager (Mentor),  1 Product Lead`}</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[64px] top-[160px] w-[736px]">
      <div className="absolute bg-[rgba(237,221,132,0.3)] h-[31px] left-[-7px] top-0 w-[194px]" />
      <div className="absolute bg-[rgba(237,221,132,0.3)] h-[31px] left-[-7px] top-[156px] w-[216px]" />
      <div className="absolute bg-[rgba(237,221,132,0.3)] h-[31px] left-[-7px] top-[313px] w-[107px]" />
      <Content />
      <Content1 />
      <Content2 />
    </div>
  );
}

function Content3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[calc(50%+12px)] not-italic text-[#0e1010] top-[993px] w-[749px]" data-name="Content">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] h-[32px] justify-center leading-[0] relative shrink-0 text-[18px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">{`Target Persona - Enterprise Users and SMC Corporate `}</p>
      </div>
      <div className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Solving for 90th Percentile of Enterprise Users and SMC Corporate Users, as they receive notifications beyond a limit that is considered easily consumable (based on user conversations). `}</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[747px]" data-name="Content">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] h-[32px] justify-center leading-[0] relative shrink-0 text-[18px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Issue 1: Teams is screaming for attention</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] w-full whitespace-pre-wrap">{`Research indicates that the average time spent on any screen before switching is a mere 47 seconds due to constant self-interruption via checking email, chat, and/or social media (ref: Attention Span by Gloria Mark).  `}</p>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[747px]" data-name="Content">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] h-[32px] justify-center leading-[0] relative shrink-0 text-[18px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Issue 2: Triage is painful: too many places, too many clicks</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] w-full whitespace-pre-wrap">{`“It’s also hard to find things and keep them organized: information is fragmented and scattered in different places. Finally, there is a lot of context switching, moving from channel to channel, getting context and making sense of everything.  A significant part of the issue here is this multi-channel info often is bound together only in users’ minds with the mental glue of memory.” `}</p>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[747px]" data-name="Content">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] h-[32px] justify-center leading-[0] relative shrink-0 text-[18px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">{`Issue 3: Important messages are missed `}</p>
      </div>
      <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] w-full whitespace-pre-wrap">{`There is a flood of information through multiple channels (Teams chats, emails, meetings, documents, task/to-do lists).  It can be very difficult to stay on top of things. `}</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[64px] not-italic text-[#0e1010] top-[656px] w-[769px]">
      <Content4 />
      <Content5 />
      <Content6 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#fdfdfd] relative size-full" data-name="46">
      <Heading />
      <div className="absolute h-[348px] left-[calc(50%+108px)] top-[128px] w-[558px]" data-name="image 62">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[100.14%] left-[-8.42%] max-w-none top-[-0.07%] w-[112.37%]" src={imgImage62} />
        </div>
      </div>
      <Frame />
      <Content3 />
      <div className="absolute flex h-[4px] items-center justify-center left-[64px] top-[583px] w-[1522px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[rgba(166,207,251,0.3)] h-[1522px] w-[4px]" />
        </div>
      </div>
      <div className="absolute h-[308px] left-[calc(50%+12px)] top-[656px] w-[749px]" data-name="MS1 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMs11} />
      </div>
      <div className="absolute bg-[rgba(237,221,132,0.3)] h-[31px] left-[57px] top-[656px] w-[395px]" />
      <div className="absolute bg-[rgba(237,221,132,0.3)] h-[31px] left-[57px] top-[796px] w-[557px]" />
      <div className="absolute bg-[rgba(237,221,132,0.3)] h-[31px] left-[57px] top-[985px] w-[563px]" />
      <Frame1 />
    </div>
  );
}