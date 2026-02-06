import imgImage61 from "figma:asset/45a3e7a4ffc7b38a12a0c406789f97bc22747e6d.png";
import imgImage20 from "figma:asset/9fe676518ddce5490d0a73b7850856288b89dd72.png";
import imgImage21 from "figma:asset/1ed332d79c167bc42eb781441994c1318388b5de.png";
type Component35HelperProps = {
  text: string;
  text1: string;
};

function Component35Helper({ text, text1 }: Component35HelperProps) {
  return (
    <li className="leading-[normal] ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[16px]">
      <span className="font-['Poppins:Bold',sans-serif] not-italic">
        {text}
        <br aria-hidden="true" />
      </span>
      {text1}
    </li>
  );
}

export default function Component() {
  return (
    <div className="bg-[#fdfdfd] relative size-full" data-name="35">
      <div className="absolute border-[#d1b3ff] border-[1px_0px_0px] border-solid font-['Poppins:Medium_Italic',sans-serif] h-[30px] italic leading-[0] left-[64px] text-[#0e1010] text-[12px] top-[calc(100%-64px)] w-[1522px]" data-name="Footer">
        <div className="absolute flex flex-col inset-[calc(30%-1px)_51.05%_10%_0] justify-center">
          <ol className="list-decimal" start="1">
            <li className="ms-[18px]">
              <span className="leading-[normal]">Designing the Warehouse Control Tower Ecosystem</span>
            </li>
          </ol>
        </div>
        <div className="absolute flex flex-col inset-[calc(30%-1px)_0_10%_51.05%] justify-center text-right">
          <p className="leading-[normal]">Page - 6</p>
        </div>
      </div>
      <ol className="absolute block font-['Poppins:Regular',sans-serif] leading-[0] left-[64px] list-decimal not-italic text-[#0e1010] text-[0px] top-[calc(33.33%+206px)] w-[745px]" start="1">
        <Component35Helper text="Process Map Monitoring" text1="Provides process-level, real-time monitoring through a diagrammatic view of all defined warehouse workflows. Each process and its components can be evaluated in context, with errors or performance issues immediately flagged in red for quick identification." />
      </ol>
      <ol className="absolute block font-['Poppins:Regular',sans-serif] leading-[0] left-[calc(33.33%+291px)] list-decimal not-italic text-[#0e1010] text-[0px] top-[calc(33.33%+206px)] w-[745px]" start="2">
        <Component35Helper text="AI Assisted Dashboard" text1="Enables users to interact with operational data via an AI chatbot to generate reports, create custom widgets, or retrieve specific tables and data points, reducing manual effort and accelerating access to insights." />
      </ol>
      <div className="absolute h-[437px] left-1/2 top-[132px] translate-x-[-50%] w-[1200px]" data-name="image 61">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage61} />
      </div>
      <div className="absolute h-[44px] left-[64px] top-[64px] w-[506px]" data-name="Heading-3">
        <div className="absolute bg-[#f4b8b7] inset-[90.91%_52.17%_0_0.4%]" />
        <p className="absolute font-['Poppins:SemiBold',sans-serif] inset-[0_45.65%_18.18%_0] leading-[normal] not-italic text-[#0e1010] text-[24px] text-nowrap">Dashboard Monitoring</p>
      </div>
      <div className="absolute h-[441px] left-[64px] top-[calc(33.33%+325px)] w-[745px]" data-name="image 20">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage20} />
      </div>
      <div className="absolute h-[419px] left-[calc(33.33%+291px)] top-[calc(33.33%+325px)] w-[745px]" data-name="image 21">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage21} />
      </div>
      <div className="absolute flex h-[4px] items-center justify-center left-[64px] top-[calc(33.33%+181px)] w-[1522px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="bg-[#e8d8d9] h-[1522px] w-[4px]" />
        </div>
      </div>
    </div>
  );
}