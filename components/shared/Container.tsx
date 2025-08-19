import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className = "" }: Props) => {
  return (
    <div className={`max-w-[1140px] mx-auto px-4 ${className}`}>{children}</div>
  );
};

export default Container;
