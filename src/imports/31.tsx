import imgImage63 from "figma:asset/00b1eaf3e2d70bd675e72ee90f7a17aa0b4cd0f3.png";
import imgImage9 from "figma:asset/540b03b56924be33b0f06677c5325ad90dbf684a.png";
import imgImage11 from "figma:asset/876330a460ee8c780170d681f325fe344d8102d5.png";
type Component31HelperProps = {
  text: string;
  text1: string;
};

function Component31Helper({ text, text1 }: Component31HelperProps) {
  return (
    <li className="leading-[normal] ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[16px]">
      <span className="font-['Poppins:Bold',sans-serif] not-italic">{text}</span>
      <span>
        <br aria-hidden="true" />
        {text1}
      </span>
    </li>
  );
}

export default function Component() {
  return (
    <div className="bg-[#fdfdfd] relative size-full" data-name="31">
      <div className="absolute border-[#d1b3ff] border-[1px_0px_0px] border-solid font-['Poppins:Medium_Italic',sans-serif] h-[30px] italic leading-[0] left-[64px] text-[#0e1010] text-[12px] top-[calc(100%-64px)] w-[1522px]" data-name="Footer">
        <div className="absolute flex flex-col inset-[calc(30%-1px)_51.05%_10%_0] justify-center">
          <ol className="list-decimal" start="1">
            <li className="ms-[18px]">
              <span className="leading-[normal]">Designing the Warehouse Control Tower Ecosystem</span>
            </li>
          </ol>
        </div>
        <div className="absolute flex flex-col inset-[calc(30%-1px)_0_10%_51.05%] justify-center text-right">
          <p className="leading-[normal]">Page - 2</p>
        </div>
      </div>
      <ol className="absolute block font-['Poppins:Regular',sans-serif] leading-[0] left-[64px] list-decimal not-italic text-[#0e1010] text-[0px] top-[calc(33.33%+125px)] w-[745px]" start="1">
        <Component31Helper text="From Fixed UI to Parameter Management:" text1="Instead of hardcoding configurations, we designed a granular settings panel where users could adjust warehouse parameters, eliminating dependency ondevs for each change." />
      </ol>
      <ol className="absolute block font-['Poppins:Regular',sans-serif] h-[72px] leading-[0] left-[calc(33.33%+291px)] list-decimal not-italic text-[#0e1010] text-[0px] top-[calc(33.33%+125px)] w-[745px]" start="2">
        <Component31Helper text="Introducing the Setup Section:" text1="Created a central repository where users could manage devices, systems, and other parameters. This allowed new warehouses to self-onboard without manual setup." />
      </ol>
      <div className="absolute h-[350px] left-1/2 top-[132px] translate-x-[-50%] w-[1200px]" data-name="image 63">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage63} />
      </div>
      <div className="absolute h-[474px] left-[64px] top-[calc(33.33%+221px)] w-[745px]" data-name="image 9">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage9} />
      </div>
      <div className="absolute h-[458px] left-[calc(33.33%+291px)] top-[calc(33.33%+221px)] w-[745px]" data-name="image 11">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage11} />
      </div>
      <div className="absolute h-[44px] left-[64px] top-[64px] w-[506px]" data-name="Heading-3">
        <div className="absolute bg-[#f4b8b7] inset-[90.91%_52.17%_0_0.4%]" />
        <p className="absolute font-['Poppins:SemiBold',sans-serif] inset-[0_14.23%_18.18%_0] leading-[normal] not-italic text-[#0e1010] text-[24px] text-nowrap">{`Parameter Management and Setup `}</p>
      </div>
      <div className="absolute flex h-[4px] items-center justify-center left-[64px] top-[calc(33.33%+100px)] w-[1522px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="bg-[#e8d8d9] h-[1522px] w-[4px]" />
        </div>
      </div>
    </div>
  );
}