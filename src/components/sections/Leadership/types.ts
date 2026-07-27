export interface Leader {
  id: string;
  name: string;
  title: string;
  initials: string;
  school?: string;
  location?: string;
  tags?: string[];
  bio: string;
  quote: string;
  image: string; // path or URL to the leader's photo
  email?: string;
  phone?: string;
  linkedin?: string;
  twitter?: string;
}