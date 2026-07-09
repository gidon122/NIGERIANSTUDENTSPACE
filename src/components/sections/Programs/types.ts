export type ProgramStatus = 'upcoming' | 'past';

export interface Program {
  id: string;
  title: string;
  description: string;
  date: string;
  month: string;
  time: string;
  location: string;
  href: string;
  status: ProgramStatus;
  category?: string;
}
