import { Routes } from '@angular/router';
import { AppRoute } from './core/routes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: AppRoute.Dashboard,
    pathMatch: 'full',
  },
  {
    path: AppRoute.Dashboard.slice(1),
    loadComponent: () => import('./pages/dashboard/dashboard').then((m) => m.DashboardPage),
  },
  {
    path: AppRoute.Establishment.slice(1),
    loadComponent: () =>
      import('./pages/establishment/establishment').then((m) => m.EstablishmentPage),
  },
  {
    path: AppRoute.Services.slice(1),
    loadComponent: () => import('./pages/services/services').then((m) => m.ServicesPage),
  },
  {
    path: AppRoute.Clients.slice(1),
    loadComponent: () => import('./pages/clients/clients').then((m) => m.ClientsPage),
  },
  {
    path: AppRoute.Campaigns.slice(1),
    loadComponent: () => import('./pages/campaigns/campaigns').then((m) => m.CampaignsPage),
  },
  {
    path: AppRoute.Statistics.slice(1),
    loadComponent: () => import('./pages/statistics/statistics').then((m) => m.StatisticsPage),
  },
  {
    path: AppRoute.Settings.slice(1),
    loadComponent: () => import('./pages/settings/settings').then((m) => m.SettingsPage),
  },
];
