import { cn } from "@/util/utils";

const SecondaryBtn = ({
  label,
  className,
}: {
  label: string;
  className?: string;
}) => {
  return (
    <button
      className={cn(
        "rounded-lg bg-[#000] p-2 text-[21px] leading-[31px] text-[#fff] shadow-[3px_3px_0px_0px_#17EB1F] transition-all duration-150 hover:opacity-80 mobile:h-[30px] mobile:text-[16px] mobile:leading-[16px]",
        className,
      )}
    >
      {label}
    </button>
  );
};

export default SecondaryBtn;
