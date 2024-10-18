import { useNavigate } from 'react-router-dom';

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  return (
    <button
      className="bg-gradient-to-r from-pink-300 to-blue-300 hover:bg-gradient-to-r from-pink-500 to-blue-600 text-white font-bold py-2 px-4 rounded"
      onClick={handleLogout}
    >
      Cerrar sesión
    </button>
  );
}

export default LogoutButton;