import imgUsecase11 from "figma:asset/a4d3d0d14ee6702a20564dd4b258c413a1b84a49.png";
import imgUsecase01 from "figma:asset/3846215c188a0474821a821bd0a2e527af14e1f5.png";

function Footer() {
  return (
    <div className="absolute border-[#d1b3ff] border-solid border-t font-['Poppins:Medium_Italic',sans-serif] h-[30px] italic leading-[0] left-[64px] text-[#0e1010] text-[12px] top-[calc(100%-64px)] w-[1522px]" data-name="Footer">
      <div className="absolute flex flex-col inset-[calc(30%-0.7px)_51.05%_calc(10%+0.1px)_0] justify-center">
        <ol start="4">
          <li className="ms-[18px] whitespace-pre-wrap">
            <span className="leading-[normal]">Contextual AI Insights for Warehouse Operations</span>
          </li>
        </ol>
      </div>
      <div className="absolute flex flex-col inset-[calc(30%-0.7px)_0_calc(10%+0.1px)_51.05%] justify-center text-right">
        <p className="leading-[normal] whitespace-pre-wrap">Page - 16</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] not-italic relative shrink-0 text-[#0e1010] w-full" data-name="Content">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] h-[32px] justify-center relative shrink-0 text-[18px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">An Example</p>
      </div>
      <ol className="block font-['Poppins:Regular',sans-serif] relative shrink-0 text-[0px] w-full whitespace-pre-wrap" start="1">
        <li className="mb-[24px] ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
          <span className="leading-[normal] text-[16px]">Ryan opens the Control Tower dashboard to review overall warehouse and inventory trends.</span>
        </li>
        <li className="mb-[24px] ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
          <span className="leading-[normal] text-[16px]">He monitors key data points such as inventory levels, inbound and outbound shipments, and compliance status.</span>
        </li>
        <li className="mb-[24px] ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[16px]">
          <span className="leading-[normal]">{`An alert appears on the `}</span>
          <span className="decoration-solid font-['Poppins:Regular',sans-serif] leading-[normal] not-italic underline">Analyze Card</span>
          <span className="leading-[normal]">{`, flagging a potential `}</span>
          <span className="decoration-solid font-['Poppins:Regular',sans-serif] leading-[normal] not-italic underline">stock-out risk over the next three days</span>
          <span className="leading-[normal]">{` due to rising demand.`}</span>
        </li>
        <li className="mb-[24px] ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
          <span className="leading-[normal] text-[16px]">Ryan investigates the alert to understand the root cause and projected timeline of the issue.</span>
        </li>
        <li className="mb-[24px] ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
          <span className="leading-[normal] text-[16px]">The system predicts increased demand driven by the flu season, impacting the period from 4th July to 8th July, 2023.</span>
        </li>
        <li className="mb-[24px] ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[16px]">
          <span className="leading-[normal]">{`The analysis highlights a `}</span>
          <span className="decoration-solid font-['Poppins:Regular',sans-serif] leading-[normal] not-italic underline">high risk of stock-out</span>
          <span className="leading-[normal]">{` for essential medicines during this window.`}</span>
        </li>
        <li className="mb-[24px] ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[16px]">
          <span className="leading-[normal]">{`A Recommendation Card suggests `}</span>
          <span className="decoration-solid font-['Poppins:Regular',sans-serif] leading-[normal] not-italic underline">corrective actions</span>
          <span className="leading-[normal]">, including diverting 80% of SKUs to a specific distributor.</span>
        </li>
        <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
          <span className="leading-[normal] text-[16px]">The system also shows the predicted impact, indicating that 95% of demand can be met, while warning that remaining stock will require replenishment.</span>
        </li>
      </ol>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[64px] top-[140px] w-[465px]">
      <div className="absolute bg-[rgba(237,221,132,0.3)] h-[31px] left-[-7px] top-0 w-[121px]" />
      <Content />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[44px] left-[64px] top-[64px] w-[506px]" data-name="Heading-3">
      <div className="absolute bg-[#d1b3ff] inset-[90.91%_52.17%_0_0.4%]" />
      <p className="absolute font-['Poppins:SemiBold',sans-serif] inset-[0_35.38%_18.18%_0] leading-[normal] not-italic text-[#0e1010] text-[24px]">Use Case : Pharmaceutical</p>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#fdfdfd] relative size-full" data-name="23">
      <Footer />
      <Frame />
      <Heading />
      <div className="absolute h-[531px] left-[calc(33.33%+42px)] top-[calc(33.33%+192px)] w-[1007px]" data-name="Usecase 1 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgUsecase11} />
      </div>
      <div className="absolute h-[531px] left-[calc(33.33%+41px)] top-[64px] w-[995px]" data-name="usecase0 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgUsecase01} />
      </div>
    </div>
  );
}