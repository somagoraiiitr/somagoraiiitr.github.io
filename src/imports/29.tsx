import imgImage32 from "figma:asset/92d9349850d9caffdf42abee1832e610a1cc0296.png";
import imgImage33 from "figma:asset/48b5983df93ac62aa9cb8b81875cf57863ece5ed.png";
import imgImage34 from "figma:asset/5c2b1c9de59793ecbb055f269b157e6dbe9205c0.png";
import imgImage35 from "figma:asset/871b88993a7a5b35e058a73ef2a389c516acf8aa.png";

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
        <p className="css-4hzbpn leading-[normal]">Page - 20</p>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#fdfdfd] relative size-full" data-name="29">
      <Footer />
      <div className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[66px] not-italic text-[#0e1010] text-[16px] top-[64px] w-[745px]">
        <p className="css-4hzbpn mb-0">Next, we adapted the chosen colors into defined tokens for both light and dark modes. The process was iterative and occasionally messy, involving multiple rounds of testing and adjustments to ensure consistency, contrast, and usability across various UI components.</p>
        <p className="css-4hzbpn">&nbsp;</p>
      </div>
      <div className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[calc(33.33%+291px)] not-italic text-[#0e1010] text-[0px] text-[16px] top-[64px] w-[745px]">
        <p className="css-4hzbpn font-['Poppins:Bold',sans-serif] mb-0">{`3. Dark & Light Mode Definition in Figma`}</p>
        <p className="css-4hzbpn mb-0">{`We started by creating a set of primitive colors and aliases tailored for both light and dark modes.  Next, we ran contrast accessibility checks across combinations to ensure compliance and readability. `}</p>
        <p className="css-4hzbpn">Finally, we mapped colors systematically across modes to enable smooth switching between light and dark modes, ensuring a consistent and accessible experience throughout.</p>
      </div>
      <div className="absolute h-[286px] left-[66px] top-[185px] w-[744px]" data-name="image 32">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage32} />
      </div>
      <div className="absolute h-[388px] left-[calc(33.33%+291px)] top-[232px] w-[745px]" data-name="image 33">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage33} />
      </div>
      <div className="absolute flex h-[4px] items-center justify-center left-[64px] top-[calc(33.33%+247px)] w-[1522px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[-90deg]">
          <div className="bg-[rgba(166,207,251,0.35)] h-[1522px] w-[4px]" />
        </div>
      </div>
      <div className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[66px] not-italic text-[#0e1010] text-[0px] text-[16px] top-[calc(33.33%+299px)] w-[745px]">
        <p className="css-4hzbpn font-['Poppins:Bold',sans-serif] mb-0">4. Component Creation</p>
        <p className="css-4hzbpn">Based on M3 guidelines, we designed components with variants and states.</p>
      </div>
      <div className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[calc(33.33%+291px)] not-italic text-[#0e1010] text-[0px] text-[16px] top-[calc(33.33%+299px)] w-[745px]">
        <p className="css-4hzbpn font-['Poppins:Bold',sans-serif] mb-0">5. AG Grid Alignment</p>
        <p className="css-4hzbpn">We initially explored using AG Grid’s Figma file for table components but ultimately built our own for greater design flexibility. This gave us control over custom fields, states, and action buttons, enabling a more tailored experience for our workflows.</p>
      </div>
      <div className="absolute h-[282px] left-[64px] top-[calc(33.33%+371px)] w-[743px]" data-name="image 34">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage34} />
      </div>
      <div className="absolute h-[234px] left-[calc(33.33%+291px)] top-[calc(66.67%-6px)] w-[745px]" data-name="image 35">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[209.61%] left-0 max-w-none top-[-0.1%] w-full" src={imgImage35} />
        </div>
      </div>
    </div>
  );
}