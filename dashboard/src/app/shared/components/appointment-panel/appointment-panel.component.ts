import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { HlmIcon } from '@spartan-ng/helm/icon';
import { HlmButton } from '@spartan-ng/helm/button';
import { BrnSelectImports } from '@spartan-ng/brain/select';
import { HlmSelectImports } from '@spartan-ng/helm/select';
import { HlmDatePickerImports } from '@spartan-ng/helm/date-picker';
import {
  lucideX,
  lucideUser,
  lucidePhone,
  lucideMail,
  lucideCalendar,
  lucideClock,
  lucideEdit2,
  lucideCheck,
  lucideTrash2,
} from '@ng-icons/lucide';

export interface AppointmentDetails {
  id?: string;
  client?: string;
  phone?: string;
  email?: string;
  date?: Date;
  startTime?: string;
  duration?: number;
  service?: string;
  price?: string;
  status?: 'confirmed' | 'pending';
  notes?: string;
}

@Component({
  selector: 'app-appointment-panel',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgIcon,
    HlmIcon,
    HlmButton,
    BrnSelectImports,
    HlmSelectImports,
    HlmDatePickerImports,
  ],
  providers: [
    provideIcons({
      lucideX,
      lucideUser,
      lucidePhone,
      lucideMail,
      lucideCalendar,
      lucideClock,
      lucideEdit2,
      lucideCheck,
      lucideTrash2,
    }),
  ],
  templateUrl: './appointment-panel.component.html',
  styleUrls: ['./appointment-panel.component.css'],
})
export class AppointmentPanelComponent {
  @Input() isOpen = false;
  @Input() isNewAppointment = false;
  @Input() appointment: AppointmentDetails | null = null;
  @Output() closePanel = new EventEmitter<void>();
  @Output() edit = new EventEmitter<AppointmentDetails>();
  @Output() validate = new EventEmitter<AppointmentDetails>();
  @Output() deleteAppointment = new EventEmitter<AppointmentDetails>();

  notes = '';
  selectedClient = '';
  selectedDate: Date | null = null;

  // Liste des clients disponibles (à remplacer par des vraies données)
  availableClients = [
    { id: '1', name: 'Marie Dupont', phone: '+33 6 12 34 56 78', email: 'marie.dupont@email.com' },
    { id: '2', name: 'Jean Martin', phone: '+33 6 23 45 67 89', email: 'jean.martin@email.com' },
    {
      id: '3',
      name: 'Sophie Bernard',
      phone: '+33 6 34 56 78 90',
      email: 'sophie.bernard@email.com',
    },
    {
      id: '4',
      name: 'Pierre Dubois',
      phone: '+33 6 45 67 89 01',
      email: 'pierre.dubois@email.com',
    },
  ];

  onClose(): void {
    this.closePanel.emit();
  }

  onEdit(): void {
    if (this.appointment) {
      this.edit.emit({ ...this.appointment, notes: this.notes });
    }
  }

  onValidate(): void {
    if (this.appointment) {
      this.validate.emit({ ...this.appointment, notes: this.notes });
    }
  }

  onDelete(): void {
    if (this.appointment) {
      this.deleteAppointment.emit(this.appointment);
    }
  }

  getStatusLabel(): string {
    return this.appointment?.status === 'confirmed' ? 'Confirmé' : 'En attente';
  }

  getStatusClass(): string {
    return this.appointment?.status === 'confirmed'
      ? 'bg-blue-100 text-blue-800'
      : 'bg-orange-100 text-orange-800';
  }

  formatDate(date?: Date): string {
    if (!date) return '';
    return new Intl.DateTimeFormat('fr-FR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date);
  }
}
