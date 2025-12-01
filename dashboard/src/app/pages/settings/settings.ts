import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  imports: [],
  template: `
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 class="text-xl font-semibold text-gray-900 mb-4">Paramètres</h2>
      <p class="text-gray-600">Configurez les paramètres de votre compte.</p>
    </div>
  `,
})
export class SettingsPage {}
