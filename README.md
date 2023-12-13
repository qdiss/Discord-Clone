# Fullstack Discord Clone: Next.js 14, React, Socket.io, Prisma, Tailwind, MySQL 

Comprehensive Features:

1. **Real-Time Messaging with Socket.io:**
   - Enable seamless, real-time communication among users using Socket.io for instant message updates.

2. **Attachments with UploadThing:**
   - Integrate UploadThing to allow users to send attachments as messages, enhancing the versatility of communication.

3. **Dynamic Message Management:**
   - Empower users with the ability to delete and edit messages in real time, ensuring a flexible and responsive conversation environment for all participants.

4. **Multifaceted Communication Channels:**
   - Create text, audio, and video call channels, providing diverse options for communication within the platform.

5. **1:1 Conversations and Video Calls:**
   - Facilitate private conversations and video calls between individual members, fostering personalized and direct interactions.

6. **Member Management Capabilities:**
   - Implement features for member management, including the ability to kick members and dynamically change roles between guest and moderator.

7. **Unique Invite System:**
   - Generate unique invite links and implement a fully functional invite system, streamlining the onboarding process for new users.

8. **Infinite Loading for Messages:**
   - Utilize tanstack/query to implement an infinite loading mechanism, fetching messages in batches of 10 for an optimized and smooth user experience.

9. **Server Creation and Customization:**
   - Enable users to create and customize servers, tailoring the platform to meet specific community needs.

10. **Beautiful UI with TailwindCSS and ShadcnUI:**
    - Craft a visually appealing and intuitive user interface using TailwindCSS and ShadcnUI, ensuring an engaging and enjoyable user experience.

11. **Full Responsivity and Mobile UI:**
    - Optimize the platform for full responsiveness, offering users a seamless experience across various devices, with special attention to an intuitive mobile UI.

12. **Light/Dark Mode:**
    - Provide users with the flexibility to choose between light and dark modes, enhancing accessibility and personalization.

13. **Websocket Fallback with Polling:**
    - Implement a robust websocket fallback mechanism, seamlessly transitioning to polling with alerts in case of connection issues.

14. **ORM Using Prisma:**
    - Leverage Prisma as the Object-Relational Mapping (ORM) tool, simplifying database interactions and ensuring efficient data management.

15. **MySQL Database with Planetscale:**
    - Utilize a MySQL database hosted on Planetscale, ensuring scalability, reliability, and optimal performance for data storage.

16. **Authentication with Clerk:**
    - Implement secure user authentication using Clerk, ensuring a robust and user-friendly sign-in and sign-up process.


## Tech Stack

**Client:** Next.js 14, React, TailwindCSS

**Server:** Next.js 14, Clerk

**Database:** Prisma



## Cloning

Repository Cloning:

```bash
 git clone https://github.com/qdiss/Discord-Clone.git
```


## Prerequisites: 

- Node version 18.x.x


## Package Installation:

```bash
npm i
```
    **Setup .env file:**
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=

DATABASE_URL=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

LIVEKIT_API_KEY=
LIVEKIT_API_SECRET=
NEXT_PUBLIC_LIVEKIT_URL=
```
## Prisma Setup:
```bash
npx prisma generate
npx prisma db push
```
## Start the Application

```bash
npm run dev
```
## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/klobodanovic-adis/)
