import { Component, input, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { HlmIcon } from '@spartan-ng/helm/icon';
import {
  lucideLayoutDashboard,
  lucideBuilding,
  lucideScissors,
  lucideUsers,
  lucideMegaphone,
  lucideChartLine,
  lucideSettings,
} from '@ng-icons/lucide';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavItem } from '../../../core/types';
import { AppRoute } from '../../../core/routes';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, HlmIcon, NgIcon],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
  providers: [
    provideIcons({
      lucideLayoutDashboard,
      lucideBuilding,
      lucideScissors,
      lucideUsers,
      lucideMegaphone,
      lucideChartLine,
      lucideSettings,
    }),
  ],
})
export class Sidebar {
  readonly businessName = input.required<string>();
  readonly logoUrl = input<string | undefined>();

  protected readonly navItems = signal<NavItem[]>([
    {
      label: 'Tableau de bord',
      icon: 'lucideLayoutDashboard',
      route: AppRoute.Dashboard,
    },
    {
      label: 'Établissement',
      icon: 'lucideBuilding',
      route: AppRoute.Establishment,
    },
    {
      label: 'Prestations',
      icon: 'lucideScissors',
      route: AppRoute.Services,
    },
    {
      label: 'Clients',
      icon: 'lucideUsers',
      route: AppRoute.Clients,
    },
    {
      label: 'Campagnes',
      icon: 'lucideMegaphone',
      route: AppRoute.Campaigns,
    },
    {
      label: 'Statistiques',
      icon: 'lucideChartLine',
      route: AppRoute.Statistics,
    },
    {
      label: 'Paramètres',
      icon: 'lucideSettings',
      route: AppRoute.Settings,
    },
  ]);
}
