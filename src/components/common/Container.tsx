import { ContainerProps } from "../../lib/types";

export default function Container({ children, className = "", ...props }: ContainerProps) {
  return (
    <div className={`container mx-auto ${className}`} {...props}>{children}</div>
  );
};