export interface Conversation {
    id: number;
    object: {
      title: string;
      image: string;
      location: string;
      date: string;
    };
    lastMessage: {
      content: string;
      timestamp: string;
      isRead: boolean;
    };
    contact: {
      name: string;
      avatar?: string;
      isOnline: boolean;
    };
    status: 'active' | 'resolved' | 'archived';
  }