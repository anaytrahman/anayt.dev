export interface ServiceOffering {
  title: string;
  description: string;
  icon: string;
}

export interface Achievement {
  label: string;
  value: number;
  suffix: string;
  icon: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export interface NavLink {
  label: string;
  fragment: string;
}
