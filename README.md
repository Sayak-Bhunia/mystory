![Blue Futuristic Technology Presentation](https://github.com/Sayak-Bhunia/mystory/assets/110457746/fbf14e0d-7be7-4866-a0a2-c318e3e8eca9)

# MyStory - Next.js Blog/Story telling Template

## Welcome to MyStory, a Next.js blog template designed for sharing personal experiences and stories anonymously.

## About

MyStory aims to provide a platform where individuals can share their stories without the pressure of revealing their identities. It's a safe space for expression and connection.

## Features

- Anonymous Story Sharing: Users can share their personal experiences and stories without disclosing their identities.
- Next.js Blog Template: Built with Next.js, MyStory serves as a flexible and customizable blog template.
- Markdown Support: Write your stories using Markdown for easy formatting.
- Responsive Design: MyStory is designed to be responsive, ensuring a seamless experience across devices.

![MyStory Flowchart](/public/gssoc.png)

## Feel free to Contribute

To get started with MyStory, follow these steps:

1. **Clone the Repository**: Clone the MyStory repository to your local machine.
   ```bash
   git clone https://github.com/yourusername/mystory.git
   ```
2. **Navigate to the Project Directory**: Change directory to the cloned repository.
   ```bash
   cd mystory
   ```
3. **Copy Environment Variables**: Copy Environment Variables to ".env".
   ```bash
   cp .env.example .env
   ```
4. Make your changes and commit them (`git commit -am 'Add some fooBar'`).
   > Make sure to lint and format your code before commiting
   >
   > - `npm run lint` to check for lint errors
   > - `npm run lint:fix` to fix lint errors
   > - `npm run format:check` to format the code
   > - `npm run format:fix` to fix the formatting

### Using Local Server

4. **Install Dependencies**: Install the necessary dependencies using npm.
   ```bash
   npm install
   ```
5. **Run the Development Server**: Start the Next.js development server.
   ```bash
   npm run dev
   ```

### Using Docker

4. **Start the Container**: Start Docker Containers

```bash
docker-compose -f docker-compose.dev.yaml up
# or
docker-compose -f docker-compose.dev.yaml up --build
```

### \* View Your Project

Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view your project.

 ## Contributors

To add your profile to the contributors page, please follow these steps:

1. Navigate to src/app/(routes)/contributors/ContributorsData.ts.

2. Add Only Your Information: You are allowed to add your own details to the ContributorsData.ts file to ensure accurate attribution of your contributions.

3. Respect Existing Information: Do not alter or modify the details of other contributors. Unauthorized changes may result in your pull request being rejected or not merged.

## Maintainers

- [xenotron](https://github.com/Sayak-Bhunia)
