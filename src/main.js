import { createTripInfoTemplate } from './view/trip-info.js';
import { createTripTabsTemplate } from './view/trip-tabs.js';
import { createTripFiltersTemplate } from './view/trip-filters.js';
import { createTripSortTemplate } from './view/trip-sort.js';
import { createTripEventsListTemplate } from './view/trip-events-list.js';
import { createNewPointTemplate } from './view/new-point.js';
import { createEditPointTemplate } from './view/edit-point.js';
import { createTripEventsItemTemplate } from './view/trip-events-item.js';

const TASK_COUNT = 3;

const tripMainElement = document.querySelector('.trip-main');
const tripNavElement = tripMainElement.querySelector('.trip-controls__navigation');
const tripFiltersElement = tripMainElement.querySelector('.trip-controls__filters');
const tripEventsElement = document.querySelector('.trip-events');

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

render(tripMainElement, createTripInfoTemplate(), 'afterbegin');
render(tripNavElement, createTripTabsTemplate(), 'beforeend');
render(tripFiltersElement, createTripFiltersTemplate(), 'beforeend');
render(tripEventsElement, createTripSortTemplate(), 'beforeend');
render(tripEventsElement, createTripEventsListTemplate(), 'beforeend');

const tripEventsListElement = document.querySelector('.trip-events__list');

render(tripEventsListElement, createNewPointTemplate(), 'afterbegin');
render(tripEventsListElement, createEditPointTemplate(), 'beforeend');

for (let i = 0; i < TASK_COUNT; i++) {
  render(tripEventsListElement, createTripEventsItemTemplate(), 'beforeend');
}
