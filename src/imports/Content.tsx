export default function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative size-full text-[#0e1010]" data-name="Content">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] h-[32px] justify-center leading-[0] relative shrink-0 text-[18px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">{`Target Persona - Enterprise Users and SMC Corporate `}</p>
      </div>
      <div className="font-['Poppins:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Solving for 90th Percentile of Enterprise Users and SMC Corporate Users, as they receive notifications beyond a limit that is considered easily consumable (based on user conversations). `}</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}