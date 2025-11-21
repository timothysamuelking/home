export interface BrandScript {
  character: string;
  problem: string;
  guide: string;
  plan: string;
  callToAction: string;
  failure: string;
  success: string;
}

export interface TestimonialData {
  id: number;
  quote: string;
  author: string;
  role: string;
  image: string;
}

export interface BentoItem {
  id: number;
  title: string;
  description: string;
  image: string;
  linkText: string;
  isLarge?: boolean;
}
