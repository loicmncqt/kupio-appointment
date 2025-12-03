import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './shared/components/sidebar/sidebar';
import { Header } from './shared/components/header/header';
import { BookingStatus, User } from './core/types';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sidebar, Header],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // Mock data - à remplacer par des services réels
  protected readonly businessName = signal<string>('Salon Belle Coupe');
  protected readonly logoUrl = signal<string | undefined>(undefined);
  protected readonly user = signal<User>({
    name: 'Marie Dupont',
    email: 'marie.dupont@example.com',
  });
  protected readonly bookingStatus = signal<BookingStatus>(BookingStatus.Open);
  protected readonly unreadNotifications = signal<number>(3);
  protected readonly pageTitle = signal<string>('Tableau de bord');

  protected onToggleBookingStatus(): void {
    this.bookingStatus.update((status) =>
      status === BookingStatus.Open ? BookingStatus.Paused : BookingStatus.Open,
    );
  }

  protected onLogout(): void {
    // TODO: Implement logout logic
    console.log('Logout clicked');
  }

  protected onOpenNotifications(): void {
    // TODO: Implement notifications panel
    console.log('Notifications clicked');
  }
}
