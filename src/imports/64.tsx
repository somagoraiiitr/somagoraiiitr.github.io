import imgUsecase01 from "figma:asset/3846215c188a0474821a821bd0a2e527af14e1f5.png";
import imgUsecase11 from "figma:asset/a4d3d0d14ee6702a20564dd4b258c413a1b84a49.png";

function Heading() {
  return (
    <div className="h-[44px] relative shrink-0 w-[506px]" data-name="Heading-3">
      <div className="absolute bg-[#d1b3ff] inset-[90.91%_52.17%_0_0.4%]" />
      <p className="absolute font-['Poppins:SemiBold',sans-serif] inset-[0_35.38%_18.18%_0] leading-[normal] not-italic text-[#0e1010] text-[24px]">Use Case : Pharmaceutical</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0 text-[#0e1010] w-full" data-name="Content">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] h-[32px] justify-center relative shrink-0 text-[18px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Features Overview</p>
      </div>
      <ol className="block font-['Poppins:Regular',sans-serif] relative shrink-0 text-[0px] w-full whitespace-pre-wrap" start="1">
        <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
          <span className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic text-[16px]">Ryan opens the Control Tower dashboard to review overall warehouse and inventory trends.</span>
        </li>
        <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
          <span className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic text-[16px]">He monitors key data points such as inventory levels, inbound and outbound shipments, and compliance status.</span>
        </li>
        <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[16px]">
          <span className="leading-[normal]">{`An alert appears on the `}</span>
          <span className="decoration-solid leading-[normal] underline">Analyze Card</span>
          <span className="leading-[normal]">{`, flagging a potential `}</span>
          <span className="decoration-solid leading-[normal] underline">stock-out risk over the next three days</span>
          <span className="leading-[normal]">{` due to rising demand.`}</span>
        </li>
        <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
          <span className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic text-[16px]">Ryan investigates the alert to understand the root cause and projected timeline of the issue.</span>
        </li>
        <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
          <span className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic text-[16px]">The system predicts increased demand driven by the flu season, impacting the period from 4th July to 8th July, 2023.</span>
        </li>
        <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[16px]">
          <span className="leading-[normal]">{`The analysis highlights a `}</span>
          <span className="decoration-solid leading-[normal] underline">high risk of stock-out</span>
          <span className="leading-[normal]">{` for essential medicines during this window.`}</span>
        </li>
        <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[16px]">
          <span className="leading-[normal]">{`A Recommendation Card suggests `}</span>
          <span className="decoration-solid leading-[normal] underline">corrective actions</span>
          <span className="leading-[normal]">, including diverting 80% of SKUs to a specific distributor.</span>
        </li>
        <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
          <span className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic text-[16px]">The system also shows the predicted impact, indicating that 95% of demand can be met, while warning that remaining stock will require replenishment.</span>
        </li>
      </ol>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[572px]">
      <div className="absolute bg-[rgba(237,221,132,0.3)] h-[31px] left-[-7px] top-0 w-[194px]" />
      <Content />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#fdfdfd] content-stretch flex flex-col gap-[39px] items-start px-[64px] py-[93px] relative size-full" data-name="64">
      <Heading />
      <Frame />
      <div className="h-[531px] relative shrink-0 w-[995px]" data-name="usecase0 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgUsecase01} />
      </div>
      <div className="h-[531px] relative shrink-0 w-[1007px]" data-name="Usecase 1 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgUsecase11} />
      </div>
    </div>
  );
}