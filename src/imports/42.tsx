import imgImage71 from "figma:asset/fa7df537c7151d1f75d15616c2272907c8e2c44b.png";
import imgImage69 from "figma:asset/af065e504793cd19a410b5c3ef21d7b6bd6e6491.png";
import imgImage70 from "figma:asset/8e6ae5a5427c835860a45b90b494549d7910f710.png";

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Content">
      <div className="font-['Poppins:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#0e1010] text-[0px] text-[16px] w-full whitespace-pre-wrap">
        <p className="mb-0">
          <span className="leading-[normal]">{`For the Control Tower design system, we initially tried to extend the existing WES system by adding modes. However, since Control Tower was a new product with `}</span>
          <span className="decoration-solid font-['Poppins:Regular',sans-serif] leading-[normal] not-italic underline">evolving needs</span>
          <span className="leading-[normal]">{`, and `}</span>
          <span className="decoration-solid font-['Poppins:Regular',sans-serif] leading-[normal] not-italic underline">WES had limited flexibility</span>
          <span className="leading-[normal]">
            , this approach introduced unnecessary complexity.
            <br aria-hidden="true" />
            <br aria-hidden="true" />
            {`We ultimately decided to `}
          </span>
          <span className="decoration-solid font-['Poppins:Regular',sans-serif] leading-[normal] not-italic underline">build a separate design system</span>
          <span className="leading-[normal]">{`, using the WES foundation where possible but allowing for `}</span>
          <span className="decoration-solid font-['Poppins:Regular',sans-serif] leading-[normal] not-italic underline">incremental, product-specific improvements</span>
          <span className="leading-[normal]">. This gave us the freedom to tailor the system to Control Tower’s unique workflows while maintaining consistency across the broader platform.</span>
        </p>
        <p className="leading-[normal]">&nbsp;</p>
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
      <p className="font-['Poppins:Italic',sans-serif] italic leading-[normal] relative shrink-0 text-[#0e1010] text-[16px] w-full whitespace-pre-wrap">{`The Light and  Dark Theme definition for the Variable System`}</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[64px] top-[calc(33.33%+463.67px)] w-[745px]">
      <Content1 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[66px] top-[102px]">
      <div className="absolute bg-[rgba(250,227,103,0.3)] h-[31px] left-[66px] top-[102px] w-[379px]" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] left-[75px] not-italic text-[#0e1010] text-[18px] top-[117.5px] whitespace-nowrap">
        <p className="leading-[normal]">Control Tower Design System</p>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#fdfdfd] relative size-full" data-name="42">
      <div className="absolute h-[543px] left-[64px] top-[calc(33.33%+525.67px)] w-[751px]" data-name="image 71">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage71} />
      </div>
      <Frame />
      <Frame1 />
      <div className="absolute h-[176px] left-[66px] top-[382px] w-[609px]" data-name="image 69">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage69} />
      </div>
      <div className="absolute h-[446px] left-[66px] top-[570px] w-[1319px]" data-name="image 70">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage70} />
      </div>
      <Group />
    </div>
  );
}