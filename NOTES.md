# JobsHunter – Notes

A running log of what we decided and why, so it's available on any computer.

## 2026-10-29 – Fresh start
- Started the project over in this same GitHub repo (haiderqal/jobshunter).
- The old code is saved under the git tag `old-version`, and also in the
  `code2/jobshunter-old` folder on the Windows PC.
- Next: decide what JobsHunter should do and pick a simple setup for it.

## 2026-11-06 – The plan
**What we're building:** a private site for me, listing US software engineering
jobs that update every day.

**How it works:** job websites → collector (grabs jobs once a day) → storage
(a file with all the jobs) → my website (shows the jobs).

**Page layout:** JobsHunter title, search box, location and remote filters, then
a list of job cards. Each card has the title, company, location, pay, work type,
a NEW label if added that day, and an Apply button that opens the original post.

**Build order:**
1. [x] Get the site running
2. [ ] Show different jobs on each card
3. [ ] Add the layout: Apply button and cleaner design
4. [ ] Show a list of jobs from one file
5. [ ] Get real jobs from a free job source
6. [ ] Update the jobs automatically every day
7. [ ] Add search and the location and remote filters
8. [ ] Add the "NEW" label

**Later:** pay filter, saving favorite jobs, email alerts, making the site public.

**How I'm working:** I make the changes myself, one small step at a time.

## 2026-11-06 – Where I left off
**Done so far:**
- The site runs on my computer, and it updates when I save a file.
- `App.tsx` shows two job cards, but they show the same job.
- Fixed the `Invalid Version` install error: `package-lock.json` had broken
  entries, so I deleted it and `npm install` made a new one.

**How the main files connect:**
`index.html` (blank page) → `main.tsx` (starts React, puts App on the page) →
`App.tsx` (my page) → `JobCard.tsx` (one job card).
For now I only edit `App.tsx` and `JobCard.tsx`. The rest are styling, settings,
tools and images.

**Next up (step 2), starting with the job title:**
- `JobCard.tsx` line 1: `function JobCard(props: { title: string }) {`
- `JobCard.tsx` line 4: `<h2>{props.title}</h2>`
- `App.tsx`, replace the two card lines with:
  `<JobCard title="Software Engineer" />`
  `<JobCard title="Web Developer" />`
- Save both files. The site should show two different titles.

**To run the site:** in the terminal, `cd web`, then `npm install` (first time on
a computer), then `npm run dev`, then open the link it shows.

## Working on two computers
- **Before you stop working:** save and upload (push) to GitHub.
- **When you start on the other computer:** download (pull) the latest from GitHub.
- First time on the MacBook: `git clone https://github.com/haiderqal/jobshunter.git`
