import {
  DateAdapter,
  provideCalendar,
  CalendarWeekViewComponent,
  CalendarEvent,
  CalendarView,
} from 'angular-calendar';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { LOCALE_ID } from '@angular/core';
import { ContentWrapperComponent } from '../../shared/components/content-wrapper/content-wrapper.component';
import {
  AppointmentPanelComponent,
  AppointmentDetails,
} from '../../shared/components/appointment-panel/appointment-panel.component';
import { lucideChevronLeft, lucideChevronRight, lucidePlus } from '@ng-icons/lucide';
import { addWeeks, startOfWeek, endOfWeek, format, addDays } from 'date-fns';
import { fr } from 'date-fns/locale';

registerLocaleData(localeFr);

@Component({
  selector: 'app-reservations',
  imports: [
    // Angular Modules
    CommonModule,
    // Own Components
    ContentWrapperComponent,
    AppointmentPanelComponent,
    // Spartan/ui
    HlmButton,
    HlmIcon,
    NgIcon,
    // Calendar Modules
    CalendarWeekViewComponent,
  ],
  providers: [
    provideCalendar({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    provideIcons({ lucideChevronLeft, lucideChevronRight, lucidePlus }),
  ],
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css'],
})
export class ReservationsComponent {
  view: CalendarView = CalendarView.Week;
  viewDate = new Date();
  viewMode: 'week' | 'day' = 'week';

  events: CalendarEvent[] = [
    {
      start: new Date(),
      title: 'Marie Dupont • Coupe de cheveux',
      meta: {
        client: 'Marie Dupont',
        phone: '+33 6 12 34 56 78',
        email: 'marie.dupont@email.com',
        service: 'Coupe de cheveux',
        duration: 1,
        price: '45€',
        status: 'confirmed',
      },
    },
  ];
  excludeDays: number[] = [0, 1];
  dayStartHour = 8;
  dayEndHour = 20;

  // Panel state
  isPanelOpen = false;
  isNewAppointment = false;
  selectedAppointment: AppointmentDetails | null = null;

  get weekDates(): Date[] {
    const start = startOfWeek(this.viewDate, { weekStartsOn: 1 });
    return Array.from({ length: 7 }, (_, i) => addDays(start, i));
  }

  get monthYear(): string {
    return format(this.viewDate, 'MMMM yyyy', { locale: fr });
  }

  get dateRange(): string {
    const start = startOfWeek(this.viewDate, { weekStartsOn: 1 });
    const end = endOfWeek(this.viewDate, { weekStartsOn: 1 });
    return `${format(start, 'd MMM', { locale: fr })} - ${format(end, 'd MMM', { locale: fr })}`;
  }

  setViewMode(mode: 'week' | 'day'): void {
    this.viewMode = mode;
    this.view = mode === 'week' ? CalendarView.Week : CalendarView.Day;
  }

  navigateWeek(direction: number): void {
    this.viewDate = addWeeks(this.viewDate, direction);
  }

  createAppointment(): void {
    console.log('Créer nouveau RDV');
    // Open panel with empty appointment for creation
    this.selectedAppointment = {
      client: '',
      phone: '',
      email: '',
      date: new Date(),
      startTime: '',
      duration: 1,
      service: '',
      price: '',
      status: 'pending',
      notes: '',
    };
    this.isNewAppointment = true;
    this.isPanelOpen = true;
  }

  closePanel(): void {
    this.isPanelOpen = false;
    this.isNewAppointment = false;
    this.selectedAppointment = null;
  }

  handleEdit(appointment: AppointmentDetails): void {
    console.log('Modifier RDV', appointment);
    // TODO: Implémenter la modification de RDV
  }

  handleValidate(appointment: AppointmentDetails): void {
    console.log('Valider RDV', appointment);
    // TODO: Implémenter la validation de RDV
  }

  handleDelete(appointment: AppointmentDetails): void {
    console.log('Supprimer RDV', appointment);
    // TODO: Implémenter la suppression de RDV
    this.closePanel();
  }

  onEventClicked(event: { event: CalendarEvent }): void {
    const calendarEvent = event.event;
    // Open panel with appointment details from calendar event
    this.selectedAppointment = {
      client: calendarEvent.meta?.client || '',
      phone: calendarEvent.meta?.phone || '',
      email: calendarEvent.meta?.email || '',
      date: calendarEvent.start,
      startTime: format(calendarEvent.start, 'HH:mm', { locale: fr }),
      duration: calendarEvent.meta?.duration || 1,
      service: calendarEvent.meta?.service || calendarEvent.title || '',
      price: calendarEvent.meta?.price || '',
      status: calendarEvent.meta?.status || 'pending',
      notes: calendarEvent.meta?.notes || '',
    };
    this.isNewAppointment = false;
    this.isPanelOpen = true;
  }
}
