import imgImage38 from "figma:asset/94d5c6e5415228cc38ff052dfa73dc7ee32f8df3.png";
import imgImage36 from "figma:asset/76cbe648c5caebbef06b7a852b3754785bc2a394.png";
import imgImage37 from "figma:asset/3b45a4acafe5c200457eb8a1a1807fadf4be3563.png";

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
        <p className="css-4hzbpn leading-[normal]">Page - 21</p>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#fdfdfd] relative size-full" data-name="30">
      <Footer />
      <div className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[66px] not-italic text-[#0e1010] text-[0px] text-[16px] top-[64px] w-[745px]">
        <p className="css-4hzbpn font-['Poppins:Bold',sans-serif] mb-0">{`6. Right & Navigation Panel`}</p>
        <p className="css-4hzbpn">We designed a flexible left navigation panel to support multiple nested groups and a versatile right panel used extensively across screens for context-specific interactions.</p>
      </div>
      <div className="absolute font-['Poppins:Regular',sans-serif] leading-[0] left-[calc(33.33%+291px)] not-italic text-[#0e1010] text-[0px] top-[64px] w-[745px]">
        <ol className="css-8097nc mb-0" start="7">
          <li className="css-4hzbpn ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="font-['Poppins:Bold',sans-serif] leading-[normal] not-italic text-[16px]">Custom Components</span>
          </li>
        </ol>
        <p className="css-4hzbpn leading-[normal] text-[16px]">We created custom components to support WMS-specific workflows, with an emphasis on nested components to promote reusability-for example, smaller card components reused within more complex Picking Cards. We also created widgets for dashboard.</p>
      </div>
      <div className="absolute h-[726px] left-[calc(33.33%+291px)] top-[184px] w-[684px]" data-name="image 38">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage38} />
      </div>
      <div className="absolute h-[443px] left-[66px] top-[184px] w-[743px]" data-name="image 36">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage36} />
      </div>
      <div className="absolute h-[283px] left-[64px] top-[calc(33.33%+250px)] w-[745px]" data-name="image 37">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage37} />
      </div>
    </div>
  );
}