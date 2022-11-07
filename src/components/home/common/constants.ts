export const commonLinkClass = 'hover:underline focus:outline focus:outline-2 focus:outline-offset-2 focus:rounded';
export const commonIconLinkClass =
  'transition-all transform hover:scale-110 focus:scale-110 outline-none focus:outline focus:outline-2 focus:outline-white/50 focus:outline-offset-2 focus:rounded';

export type IconSectionContent = [
  string,
  {
    name: string;
    url: string;
    color: string;
    icon: string;
  }[]
][];

export type SectionContent = {
  icons?: string[];
  name: string;
  description: string;
  buttons?: {
    url: string;
    name: string;
  }[];
}[];

export type SimpleLinkContent = {
  name: string;
  url: string;
  icon: string;
}[];
