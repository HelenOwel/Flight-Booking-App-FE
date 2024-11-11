import { FaTwitter, FaTiktok, FaInstagram } from 'react-icons/fa';

function CheckUs() {
  return (
    <div className="flex justify-center items-center bg-cover z-10 absolute bg-center">
      <div className="bg-slate-700 text-white rounded-lg p-8 w-80 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Details</h2>
        <p className="text-center mb-4">Feel free to contact us with questions</p>
        <p className="text-center font-semibold mb-6">Email: wuesemimi@gmail.com</p>
        <div className="flex justify-center space-x-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="w-6 h-6 text-blue-400 hover:text-blue-500" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            <FaTiktok className="w-6 h-6 text-black hover:text-gray-600" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="w-6 h-6 text-pink-500 hover:text-pink-600" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default  CheckUs;
