# ✨ Affirmation App ✨

For my project, I decided to follow a tutorial on a ToDo app, however I decided to make it my own by having it so that instead of to do list items a user was able to write affrimations for the day and check them off when they are done saying them.

![Screenshot 2025-05-22 at 9 57 12 PM](https://github.com/user-attachments/assets/4810dd77-4bec-496c-a26d-6452e86de098)


## Techinologies used
NEXTJS, PRISMA, MONGODB, TYPESCRIPT, REACT, TAILWIND

### ✨ Full CRUD features ✨

![Screen Recording 2025-05-22 at 10 00 58 PM](https://github.com/user-attachments/assets/d7bca9b0-fb6e-42bf-851b-d1fa491f3e77)

## BACKEND
The affirmation item included an id which was type string. The title which was the affirmation that the user typed in (also a string). It has a ? after string because that means that it could be empty. wasSaid is a boolean type meaning it can either be true or false (true when a user check off that they have said their affirmation. It should be noted that it is false by default). Lastly the createdAt so we can keep track of when each affrimation was created.

<img width="397" alt="Screenshot 2025-05-22 at 10 14 57 PM" src="https://github.com/user-attachments/assets/f40da2a1-fa6b-4fbc-bee7-ecb82ddb3b3b" />


## The Database 💻
The database I utlized was mongoDB Here is a screenshot of the cluster (called AffirmCluster) that is storing all my data for this project:

![Screenshot 2025-05-22 at 10 15 47 PM](https://github.com/user-attachments/assets/532e8f2a-51f0-4e8c-ad38-3c28ca0c53cc)

Prisma was used to connect to mongoDB and edit the affirmations being stored in the database

## Key Achievments
While building an affirmation app, I learned how to integrate Prisma for seamless database management, use Tailwind CSS for responsive UI design, and apply JavaScript to create dynamic, interactive features.


## What I learned:
I had never worked with prisma and MongoDB before, but they were very useful. I was able to use server actions in order to edit the affirmations. I also learned how useful tailwind is in styling elements.

## Set Up details
Prisma set up just required the person install prisma you run `npm i prisma --save-dev`

To connect prisma to mongoDB you run `npx prisma init --datasource-provider mongoDB`

The user sets up the database url after creating a cluster on mongodb.com

Video inspiration: https://www.youtube.com/watch?v=9OoKXOq7ENo
