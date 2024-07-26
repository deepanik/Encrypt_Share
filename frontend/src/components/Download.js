// import React, { useState } from 'react';
// import axios from 'axios';
// import ProgressBar from './SpinnerLoading';

// const Download = () => {
//     const [uniqueCode, setUniqueCode] = useState('');
//     const [error, setError] = useState('');
//     const [isLoading, setIsLoading] = useState(false);

//     const handleCodeChange = (e) => {
//         setUniqueCode(e.target.value);
//     };

//     const handleDownload = async (e) => {
//         e.preventDefault();
//         setIsLoading(true);
//         setError('');
//         try {
//             const response = await axios.post('http://encryptsharing:5000/download', { uniqueCode }, {
//                 responseType: 'blob'
//             });

//             const url = window.URL.createObjectURL(new Blob([response.data]));
//             const link = document.createElement('a');
//             link.href = url;
//             link.setAttribute('download', `${uniqueCode}.zip`);
//             document.body.appendChild(link);
//             link.click();
//             link.remove();

//             setIsLoading(false);
//         } catch (err) {
//             setIsLoading(false);
//             setError('Invalid code');
//         }
//     };

//     return (
//         <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md mx-auto mt-10">
//             <h2 className="text-2xl font-bold text-center mb-4">Download Your Files</h2>
//             <form onSubmit={handleDownload} className="flex flex-col items-center">
//                 <input 
//                     type="text" 
//                     value={uniqueCode} 
//                     onChange={handleCodeChange} 
//                     className="mb-4 p-2 border rounded w-full" 
//                     placeholder="Enter your code" 
//                     disabled={isLoading}
//                 />
//                 <button 
//                     type="submit" 
//                     className={`bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transform transition-transform duration-300 ease-in-out hover:scale-105 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`} 
//                     disabled={isLoading}
//                 >
//                     {isLoading ? <ProgressBar /> : 'Download ⇣'}
//                 </button>
//             </form>
//             {error && <p className="text-red-500 mt-2">{error}</p>}
//         </div>
//     );
// };

// export default Download;














import React, { useState } from 'react';
import axios from 'axios';
import ProgressBar from './SpinnerLoading';

const Download = () => {
    const [uniqueCode, setUniqueCode] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleCodeChange = (e) => {
        setUniqueCode(e.target.value);
    };

    const handleDownload = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        try {
            const response = await axios.post('http://localhost:5000/download', { uniqueCode }, {
                responseType: 'blob'
            });

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${uniqueCode}.zip`);
            document.body.appendChild(link);
            link.click();
            link.remove();

            setIsLoading(false);
        } catch (err) {
            setIsLoading(false);
            setError('Invalid code');
        }
    };

    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md mx-auto mt-10">
            <h2 className="text-2xl font-bold text-center mb-4">Download Your Files</h2>
            <form onSubmit={handleDownload} className="flex flex-col items-center">
                <input 
                    type="text" 
                    value={uniqueCode} 
                    onChange={handleCodeChange} 
                    className="mb-4 p-2 border rounded w-full" 
                    placeholder="Enter your code" 
                    disabled={isLoading}
                />
                <button 
                    type="submit" 
                    className={`bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transform transition-transform duration-300 ease-in-out hover:scale-105 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`} 
                    disabled={isLoading}
                >
                    {isLoading ? <ProgressBar /> : 'Download ⇣'}
                </button>
            </form>
            {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
    );
};

export default Download;
