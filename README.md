## Development

### What technologies should I know?

- [React](https://react.dev/learn)
- [NextJS](https://nextjs.org/) (Only the pages concept for the auto [routing](https://nextjs.org/docs/app/building-your-application/routing))
- [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/)

### How to start?

- Clone this repo
- Install dependencies `npm i` or `yarn`
- Run locally `npm run dev` or `yarn dev`

### How to manage content?

This was a quick and dirty project. All the content was kind of dumped into the file `/data/data.js`. I tried to split it as much as possible since in the future this will be probably in DB and not in code.

- i18n: everything with this flag is an object with the keys `en` and `es`, for now I have it fixed to `es` since not all the content is already prepared for `en` also. But the feature is already working when we want it to be multi language.

#### How to manage **Learning Paths**?

In the file `/data/data.js` you will find the list `learningPaths`, each one has a key `courses` which is a list of course ids, you can see the `courses` lists with each `id` below.

#### How to manage **Courses**?

In the file `/data/data.js` you will find the list `courses`, each of them contains:
- id
- title (i18n)
- thumbnail: used like `/images/${thumbnail}-thumbnail.jpg`
- content (i18n): markdown format with the course description
- video (i18n): youtube embed url of the course `intro` video
- tags: used for search purposes alongside the title

#### How to manage **Classes**?

In the file `/data/data.js` you will find the list `classes`, each of them contains:
- id
- courseId
- title (i18n): Serving also as `slug` (for the url), probably at some point a **slug** attribute will be added
- video (i18n): youtube embed url for class video
- content (i18n): markdown format with the class content

### Main components

- [Layout](components/layout.jsx): Wrapper for the basic visual structure but most important for all the context:
  - ThemeContext: dark/light -> initially the SO and after the user select some, we keep with that one.
  - LanguageContext: es/en -> for now `es` until we have more translated content and videos, this last is not mandatory, since we can display the classes without video
  - SearchContext: We need to improve this yet, but ... for now the header contains a search bar and every page will auto filter whatever is there. In some future I want to do a landing page with a huge search bar. And the result will be the sum of learning paths, courses, clases, and other resources
- [ClassDetails](components/class-details.jsx)
- [CourseDetails](components/course-details.jsx)

## Deployment

> [!NOTE]
> No need to touch anything for now

### [Vercel](https://vercel.com/)

This repo is being listening to for a Vercel project, every time something is pushed to the `main` branch, it will be automatically deployed in Vercel. I haven't created a Vercel **team** since I'm not paying for now. And I don't think it's necessary for the moment either.

### [Firebase](https://console.firebase.google.com/)

Kind of similar situation with the payment, I'm using the free layer. I'm just using for now `Firestore` service to store people's `feedback` and `subscriptions`.