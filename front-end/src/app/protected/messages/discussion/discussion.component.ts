import { Component } from '@angular/core';
interface Message {
  id: number;
  sender: string;
  content: string;
  timestamp: string;
  isOwner: boolean;
  read: boolean;
}
@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.css']
})

export class DiscussionComponent {
  newMessage = '';
  messages: Message[] = [
    {
      id: 1,
      sender: "Jean Dupont",
      content: "Bonjour, j'ai trouvé des clés qui pourraient être les vôtres. Pouvez-vous me donner plus de détails sur le porte-clés ?",
      timestamp: "2024-02-23 14:30",
      isOwner: true,
      read: true,
    },
    {
      id: 2,
      sender: "Marie Lambert",
      content: "Bonjour, oui en effet ! Mon porte-clés est rouge avec un logo d'entreprise dessus. Est-ce que cela correspond ?",
      timestamp: "2024-02-23 14:35",
      isOwner: false,
      read: true,
    },
    {
      id: 3,
      sender: "Jean Dupont",
      content: "Oui, c'est exactement ça ! Je peux vous les remettre en main propre. Quand seriez-vous disponible ?",
      timestamp: "2024-02-23 14:40",
      isOwner: true,
      read: true,
    }
  ];

  handleSubmit(event: Event): void {
    event.preventDefault();
    if (!this.newMessage.trim()) return;

    const message: Message = {
      id: this.messages.length + 1,
      sender: "Marie Lambert",
      content: this.newMessage,
      timestamp: new Date().toLocaleString(),
      isOwner: false,
      read: true,
    };

    this.messages = [...this.messages, message];
    this.newMessage = "";
  }
}
