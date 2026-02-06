import imgImage72 from "figma:asset/09da35eac4a056d97f7c1c9a6116a3801a6be2ce.png";

function Heading() {
  return (
    <div className="absolute h-[44px] left-[64px] top-[28px] w-[506px]" data-name="Heading-3">
      <div className="absolute bg-[#a6cffb] inset-[90.91%_52.17%_0_0.4%]" />
      <p className="absolute font-['Poppins:SemiBold',sans-serif] inset-[0_41.11%_18.18%_0] leading-[normal] not-italic text-[#0e1010] text-[24px]">Adoption and Aftermath</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Content">
      <div className="font-['Poppins:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#0e1010] text-[0px] w-full whitespace-pre-wrap">
        <p className="leading-[normal] mb-0 text-[16px]">To ensure seamless adoption, we:</p>
        <ol className="css-8097nc mb-0" start="1">
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[normal] text-[16px]">Conducted a demo call with developers to explain how to fetch colors and components.</span>
          </li>
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[16px]">
            <span className="leading-[normal]">Provided a J</span>
            <span className="decoration-solid font-['Poppins:Regular',sans-serif] leading-[normal] not-italic underline">SON file export</span>
            <span className="leading-[normal]">{` via Figma plugins.`}</span>
          </li>
          <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[16px]">
            <span className="leading-[normal]">{`Developers primarily use the `}</span>
            <span className="decoration-solid font-['Poppins:Regular',sans-serif] leading-[normal] not-italic underline">Dev Mode</span>
            <span className="leading-[normal]">{` or `}</span>
            <span className="decoration-solid font-['Poppins:Regular',sans-serif] leading-[normal] not-italic underline">local library</span>
            <span className="leading-[normal]">{` or `}</span>
            <span className="decoration-solid font-['Poppins:Regular',sans-serif] leading-[normal] not-italic underline">Figma inspect tool</span>
            <span className="leading-[normal]">
              {` to access components.`}
              <br aria-hidden="true" />
              <br aria-hidden="true" />
            </span>
          </li>
        </ol>
        <p className="leading-[normal] mb-0 text-[16px]">&nbsp;</p>
        <p className="leading-[normal] mb-0 text-[16px]">Impact on Development Workflow:</p>
        <ol className="css-8097nc" start="1">
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[16px]">
            <span className="leading-[normal]">{`Common elements like `}</span>
            <span className="decoration-solid font-['Poppins:Regular',sans-serif] leading-[normal] not-italic underline">page headers with contextual action buttons</span>
            <span className="leading-[normal]">{` are now modular, reducing redundancy.`}</span>
          </li>
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[normal] text-[16px]">Text fields were previously inconsistent; now, they are standardized, eliminating repetitive development work.</span>
          </li>
          <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[16px]">
            <span className="leading-[normal]">{`Colors, typography, components are all `}</span>
            <span className="decoration-solid font-['Poppins:Regular',sans-serif] leading-[normal] not-italic underline">standardised</span>
            <span className="leading-[normal]">{` and available in one place.`}</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[64px] top-[166px] w-[745px]">
      <Content />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[66px] top-[102px]">
      <div className="absolute bg-[rgba(250,227,103,0.3)] h-[31px] left-[66px] top-[102px] w-[379px]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] left-[75px] not-italic text-[#0e1010] text-[18px] top-[117.5px] whitespace-nowrap">
        <p className="leading-[normal]">{`Adoption & Developer Collaboration`}</p>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#fdfdfd] relative size-full" data-name="43">
      <div className="absolute h-[1015px] left-[66px] top-[570px] w-[1087px]" data-name="image 72">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage72} />
      </div>
      <Heading />
      <Frame />
      <Group />
      <div className="absolute font-['Poppins:Italic',sans-serif] font-['Poppins:Regular',sans-serif] italic leading-[normal] left-[102px] not-italic text-[0px] text-[16px] text-black top-[calc(66.67%+400.67px)] whitespace-nowrap">
        <p className="mb-0">Developer Feedback</p>
        <p>
          {`"Previously, we had to check for colors on every feature. Now, we can just define once."`}
          <br aria-hidden="true" />
          {`"Components have all the states in one place, do not need to run the prototype every time."`}
          <br aria-hidden="true" />
          {`"Can create the component library at one go, do not have to hunt for the components in every page."`}
        </p>
      </div>
      <div className="absolute bg-[#d9d9d9] h-[96px] left-[78px] top-[calc(66.67%+400.67px)] w-[10px]" />
    </div>
  );
}