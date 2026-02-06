import imgHn2 from "figma:asset/d313b2056ad7a41365a2f8bcd796fd4ab8cb7ed9.png";
import imgImage64 from "figma:asset/daac1ade1f6f7afde0966bfdeb81badd751cf0c0.png";
import imgHn1 from "figma:asset/9b338a1edc7008ea8d30b2772da7970305ffafee.png";

function Heading() {
  return (
    <div className="absolute h-[44px] left-[64px] top-[64px] w-[506px]" data-name="Heading-3">
      <div className="absolute bg-[#a6cffb] inset-[90.91%_52.17%_0_0.4%]" />
      <p className="absolute font-['Poppins:SemiBold',sans-serif] inset-[0_-4.55%_18.18%_0] leading-[normal] not-italic text-[#0e1010] text-[24px]">Solution: Defining Hierarchy of Notifications</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] not-italic relative shrink-0 text-[#0e1010] w-full" data-name="Content">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] h-[32px] justify-center relative shrink-0 text-[18px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">{`Color of Notification Badges `}</p>
      </div>
      <ol className="block css-8097nc font-['Poppins:Regular',sans-serif] relative shrink-0 text-[16px] w-full whitespace-pre-wrap" start="1">
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">Sync between all the components of notification ensure smoother and better communication.</span>
        </li>
        <li className="mb-0 ms-[24px]">
          <span className="leading-[normal]">Ensuring a consistent visual language reduces confusion.</span>
        </li>
        <li className="ms-[24px]">
          <span className="leading-[normal]">Dual colors will ensure that the users do not get triggered equally at every notification. Slack follows a similar pattern, and the feature has received positive feedback.</span>
        </li>
      </ol>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[64px] top-[641px] w-[653px]">
      <div className="absolute bg-[rgba(237,221,132,0.3)] h-[31px] left-[-7px] top-0 w-[271px]" />
      <Content />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[64px] top-[923px]">
      <div className="absolute h-[467px] left-[64px] top-[923px] w-[596px]" data-name="HN2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHn2} />
      </div>
      <div className="absolute h-[333px] left-[692px] top-[923px] w-[695px]" data-name="image 64">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage64} />
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#fdfdfd] relative size-full" data-name="48">
      <Heading />
      <Frame />
      <div className="absolute h-[385px] left-[79px] top-[171px] w-[598px]" data-name="HN1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHn1} />
      </div>
      <Group />
    </div>
  );
}