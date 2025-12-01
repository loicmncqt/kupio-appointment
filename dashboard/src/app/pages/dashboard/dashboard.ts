import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  template: `
    <div class="space-y-6">
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 class="text-xl font-semibold text-gray-900 mb-4">Tableau de bord</h2>
        <p class="text-gray-600">Bienvenue sur votre tableau de bord commerçant.</p>
      </div>

      <!-- Stats Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <p class="text-sm text-gray-600 mb-1">RDV aujourd'hui</p>
          <p class="text-3xl font-semibold text-gray-900">12</p>
        </div>
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <p class="text-sm text-gray-600 mb-1">Clients actifs</p>
          <p class="text-3xl font-semibold text-gray-900">248</p>
        </div>
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <p class="text-sm text-gray-600 mb-1">CA du mois</p>
          <p class="text-3xl font-semibold text-gray-900">8 450€</p>
        </div>
      </div>
    </div>
  `,
})
export class DashboardPage {}
