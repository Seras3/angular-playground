import { Component } from '@angular/core';
import { ActionCard } from 'src/app/components/action-card/action-card.types';
import { Filter } from 'src/app/components/filter/filter.types';
import { JobCard } from 'src/app/components/job-card/job-card.types';
import { actionCards, filters, jobCards } from './mock.data';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss'],
})
export class TestPageComponent {
  jobCards: Array<JobCard> = jobCards;
  actionCards: Array<ActionCard> = actionCards;
  filters: Array<Filter<string>> = filters;
}
