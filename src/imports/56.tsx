import imgImage81 from "figma:asset/ebc513e07562f9939438a1a4b92f4b4a5a0216c1.png";
import imgImage87 from "figma:asset/e5a50dc920dc57b3a653a36878ce15e21f2b739c.png";

function Heading() {
  return (
    <div className="absolute h-[44px] left-[64px] top-[64px] w-[506px]" data-name="Heading-3">
      <div className="absolute bg-[#b8eec7] inset-[90.91%_52.17%_0_0.4%]" />
      <p className="absolute font-['Poppins:SemiBold',sans-serif] inset-[0_40.12%_18.18%_0] leading-[normal] not-italic text-[#0e1010] text-[24px]">Information Architecture</p>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#fdfdfd] relative size-full" data-name="56">
      <Heading />
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[66px] not-italic text-[#0e1010] text-[16px] top-[138px] w-[1294px] whitespace-pre-wrap">{`We realised we needed to display a lot of information, so we made an Information chart inorder to display the hierarchy and dependency. `}</p>
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[66px] not-italic text-[#0e1010] text-[16px] top-[calc(33.33%+481px)] w-[1294px] whitespace-pre-wrap">We opted for progressive disclosure of the details:</p>
      <div className="absolute h-[917px] left-[66px] top-[194px] w-[774px]" data-name="image 81">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage81} />
      </div>
      <div className="absolute h-[806px] left-[64px] top-[calc(33.33%+532px)] w-[1294px]" data-name="image 87">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage87} />
      </div>
    </div>
  );
}