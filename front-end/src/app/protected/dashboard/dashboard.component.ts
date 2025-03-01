import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  recentAnnouncements = [
    {
      id: 1,
      title: "Clés trouvées",
      status: "active",
      date: "2024-02-19",
      views: 45,
      contacts: 2,
    },
    {
      id: 2,
      title: "Téléphone Samsung",
      status: "resolved",
      date: "2024-02-18",
      views: 123,
      contacts: 5,
    },
    {
      id: 3,
      title: "Portefeuille marron",
      status: "active",
      date: "2024-02-17",
      views: 67,
      contacts: 3,
    },
  ]

  recentMessages = [
    {
      id: 1,
      from: "Marie L.",
      subject: "À propos des clés trouvées",
      date: "Il y a 2h",
      unread: true,
    },
    {
      id: 2,
      from: "Pierre M.",
      subject: "Merci pour votre aide",
      date: "Il y a 1j",
      unread: false,
    },
    {
      id: 3,
      from: "Sophie D.",
      subject: "Question sur l'objet",
      date: "Il y a 2j",
      unread: true,
    },
  ]

  recentActivity = [
    {
      id: 1,
      type: "view",
      description: 'Votre annonce "Clés trouvées" a été vue 15 fois',
      date: "Il y a 1h",
    },
    {
      id: 2,
      type: "contact",
      description: 'Nouveau message pour "Téléphone Samsung"',
      date: "Il y a 3h",
    },
    {
      id: 3,
      type: "status",
      description: 'Annonce "Portefeuille" marquée comme résolue',
      date: "Il y a 1j",
    },
  ]
}
