import imgImage29 from "figma:asset/a381fb83391faab170bae60a356465567dabc5cf.png";
import imgImage30 from "figma:asset/579edff63c100e0c04d77cf4985178a3bd2a6179.png";
import imgImage31 from "figma:asset/b0bacd672a132c1130b07452cce3d0bff3ed5695.png";

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
        <p className="css-4hzbpn leading-[normal]">Page - 19</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[44px] left-[64px] top-[64px] w-[506px]" data-name="Heading-3">
      <div className="absolute bg-[#a6cffb] inset-[90.91%_52.17%_0_0.4%]" />
      <p className="absolute css-ew64yg font-['Poppins:SemiBold',sans-serif] inset-[0_65.22%_18.18%_0] leading-[normal] not-italic text-[#0e1010] text-[24px]">How we built it</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[#0e1010] w-full" data-name="Content">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] h-[32px] justify-center relative shrink-0 text-[18px] w-full">
        <p className="css-4hzbpn leading-[normal]">Why Not Use an Existing Design System?</p>
      </div>
      <div className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[16px] w-full">
        <p className="css-4hzbpn leading-[normal] mb-0">We explored using pre-existing design systems like Simple Design and Material Design but faced the following limitations:</p>
        <ul className="list-disc">
          <li className="css-4hzbpn mb-0 ms-[24px]">
            <span className="leading-[normal]">Our development stack was based on Material 3 (M3) and AG Grid, requiring heavy customization.</span>
          </li>
          <li className="css-4hzbpn mb-0 ms-[24px]">
            <span className="leading-[normal]">As a niche WMS software, we needed specialized components that were not readily available in existing systems.</span>
          </li>
          <li className="css-4hzbpn ms-[24px]">
            <span className="leading-[normal]">The extreme complexities of these readily available design systems on Figma further deterred us.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[64px] top-[132px] w-[745px]">
      <div className="absolute bg-[rgba(237,221,132,0.3)] h-[31px] left-[-7px] top-0 w-[379px]" />
      <div className="absolute bg-[rgba(237,221,132,0.3)] h-[31px] left-[-7px] top-[332px] w-[379px]" />
      <Content />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#fdfdfd] relative size-full" data-name="28">
      <Footer />
      <Heading />
      <Frame />
      <div className="absolute h-[160px] left-[calc(33.33%+291px)] top-[168px] w-[745px]" data-name="image 29">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage29} />
      </div>
      <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] h-[32px] justify-center leading-[0] left-[66px] not-italic text-[#0e1010] text-[18px] top-[calc(33.33%+55px)] translate-y-[-50%] w-[745px]">
        <p className="css-4hzbpn leading-[normal]">Our Process – How We Built It in Figma</p>
      </div>
      <div className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[66px] not-italic text-[#0e1010] text-[0px] text-[16px] top-[calc(33.33%+87px)] w-[745px]">
        <p className="css-4hzbpn font-['Poppins:Bold',sans-serif] mb-0">1. Created a Component List</p>
        <p className="css-4hzbpn">We picked the unique components from each and every existing screen and grouped them into AG Grid, Material and Custom Components</p>
      </div>
      <div className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[calc(33.33%+291px)] not-italic text-[#0e1010] text-[0px] text-[16px] top-[calc(33.33%+87px)] w-[745px]">
        <p className="css-4hzbpn font-['Poppins:Bold',sans-serif] mb-0">2. Color System, Typography Definition</p>
        <p className="css-4hzbpn">We began by defining a foundational color palette and typography system, establishing clear guidelines for visual hierarchy, accessibility, and brand consistency.</p>
      </div>
      <div className="absolute flex h-[4px] items-center justify-center left-[64px] top-[412px] w-[1522px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[-90deg]">
          <div className="bg-[rgba(166,207,251,0.35)] h-[1522px] w-[4px]" />
        </div>
      </div>
      <div className="absolute h-[423px] left-[64px] top-[calc(33.33%+191px)] w-[745px]" data-name="image 30">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage30} />
      </div>
      <div className="absolute h-[438px] left-[calc(33.33%+291px)] top-[calc(33.33%+191px)] w-[745px]" data-name="image 31">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage31} />
      </div>
    </div>
  );
}