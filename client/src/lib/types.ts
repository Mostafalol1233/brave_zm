export type SocialLinks = {
  twitter?: string;
  linkedin?: string;
  instagram?: string;
  facebook?: string;
};

export type ProductCardProps = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  reviewCount: number;
  whatsappMessage: string;
  categoryId: number;
};

export type CategoryType = {
  id: number;
  name: string;
  icon: string;
  description: string;
  color: string;
};

export type TeamMemberType = {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  social: string;
};

export type ReviewType = {
  id: number;
  name: string;
  review: string;
  rating: number;
  image: string;
  verified: boolean;
};

export type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
