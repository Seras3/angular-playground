import { Component, Input } from '@angular/core';
import { ActionCard } from './action-card.types';
import { defaultActionCard } from './mock.data';

@Component({
  selector: 'app-action-card',
  templateUrl: './action-card.component.html',
  styleUrls: ['./action-card.component.scss'],
})
export class ActionCardComponent {
  @Input('data') card: ActionCard = defaultActionCard;
}
