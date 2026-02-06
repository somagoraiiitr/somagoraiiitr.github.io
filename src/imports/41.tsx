import imgImage68 from "figma:asset/be6ea68423a5f1295e91568c4937ec11b5cfdc98.png";
import imgImage66 from "figma:asset/d2861d12c4c68dcbf0fd1053310fcec39073d726.png";
import imgImage67 from "figma:asset/4503cd99d19f868ef6b2dd74313dc3de7843331e.png";

function Heading() {
  return (
    <div className="absolute h-[44px] left-[64px] top-[28px] w-[506px]" data-name="Heading-3">
      <div className="absolute bg-[#a6cffb] inset-[90.91%_52.17%_0_0.4%]" />
      <p className="absolute font-['Poppins:SemiBold',sans-serif] inset-[0_9.29%_18.18%_0] leading-[normal] not-italic text-[#0e1010] text-[24px]">Design Systems for Different Products</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Content">
      <p className="font-['Poppins:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#0e1010] text-[0px] text-[16px] w-full whitespace-pre-wrap">
        <span className="leading-[normal]">{`Once the WES design system was in place, we began `}</span>
        <span className="decoration-solid leading-[normal] underline">recreating all legacy screens</span>
        <span className="leading-[normal]">{` from the previous design team, which were originally in `}</span>
        <span className="decoration-solid leading-[normal] underline">Adobe XD</span>
        <span className="leading-[normal]">{`. Since the shift to `}</span>
        <span className="decoration-solid leading-[normal] underline">Figma</span>
        <span className="leading-[normal]">{` was necessary, we used this opportunity to rebuild the screens using `}</span>
        <span className="decoration-solid leading-[normal] underline">systemized components</span>
        <span className="leading-[normal]">
          .<br aria-hidden="true" />
          <br aria-hidden="true" />
          {`This involved `}
        </span>
        <span className="decoration-solid leading-[normal] underline">redesigning nearly 780 screens</span>
        <span className="leading-[normal]">{`, ensuring alignment with the new system. The process took around `}</span>
        <span className="decoration-solid leading-[normal] underline">four months</span>
        <span className="leading-[normal]">{`, and significantly improved `}</span>
        <span className="decoration-solid leading-[normal] underline">consistency, scalability, and collaboration</span>
        <span className="leading-[normal]">{` across the product.`}</span>
      </p>
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
        <p className="leading-[normal]">WES Design System</p>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#fdfdfd] relative size-full" data-name="41">
      <div className="absolute h-[550px] left-[64px] top-[calc(33.33%+525.67px)] w-[812px]" data-name="image 68">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage68} />
      </div>
      <Heading />
      <Frame />
      <Frame1 />
      <div className="absolute h-[178px] left-[66px] top-[382px] w-[614px]" data-name="image 66">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage66} />
      </div>
      <div className="absolute h-[413px] left-[66px] top-[570px] w-[1218px]" data-name="image 67">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage67} />
      </div>
      <Group />
    </div>
  );
}