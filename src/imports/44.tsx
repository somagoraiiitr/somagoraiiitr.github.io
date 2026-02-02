import imgImage73 from "figma:asset/3f6deb6db567dcfc1efd525a9b29db35c2666208.png";

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Content">
      <div className="font-['Poppins:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#0e1010] text-[0px] w-full whitespace-pre-wrap">
        <p className="mb-0 text-[16px]">
          <span className="leading-[normal]">{`We had limited internal familiarity with Figma’s latest features, so we had to self-learn through trial and error. Since off-the-shelf component libraries didn’t fit our needs, we had to `}</span>
          <span className="decoration-solid font-['Poppins:Regular',sans-serif] leading-[normal] not-italic underline">build everything custom</span>
          <span className="leading-[normal]">
            , which demanded extra time and attention to detail.
            <br aria-hidden="true" />
            <br aria-hidden="true" />
            {`Figma’s Dark & Light mode capabilities turned out to be a game changer, `}
          </span>
          <span className="decoration-solid font-['Poppins:Regular',sans-serif] leading-[normal] not-italic underline">helping us cut design time by nearly 50%</span>
          <span className="leading-[normal]">. Starting small, layer by layer, helped us stay organized and build a scalable, reliable design system without overwhelming the team.</span>
        </p>
        <p className="leading-[normal] mb-0 text-[16px]">
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </p>
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

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Content">
      <div className="font-['Poppins:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#0e1010] text-[0px] w-full whitespace-pre-wrap">
        <p className="leading-[normal] mb-0 text-[16px]">&nbsp;</p>
        <ol className="css-8097nc mb-0" start="1">
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[normal] text-[16px]">We continue to update the design system as needed based on product changes.</span>
          </li>
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[normal] text-[16px]">We plan to modularize parts of the system so that future products can reuse core components instead of creating entirely new design systems.</span>
          </li>
          <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="leading-[normal] text-[16px]">Exploring better integration methods to streamline adoption across different products. Currently we have two different design systems as there were different interactions/custom components for each product.</span>
          </li>
        </ol>
        <p className="leading-[normal] mb-0 text-[16px]">&nbsp;</p>
        <p className="text-[16px]">
          <span className="leading-[normal]">{`By shifting from a `}</span>
          <span className="decoration-solid font-['Poppins:Regular',sans-serif] leading-[normal] not-italic underline">project-based to a product-based approach,</span>
          <span className="leading-[normal]">{` our design system has led to `}</span>
          <span className="decoration-solid font-['Poppins:Regular',sans-serif] leading-[normal] not-italic underline">faster development, fewer errors, and a more scalable UI framework.</span>
          <span className="leading-[normal]">{` While there were challenges, the impact on efficiency and maintainability has made this initiative a game changer for our team.`}</span>
        </p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[64px] top-[calc(66.67%+220.33px)] w-[745px]">
      <Content1 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[66px] top-[102px]">
      <div className="absolute bg-[rgba(250,227,103,0.3)] h-[31px] left-[66px] top-[102px] w-[379px]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] left-[75px] not-italic text-[#0e1010] text-[18px] top-[117.5px] whitespace-nowrap">
        <p className="leading-[normal]">{`Challenges & Key Learnings`}</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[66px] top-[calc(66.67%+156.33px)]">
      <div className="absolute bg-[rgba(250,227,103,0.3)] h-[31px] left-[66px] top-[calc(66.67%+156.33px)] w-[379px]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] left-[75px] not-italic text-[#0e1010] text-[18px] top-[calc(66.67%+171.83px)] whitespace-nowrap">
        <p className="leading-[normal]">{`Future Evolution & Scalability`}</p>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#fdfdfd] relative size-full" data-name="44">
      <div className="absolute h-[688px] left-[66px] top-[570px] w-[1612px]" data-name="image 73">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage73} />
      </div>
      <Frame />
      <Frame1 />
      <Group />
      <Group1 />
    </div>
  );
}