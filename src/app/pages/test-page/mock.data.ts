import { ActionCard } from 'src/app/components/action-card/action-card.types';
import { defaultActionCard } from 'src/app/components/action-card/mock.data';
import { Filter } from 'src/app/components/filter/filter.types';
import { defaultJobCard } from 'src/app/components/job-card/default-job-card.data';
import { JobCard } from 'src/app/components/job-card/job-card.types';

export const jobCards: Array<JobCard> = [
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

export const actionCards: Array<ActionCard> = [
  {
    title: 'Do you know a perspective candidate to recommend?',
    description:
      'Refer him to us and receive a reward when he accepts an offer',
    buttonText: 'suggest a friend',
    onClick: () => {
      alert('Wanted to suggest a friend');
    },
  },
  {
    title: 'Create a subscription for a candidate',
    description:
      'Just enter your email to get all new jobs according to your search filters',
    buttonText: 'create job alert',
    onClick: () => {
      alert('Wanted to create a job alert');
    },
  },
];

export const filters: Array<Filter<string>> = [
  {
    title: 'Salary range',
    name: 'salary',
    options: [
      { text: '30.000$ - 50.000$', value: 'v3', checked: true },
      { text: '10.000$ - 20.000$', value: 'v2' },
      { text: '1.000$ - 10.000$', value: 'v1' },
    ],
  },
  {
    title: 'Location',
    name: 'location',
    options: [
      { text: 'Sidney', value: 'sidney' },
      { text: 'Alabama', value: 'alabama' },
      { text: 'Oslo', value: 'oslo' },
      { text: 'New-York', value: 'ny', checked: true },
      { text: 'Odessa', value: 'odessa' },
    ],
  },
  {
    title: 'Work type',
    name: 'work-type',
    options: [
      { text: 'Permanent', value: 'perm' },
      { text: 'Full-time', value: 'full', checked: true },
    ],
  },
];
