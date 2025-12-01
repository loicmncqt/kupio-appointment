import { AppRoute } from './routes';

export interface NavItem {
  label: string;
  icon: string;
  route: AppRoute;
}

export interface User {
  name: string;
  email: string;
  avatarUrl?: string;
}

export enum BookingStatus {
  Open = 'open',
  Paused = 'paused',
}
