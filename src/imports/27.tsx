import imgImage27 from "figma:asset/72e5e857a14b6c92a594324b0a558d6f6e31585d.png";
import imgImage28 from "figma:asset/2462619ef57c532b7ba31941a7b637c0af0a7d56.png";

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
        <p className="css-4hzbpn leading-[normal]">Page - 18</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[44px] left-[64px] top-[64px] w-[506px]" data-name="Heading-3">
      <div className="absolute bg-[#a6cffb] inset-[90.91%_52.17%_0_0.4%]" />
      <p className="absolute css-ew64yg font-['Poppins:SemiBold',sans-serif] inset-[0_28.26%_18.18%_0] leading-[normal] not-italic text-[#0e1010] text-[24px]">Old UI vs New Standardised UI</p>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#fdfdfd] relative size-full" data-name="27">
      <Footer />
      <Heading />
      <div className="absolute h-[492px] left-[64px] top-[132px] w-[1000px]" data-name="image 27">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage27} />
      </div>
      <div className="absolute h-[514px] left-[64px] top-[calc(33.33%+236px)] w-[1018px]" data-name="image 28">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage28} />
      </div>
    </div>
  );
}