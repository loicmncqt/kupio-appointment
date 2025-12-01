import { Component, input, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavItem } from '../../core/types';
import { AppRoute } from '../../core/routes';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  readonly businessName = input.required<string>();
  readonly logoUrl = input<string | undefined>();

  protected readonly navItems = signal<NavItem[]>([
    {
      label: 'Tableau de bord',
      icon: '📊',
      route: AppRoute.Dashboard,
    },
    {
      label: 'Établissement',
      icon: '🏢',
      route: AppRoute.Establishment,
    },
    {
      label: 'Prestations',
      icon: '✂️',
      route: AppRoute.Services,
    },
    {
      label: 'Clients',
      icon: '👥',
      route: AppRoute.Clients,
    },
    {
      label: 'Campagnes',
      icon: '📢',
      route: AppRoute.Campaigns,
    },
    {
      label: 'Statistiques',
      icon: '📈',
      route: AppRoute.Statistics,
    },
    {
      label: 'Paramètres',
      icon: '⚙️',
      route: AppRoute.Settings,
    },
  ]);
}
