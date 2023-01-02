import { Component } from '@angular/core';
import { JobCard } from 'src/app/components/job-card/job-card.types';
import { cards } from './mock.data';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss'],
})
export class TestPageComponent {
  cards: Array<JobCard> = cards;
}
