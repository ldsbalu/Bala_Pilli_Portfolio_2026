# Bala Pilli Portfolio

A responsive portfolio built with Next.js, TypeScript, and Tailwind CSS. Personal copy, experience, and curated project case studies live in `lib/portfolio-data.ts`.

## Assumptions and content sources

- The title, biography, skills, experience, education, certifications, and email are based on the supplied resume.
- The portfolio uses the supplied portrait and includes the supplied resume as a downloadable PDF.
- The Work section puts the stock allocation project first, followed by the CNN ASCII art research project and the Codenames AI client.
- The stock allocation case study is based on the supplied report and describes the app as an educational prototype. It reports the forecast results and limitations without claiming investment performance.
- The ASCII art case study is based on the supplied project write-up. It does not claim measured output quality that the write-up does not report.
- Codenames details are visibly marked for confirmation because no project report or README details were supplied.
- LinkedIn is omitted because the resume did not include a profile URL. No project outcomes or case-study details have been invented.
- The email currently comes from the supplied resume; confirm that it is still the best public contact address before publishing.

## Run locally

1. Install Node.js 20.9 or later.
2. From this folder, run `npm install`.
3. Run `npm run dev` and open [http://localhost:3000](http://localhost:3000).
4. Create a production build with `npm run build`, then run it using `npm start`.

The project uses no secrets or environment variables. The featured case studies are stored in `lib/portfolio-data.ts`; source links open the supplied GitHub repositories.

## Deploy

Import this folder into Vercel as a new project and use the default Next.js build settings. The build command is `npm run build`; the output is served by Next.js. A custom domain and social-sharing image can be configured in the hosting provider after deployment.

## Before publishing

- Confirm the resume email and the `AI engineer` title are current.
- Add your LinkedIn URL if you want it shown.
- Confirm the Codenames client summary, role, tools, and current outcome from its README.
- Add the ASCII-art repository link if there is a public source repository for it.
- Add screenshots or demo links only where you have real assets and URLs.
- Confirm that your resume and portrait are suitable for public download/display.
# Bala_Pilli_Portfolio_2026
