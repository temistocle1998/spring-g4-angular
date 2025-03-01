import { Component } from '@angular/core';
import { Conversation } from './message.interface';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  searchTerm = '';
  filter = 'all';

  conversations: Conversation[] = [
    {
      id: 1,
      object: {
        title: "Clés trouvées",
        image: "/placeholder.svg",
        location: "Parc Central",
        date: "19/02/2024",
      },
      lastMessage: {
        content: "Oui, c'est exactement ça ! Je peux vous les remettre en main propre. Quand seriez-vous disponible ?",
        timestamp: "Il y a 2h",
        isRead: false,
      },
      contact: {
        name: "Jean Dupont",
        isOnline: true,
      },
      status: "active",
    },
    {
      id: 2,
      object: {
        title: "Téléphone Samsung",
        image: "/placeholder.svg",
        location: "Métro Station Centrale",
        date: "18/02/2024",
      },
      lastMessage: {
        content: "Merci beaucoup pour votre aide ! Je confirme la restitution de l'objet.",
        timestamp: "Hier",
        isRead: true,
      },
      contact: {
        name: "Marie Lambert",
        isOnline: false,
      },
      status: "resolved",
    },
    {
      id: 3,
      object: {
        title: "Portefeuille marron",
        image: "/placeholder.svg",
        location: "Restaurant Le Bistrot",
        date: "17/02/2024",
      },
      lastMessage: {
        content: "Bonjour, j'ai bien trouvé un portefeuille qui correspond à votre description.",
        timestamp: "Il y a 3j",
        isRead: true,
      },
      contact: {
        name: "Pierre Martin",
        isOnline: false,
      },
      status: "archived",
    },
  ];

  get filteredConversations(): Conversation[] {
    return this.conversations.filter(
      (conv) =>
        (this.filter === 'all' || conv.status === this.filter) &&
        (conv.object.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          conv.contact.name.toLowerCase().includes(this.searchTerm.toLowerCase()))
    );
  }

  getStatusBadgeClass(status: string): string {
    switch (status) {
      case 'active':
        return 'bg-success';
      case 'resolved':
        return 'bg-secondary';
      default:
        return 'bg-light text-dark';
    }
  }

  getStatusLabel(status: string): string {
    switch (status) {
      case 'active':
        return 'En cours';
      case 'resolved':
        return 'Résolu';
      default:
        return 'Archivé';
    }
  }
}
