import clsx from "clsx";
import imgRectangle from "figma:asset/206d307321951b17d9de7f5326d7c3154226c031.png";
import imgImage42 from "figma:asset/87f4259206f6a11e78461c558dfba0341783435c.png";
import imgImage56 from "figma:asset/85a491ffca51657a659f941bdb4955b266b5cf6b.png";
type Component19HelperProps = {
  additionalClassNames?: string;
};

function Component19Helper({ additionalClassNames = "" }: Component19HelperProps) {
  return (
    <div style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties} className={clsx("absolute flex h-[46px] items-center justify-center left-[54px] w-[279px]", additionalClassNames)}>
      <div className="flex-none rotate-[270deg]">
        <div className="bg-[rgba(166,207,251,0.25)] h-[279px] w-[46px]" />
      </div>
    </div>
  );
}
type ContentTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ContentText({ text, additionalClassNames = "" }: ContentTextProps) {
  return (
    <div className={clsx("absolute content-stretch flex flex-col gap-[4px] items-start left-[64px] w-[745px]", additionalClassNames)}>
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#0e1010] text-[18px] w-full">
        <p className="leading-[normal]">{text}</p>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#fdfdfd] relative size-full" data-name="19">
      <Component19Helper additionalClassNames="top-[calc(33.33%+186px)]" />
      <Component19Helper additionalClassNames="top-[calc(66.67%+62px)]" />
      <div className="absolute border-[#d1b3ff] border-[1px_0px_0px] border-solid font-['Poppins:Medium_Italic',sans-serif] h-[30px] italic leading-[0] left-[64px] text-[#0e1010] text-[12px] top-[calc(100%-64px)] w-[1522px]" data-name="Footer">
        <div className="absolute flex flex-col inset-[calc(30%-1px)_51.05%_10%_0] justify-center">
          <ol className="list-decimal" start="1">
            <li className="ms-[18px]">
              <span className="leading-[normal]">Designing the Warehouse Control Tower Ecosystem</span>
            </li>
          </ol>
        </div>
        <div className="absolute flex flex-col inset-[calc(30%-1px)_0_10%_51.05%] justify-center text-right">
          <p className="leading-[normal]">Page - 1</p>
        </div>
      </div>
      <div className="absolute h-[64px] left-[64px] top-[64px] w-[506px]" data-name="Heading">
        <div className="absolute bg-[#f4b8b7] inset-[87.5%_52.17%_0_0.4%]" />
        <p className="absolute bottom-1/4 font-['Poppins:SemiBold',sans-serif] leading-[normal] left-0 not-italic right-[-65.81%] text-[#0e1010] text-[32px] text-nowrap top-0">Designing the Warehouse Control Tower Ecosystem</p>
      </div>
      <div className="absolute h-[353px] left-[calc(33.33%+467px)] top-[160px] w-[569px]" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[193%] left-[-17.13%] max-w-none top-[-29.85%] w-[134.26%]" src={imgRectangle} />
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[64px] top-[160px] w-[936px]">
        <div className="absolute bg-[rgba(237,221,132,0.3)] h-[31px] left-[-7px] top-0 w-[194px]" />
        <div className="absolute bg-[rgba(237,221,132,0.3)] h-[31px] left-[-7px] top-[132px] w-[216px]" />
        <div className="absolute bg-[rgba(237,221,132,0.3)] h-[31px] left-[-7px] top-[265px] w-[107px]" />
        <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[#0e1010] w-full" data-name="Content">
          <div className="flex flex-col font-['Poppins:Medium',sans-serif] h-[32px] justify-center relative shrink-0 text-[18px] w-full">
            <p className="leading-[normal]">{`Problem Statement `}</p>
          </div>
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[0px] text-[16px] w-full">
            <span>{`The warehouse setup process was `}</span>
            <span className="[text-underline-position:from-font] decoration-solid not-italic underline">fragmented</span>
            <span>{` and relied on manual Excel sheets, creating `}</span>
            <span className="[text-underline-position:from-font] decoration-solid not-italic underline">data silos</span>
            <span>{` between sales and developers that led to `}</span>
            <span className="[text-underline-position:from-font] decoration-solid not-italic underline">high error rates</span>
            <span>{` and `}</span>
            <span className="[text-underline-position:from-font] decoration-solid not-italic underline">{`redundant data `}</span>entry. Additionally, clients lacked real-time visibility and control, forcing them to rely on slow support tickets for even minor dashboard adjustments or report generation.
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[#0e1010] w-full" data-name="Content">
          <div className="flex flex-col font-['Poppins:Medium',sans-serif] h-[32px] justify-center relative shrink-0 text-[18px] w-full">
            <p className="leading-[normal]">Solution Implemented</p>
          </div>
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[0px] text-[16px] w-full">
            <span>{`By replacing disconnected workflows with a `}</span>
            <span className="[text-underline-position:from-font] decoration-solid not-italic underline">centralized digital repository</span>
            <span>{`, we enabled transparency, traceability, and real-time validation across the entire project lifecycle. Additionally, we introduced visual process map monitoring that `}</span>
            <span className="[text-underline-position:from-font] decoration-solid not-italic underline">aligned with warehouse mental models.</span>
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[#0e1010] w-full" data-name="Content">
          <div className="flex flex-col font-['Poppins:Medium',sans-serif] h-[32px] justify-center relative shrink-0 text-[18px] w-full">
            <p className="leading-[normal]">{`The Team `}</p>
          </div>
          <div className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[0px] w-full">
            <p className="leading-[normal] mb-0 text-[16px]">Design Team - 1 Product Designer (Me)</p>
            <p className="leading-[normal] mb-0 text-[16px]">Product Team - 1 Product Manager, 1 Scrum Master</p>
            <p className="leading-[normal] text-[16px]">
              <span>{`Development Team - 1 `}</span>
              <span className="font-['Poppins:Regular',sans-serif] not-italic">Database Architect,</span>
              <span>{` 4 Front-end Engineers, 5 Back-end Engineers, 3 QA Engineers`}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="absolute h-[263px] left-[405px] top-[calc(33.33%+180px)] w-[1079px]" data-name="image 42">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage42} />
      </div>
      <div className="absolute h-[305px] left-[411px] top-[calc(66.67%+47px)] w-[1043px]" data-name="image 56">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage56} />
      </div>
      <ContentText text="Existing Process :" additionalClassNames="top-[calc(33.33%+193px)]" />
      <ContentText text="Redesigned Process :" additionalClassNames="top-[calc(66.67%+69px)]" />
      <div className="absolute flex h-[4px] items-center justify-center left-[64px] top-[calc(33.33%+141px)] w-[1522px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="bg-[#e8d8d9] h-[1522px] w-[4px]" />
        </div>
      </div>
    </div>
  );
}