import imgPn2 from "figma:asset/e8ab899e25c2cae3f36b848c1412d4c905e74f3c.png";
import imgPn1 from "figma:asset/a3a7d30d3ed5c196af0a2d39d44c6543b4eb0f9d.png";

function Heading() {
  return (
    <div className="absolute h-[44px] left-[64px] top-[64px] w-[506px]" data-name="Heading-3">
      <div className="absolute bg-[#a6cffb] inset-[90.91%_52.17%_0_0.4%]" />
      <p className="absolute font-['Poppins:SemiBold',sans-serif] inset-[0_18.18%_18.18%_0] leading-[normal] not-italic text-[#0e1010] text-[24px]">Solution: Pull Notifications System</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[#0e1010] w-full" data-name="Content">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] h-[32px] justify-center relative shrink-0 text-[18px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Smart Notification Vault</p>
      </div>
      <div className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[0px] text-[16px] w-full whitespace-pre-wrap">
        <p className="mb-0">
          <span className="leading-[normal]">{`Instead of `}</span>
          <span className="decoration-solid font-['Poppins:Regular',sans-serif] leading-[normal] not-italic underline">pushing</span>
          <span className="leading-[normal]">{` notifications to users, this system `}</span>
          <span className="decoration-solid font-['Poppins:Regular',sans-serif] leading-[normal] not-italic underline">stores non-urgent and non-instant response-requiring notifications</span>
          <span className="leading-[normal]">{` in a vault. Users access this vault at their preferred time to view and address the notifications. `}</span>
        </p>
        <p className="leading-[normal] mb-0">{` `}</p>
        <p className="leading-[normal] mb-0">{`iOS uses a similar system where they store and sort the notifications before sending out to the users.  `}</p>
        <p className="leading-[normal]">&nbsp;</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[64px] top-[160px] w-[491px]">
      <div className="absolute bg-[rgba(237,221,132,0.3)] h-[31px] left-[-7px] top-0 w-[236px]" />
      <Content />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#fdfdfd] relative size-full" data-name="47">
      <Heading />
      <Frame />
      <div className="absolute h-[522px] left-[278px] top-[calc(33.33%+187px)] w-[1188px]" data-name="PN2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPn2} />
      </div>
      <div className="absolute h-[471px] left-[calc(33.33%+67px)] top-[64px] w-[931px]" data-name="PN1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPn1} />
      </div>
    </div>
  );
}