// let darkmode = localStorage.getItem('darkmode');
// const themeSwitch = document.getElementById('theme-switch')



// const enableDarkmode = () => {
//     document.body.classList.add('darkmode')
//     localStorage.setItem('darkmode', 'active') 
// }

// const disableDarkmode = () => {
//     document.body.classList.remove('darkmode')
//     localStorage.setItem('darkmode', null)
// }

// if(darkmode === "active") enableDarkmode()

// themeSwitch.addEventListener("click", () => {
//     darkmode = localStorage.getItem('darkmode')
//     darkmode !== "active" ? enableDarkmode() : disableDarkmode()
// })

// import React, { useState } from "react";
// import Toggle from "react-toggle";
// import { useMediaQuery } from "react-responsive";

// export const DarkModeToggle = () => {
//     const [isDark, setIsDark] = useState(true);

//     const systemPrefersDark = useMediaQuery(
//         {
//             query: "(prefers-color-scheme: dark)",
//         },
//         undefined,
//         (isSystemDark) => setIsDark(isSystemDark)
//     );

//     return (
//         <Toggle
//         checked={isDark}
//         onChange={({target }) => setIsDark(target.checked)}
//         icons = {{ checked: "🌙", unchecked: "🔆" }}
//         aria-label="Dark mode toggle"
//         />
//     );
// };

