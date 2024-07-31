import {
  ReactElement,
  ReactNode,
  HTMLAttributes
} from "react";

export interface WrapperProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
};

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode,
  className?: string
};

export interface Hyperlink {
  id: string
  path: string
};

export interface SocialMedia extends Hyperlink {
  icon: ReactElement
};