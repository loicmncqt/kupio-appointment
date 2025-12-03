import { Component, input, output } from '@angular/core';
import { User } from '../../../core/types';
import { CommonModule } from '@angular/common';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBell, lucideChevronDown } from '@ng-icons/lucide';
import { HlmDropdownMenuImports } from '@spartan-ng/helm/dropdown-menu';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmAvatarImports } from '@spartan-ng/helm/avatar';
import { HlmInputImports } from '@spartan-ng/helm/input';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    HlmIcon,
    NgIcon,
    HlmButtonImports,
    HlmDropdownMenuImports,
    HlmAvatarImports,
    HlmInputImports,
  ],
  providers: [provideIcons({ lucideBell, lucideChevronDown })],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  readonly pageTitle = input.required<string>();
  readonly user = input.required<User>();
  readonly unreadNotifications = input<number>(0);

  readonly openNotifications = output<void>();

  protected getInitials(user: User | undefined): string {
    if (!user?.name) {
      return '';
    }

    const parts = user.name.trim().split(/\s+/);

    if (parts.length === 1) {
      return parts[0].slice(0, 2).toUpperCase();
    }

    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
  }

  protected onOpenNotifications(): void {
    this.openNotifications.emit();
  }
}
