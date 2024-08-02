import { ContainerProps } from "@/lib/interfaces";

export default function Container({ children, className = "", ...props }: ContainerProps) {
  return (
    <div className={`container mx-auto ${className}`} {...props}>{children}</div>
  );
};