import { Component, Input } from '@angular/core';
import { defaultJobCard } from './default-job-card.data';
import { JobCard } from './job-card.types';

@Component({
  selector: 'job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss'],
})
export class JobCardComponent {
  @Input('data') jobCard: JobCard | undefined = defaultJobCard;

  @Input() onSuggest = (jobCard: JobCard) => {
    alert(`Wanted to suggest ${jobCard.role} at ${jobCard.companyName}`);
  };
}
