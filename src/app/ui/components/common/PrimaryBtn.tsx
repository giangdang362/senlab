import { cn } from "@/util/utils";

const PrimaryBtn = ({
  label,
  className,
}: {
  label: string;
  className?: string;
}) => {
  return (
    <button
      className={cn(
        "rounded-lg bg-[#17EB1F] p-2 font-mono text-[21px] leading-[31px] text-[#000000] shadow-[3px_3px_0px_0px_#000] transition-all duration-150 hover:opacity-80 mobile:h-[33px] mobile:w-[125px] mobile:text-[16px] mobile:leading-[16px]",
        className,
      )}
    >
      {label}
    </button>
  );
};

export default PrimaryBtn;
