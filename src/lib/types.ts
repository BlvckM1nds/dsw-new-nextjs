import {
  ReactElement,
  ReactNode,
  HTMLAttributes
} from "react";
import { StaticImageData } from "next/image";

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

export interface Service {
  id: string
  label: string
  description: string
  icon: ReactElement
};

export interface Promo {
  title: string
  description: string
  visual: string
  startDate: string
  endDate: string
};

export interface VIPRoom {
  photo: StaticImageData
  title: string
  capacity: number
  minOrder: number
}