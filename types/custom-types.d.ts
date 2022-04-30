interface Active {
  user: User
}
interface JoinChannel {
  userId: string
  channelId: string
}

interface User {
  name: string
  email: string
  image: string
  userId: string
  bio: string
}

interface ChatRoom {
  id: string
  name: string
  description: string
  creatorId: string
  members: User[]
  createdAt: string
  messages: Message[]
}

interface Message {
  id: string
  isDefault: boolean
  text: string
  createdAt: string
  roomId: string
  userId: string
}

declare global {
  interface Window {
    cloudinary?: any
  }
}

interface imageObject {
  width: number
  height: number
  imageUrl: string
}
declare module "cloudinary"
declare var io: SocketIOClientStatic
