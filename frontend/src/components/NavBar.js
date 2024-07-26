// // // src/components/Navbar.js
// // import React from 'react';
// // import logo from './logo.jpg'

// // const NavBar = () => {
// //     return (
// //         <nav className="w-full p-4 flex items-center justify-between shadow-md">
// //             <div className="flex items-center">
// //                 <img 
// //                     //  src="data:logo/jpg;base64,..."
// //                     src={logo}
// //                     alt="Logo"
// //                     className="w-8 h-8"
// //                 />
// //                 <span className="ml-2 text-lg font-semibold">File Seeker</span>
// //             </div>
// //         </nav>
// //     );
// // };

// // export default NavBar;

// import React from 'react';

// const NavBar = () => {
//     return (
//         <nav className="w-full p-4 flex items-center justify-between shadow-md bg-black">
//             <div className="flex items-center">
//                 <div className="w-8 h-8 flex items-center justify-center">
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="text-blue-400 neon-logo"
//                     >
//                         <circle cx="12" cy="12" r="10" stroke="cyan" />
//                         <line x1="12" y1="12" x2="16" y2="8" stroke="magenta" />
//                         <line x1="12" y1="12" x2="8" y2="16" stroke="magenta" />
//                         <line x1="12" y1="12" x2="12" y2="6" stroke="magenta" />
//                     </svg>
//                 </div>
//                 <span className="ml-2 text-lg font-semibold text-white">EncryptShare</span>
//             </div>
//         </nav>
//     );
// };

// export default NavBar;






import React from 'react';

const NavBar = () => {
    return (
        <nav className="w-full p-4 flex items-center justify-between shadow-md bg-black">
            <div className="flex items-center">
                <div className="w-8 h-8 flex items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-400 neon-logo"
                    >
                        <circle cx="12" cy="12" r="10" stroke="cyan" />
                        <line x1="12" y1="12" x2="16" y2="8" stroke="magenta" />
                        <line x1="12" y1="12" x2="8" y2="16" stroke="magenta" />
                        <line x1="12" y1="12" x2="12" y2="6" stroke="magenta" />
                    </svg>
                </div>
                <span className="ml-2 text-lg font-semibold text-white neon-text">EncryptShare</span>
            </div>
        </nav>
    );
};

export default NavBar;

