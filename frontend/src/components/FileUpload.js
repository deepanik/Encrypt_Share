// import React, { useState } from 'react';
// import axios from 'axios';

// const FileUpload = () => {
//     const [files, setFiles] = useState([]);
//     const [uniqueCode, setUniqueCode] = useState('');

//     const handleFileChange = (e) => {
//         const fileArray = Array.from(e.target.files);
//         const filesWithPaths = fileArray.map(file => ({
//             file,
//             path: file.webkitRelativePath || file.name,
//         }));
//         setFiles(filesWithPaths);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const formData = new FormData();
//         for (let { file, path } of files) {
//             formData.append('files', file);
//             formData.append('paths', path);
//         }

//         try {
//             const response = await axios.post('http://encryptshare:5000/upload', formData);
//             setUniqueCode(response.data.uniqueCode);
//         } catch (error) {
//             console.error('Error uploading files:', error);
//         }
//     };

//     const handleCopy = () => {
//         navigator.clipboard.writeText(uniqueCode).then(() => {
//             alert('Unique code copied to clipboard!');
//         }).catch(err => {
//             console.error('Failed to copy the unique code:', err);
//         });
//     };

//     return (
//         <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold text-center mb-4">Upload Your Files</h2>
//             <form onSubmit={handleSubmit} className="flex flex-col items-center">
//                 <input 
//                     type="file" 
//                     multiple 
//                     webkitdirectory="true" 
//                     onChange={handleFileChange} 
//                     className="block bg-white mx-auto mb-4 p-2 border rounded" 
//                 />
//                 <button 
//                     type="submit" 
//                     className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transform transition-transform duration-300 ease-in-out hover:scale-105"
//                 >
//                     Upload ⇡
//                 </button>
//             </form>
//             {uniqueCode && (
//                 <div className="mt-4 p-2 bg-green-100 rounded flex items-center">
//                     <p className="mr-2">Verification Code: <span className="font-semibold">{uniqueCode}</span></p>
//                     <button 
//                         onClick={handleCopy} 
//                         className="ml-2 bg-gray-400 text-white py-1 px-2 rounded"
//                     >
//                         Copy
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default FileUpload;





















import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
    const [files, setFiles] = useState([]);
    const [uniqueCode, setUniqueCode] = useState('');

    const handleFileChange = (e) => {
        const fileArray = Array.from(e.target.files);
        const filesWithPaths = fileArray.map(file => ({
            file,
            path: file.webkitRelativePath || file.name,
        }));
        setFiles(filesWithPaths);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (let { file, path } of files) {
            formData.append('files', file);
            formData.append('paths', path);
        }

        try {
            const response = await axios.post('https://encrypt-share-seven.vercel.app/upload', formData);
            setUniqueCode(response.data.uniqueCode);
        } catch (error) {
            console.error('Error uploading files:', error);
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(uniqueCode).then(() => {
            alert('Unique code copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy the unique code:', err);
        });
    };

    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-4">Upload Your Files</h2>
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
                <input 
                    type="file" 
                    multiple 
                    webkitdirectory="true" 
                    onChange={handleFileChange} 
                    className="block bg-white mx-auto mb-4 p-2 border rounded" 
                />
                <button 
                    type="submit" 
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transform transition-transform duration-300 ease-in-out hover:scale-105"
                >
                    Upload ⇡
                </button>
            </form>
            {uniqueCode && (
                <div className="mt-4 p-2 bg-green-100 rounded flex items-center">
                    <p className="mr-2">Verification Code: <span className="font-semibold">{uniqueCode}</span></p>
                    <button 
                        onClick={handleCopy} 
                        className="ml-2 bg-gray-400 text-white py-1 px-2 rounded"
                    >
                        Copy
                    </button>
                </div>
            )}
        </div>
    );
};

export default FileUpload;
