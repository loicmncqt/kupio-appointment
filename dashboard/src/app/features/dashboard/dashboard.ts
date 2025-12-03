import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideLayoutDashboard,
  lucideBuilding,
  lucideScissors,
  lucideUsers,
  lucideMegaphone,
  lucideChartLine,
  lucideCalendar,
  lucideChevronLeft,
  lucideChevronRight,
  lucideMoreVertical,
  lucideSettings,
} from '@ng-icons/lucide';
import { AppRoute } from '../../core/routes';

interface Appointment {
  id: string;
  clientName: string;
  service: string;
  startTime: string;
  duration: string;
}

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, HlmCardImports, HlmButtonImports, HlmIcon, NgIcon],
  providers: [
    provideIcons({
      lucideLayoutDashboard,
      lucideBuilding,
      lucideScissors,
      lucideUsers,
      lucideMegaphone,
      lucideChartLine,
      lucideCalendar,
      lucideChevronLeft,
      lucideChevronRight,
      lucideMoreVertical,
      lucideSettings,
    }),
  ],
  templateUrl: './dashboard.html',
})
export class DashboardPage {
  protected readonly AppRoute = AppRoute;

  protected readonly weekDays = signal([
    { dayName: 'Mon', date: 23, isToday: false },
    { dayName: 'Tue', date: 24, isToday: false },
    { dayName: 'Wed', date: 25, isToday: true },
    { dayName: 'Thu', date: 26, isToday: false },
    { dayName: 'Fri', date: 27, isToday: false },
    { dayName: 'Sat', date: 28, isToday: false },
    { dayName: 'Sun', date: 29, isToday: false },
  ]);

  protected readonly appointments = signal<Appointment[]>([
    {
      id: '1',
      clientName: 'Marie Dubois',
      service: 'Coupe + Coloration',
      startTime: '09:00',
      duration: '2h',
    },
    {
      id: '2',
      clientName: 'Jean Martin',
      service: 'Coupe Homme',
      startTime: '11:30',
      duration: '45min',
    },
    {
      id: '3',
      clientName: 'Sophie Laurent',
      service: 'Brushing',
      startTime: '14:00',
      duration: '1h',
    },
    {
      id: '4',
      clientName: 'Pierre Durand',
      service: 'Coupe + Barbe',
      startTime: '15:30',
      duration: '1h15',
    },
    {
      id: '5',
      clientName: 'Claire Bernard',
      service: 'Mèches',
      startTime: '17:00',
      duration: '2h30',
    },
  ]);

  protected getInitials(name: string): string {
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) {
      return parts[0].slice(0, 2).toUpperCase();
    }
    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
  }

  protected getColorForName(name: string): string {
    const colors = [
      '#FF6B6B',
      '#4ECDC4',
      '#45B7D1',
      '#FFA07A',
      '#98D8C8',
      '#F7DC6F',
      '#BB8FCE',
      '#85C1E2',
    ];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  }
}
