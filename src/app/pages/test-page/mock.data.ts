import { defaultJobCard } from 'src/app/components/job-card/default-job-card.data';
import { JobCard } from 'src/app/components/job-card/job-card.types';

export const cards: Array<JobCard> = [
  defaultJobCard,
  {
    companyName: 'Apple',
    role: 'Frontend Developer',
    salary: '110.000USD/year',
    workType: 'Permanent',
    location: 'Florida',
    description: 'Best fit for dedicated Frontend guys who will crea...',
    suggestReward: '500USD',
  },
  {
    companyName: 'Sony',
    role: 'Software Engineer',
    salary: '100.000USD/year',
    workType: 'Full-time',
    location: 'San Francisco',
    description:
      "If you're a beardy nerdy, you're the best fit for this role, so ap...",
    suggestReward: '500USD',
  },
];
