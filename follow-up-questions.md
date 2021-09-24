##Follow-up questions

1. What external libraries did you use? What are they used for?

- `react-redux`, `@reduxjs/toolkit` : to use for state management and to use RTK query to fetch data.
- `actionsheet-react` : to use for making action sheet which is main part, I used the latest updated one.
- `classnames` : to use for conditionally joining class names
- `tailwind`, `postcss`, `autoprefixer`, `prettier` : to use for Tailwind CSS UI framework and prettier

2. What are the difficulties you faced while working on this project? How did you manage to get around them? Feel free to link to StackOverflow posts- we're all constantly learning :)

- Well, to be honest, it was first time for me to implement Tailwind CSS into CRA projects, I normally used SCSS for CRA and ever used Tailwind CSS for Next.js projects with SASS.

I used this online link to resolve that. [https://dev.to/saviomartin/set-up-tailwind-in-react-the-fastest-way-2a4d]

- While implementing RTK query, it's similar as react-query, but never used that with `redux-toolkit`.
  I used this official docs to implement that. [https://redux-toolkit.js.org/tutorials/rtk-query]
