## MockInterviewerGPT
MockInterviewerGPT is a tool for students and professionals looking to prepare for interviews with ease. This AI-driven template simulates real interview scenarios, providing tailored questions and feedback to help users improve their responses.

Built with Next.js and leveraging Gemini AI, this open-source template is perfect for developers aiming to create advanced interview preparation tools. Whether you're applying for a new job or prepping for a big promotion, this template is designed to streamline your interview prep.

## Live Demo
[https://mock-interviewer-gpt.vercel.app/](https://mock-interviewer-gpt.vercel.app/)

## Features
- Secure login with Gmail, facebook or email/password.
- Experience realistic interview scenarios tailored to your field.
- Each Interview includes AI-generated questions.
- Receive AI-curated feedback on your responses.

## Technologies Used
- Next.js and React for Frontend and Backend
- Google Gemini API Key for AI-Powered Features
- Clerk authentication for Authorization

## Use Cases
- Simulate job interview scenarios with AI-generated questions based on the specified role and experience level.
- Practice and improve interview responses with instant AI-driven feedback. 
- Suitable for preparing for technical, behavioural, and general interviews.

## Installation Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/0xmetaschool/mock-interviewer-gpt.git
    ```

2. Navigate to the project directory:
    ```bash
    cd mock-interviewer-gpt
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Set up the environment variables:
   Create a .env file in the root directory as `.env.local` with the following environment variables:

    ```bash
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
    CLERK_SECRET_KEY=
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=
    NEXT_PUBLIC_DRIZZLE_DB_URL=
    sslmode=
    NEXT_PUBLIC_GEMINI_API_KEY=
    NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT=
    NEXT_PUBLIC_INFORMATION=
    NEXT_PUBLIC_QUESTION_NOTE=
    ```
   
5. Run the development server:
    ```bash
    npm run dev
    ```

6. Run the development server:

Open the browser and go to `http://localhost:3000`. Ensure that everything is loading and the live preview works as expected.

## Screenshots


<div style="float:left; display: flex; justify-content: space-between;">
  <img src="https://github.com/0xmetaschool/mock-interviewer-gpt/blob/main/public/mock-interviewer-gpt-template-landing-page.png?raw=true" alt="MockInterviewerGPT Template Landing Page screenshot" style="width: 49%; border: 2px solid black;" />
  <img src="https://github.com/0xmetaschool/mock-interviewer-gpt/blob/main/public/mock-interviewer-gpt-template-interview-page.png?raw=true" alt="MockInterviewerGPT Template Interview Page screenshot" style="width: 49%; border: 2px solid black;" />
</div>

<div style="margin-top: 10px;">
  <img src="https://github.com/0xmetaschool/mock-interviewer-gpt/blob/main/public/mock-interviewer-gpt-template-interview-page-2.png?raw=true" alt="MockInterviewerGPT Template Interview Page screenshot" style="width: 100%; border: 2px solid black;" />
</div>


## How to use the application
1. Sign in using Google, email, or Facebook account.
2. Add a new interview and provide the job role, description, and years of experience.
3. Respond to AI-generated questions and record them for the feedback.
4. The AI will evaluate the answers and provide you with complete feedback.
5. History of user interviews is saved on the dashboard and a User can re-attempt the existing interviews from the dashboard as well.

## Contributing

We love contributions! Here's how you can help make the AI-powered FinanceGuru even better:

1. Fork the project (`gh repo fork https://github.com/0xmetaschool/ai-mock-interview.git`)
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Submit a Pull Request

## License
This project is licensed under the MIT License - see the [LICENSE file](https://github.com/0xmetaschool/ai-mock-interview/blob/main/LICENSE) for details.

## Contact

Please open an issue in the GitHub repository for any queries or support.
