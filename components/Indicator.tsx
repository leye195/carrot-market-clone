import { classnames } from "lib/client/utils";

type Props = {
  className?: string;
};

const Indicator = ({ className = "w-14 h-14" }: Props) => {
  return (
    <div className={classnames("flex items-center justify-center", className)}>
      <div
        className={classnames(
          "border-8 border-orange-400 border-t-orange-200 rounded-full animate-spin",
          className
        )}
      ></div>
    </div>
  );
};

export default Indicator;
