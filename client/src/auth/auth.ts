import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
    const [loading, setLoading] = useState(true);
    const [isauth, setIsauth] = useState(false);
    const [authName, setAuthName] = useState('');  
    const [authLastName, setAuthLastName] = useState('');
    const [authDni, setAuthDni] = useState('');
    const [authEmail, setAuthEmail] = useState('');
    const [authPhone, setAuthPhone] = useState('');
    const [authUserId, setAuthUserId] = useState("");
    const navigate = useNavigate();
    const API_URL = 'http://localhost:5000/api/auth/';

    const resetUserData = () => {
            setIsauth(false);
            setAuthName("");
            setAuthLastName("");
            setAuthDni("");
            setAuthPhone("");
            setAuthEmail("");
            setAuthUserId("");
    };

    useEffect(() => {
        const authStatus = async () => {
            try {
                const resp = await axios.get(`${API_URL}verify-token`, { withCredentials: true });
                const userData = resp.data.user;
                if (resp.status === 200 || resp.status === 304) { 
                    setIsauth(true);
                    setAuthName(userData.nombre);
                    setAuthLastName(userData.apellido);
                    setAuthDni(userData.documento);
                    setAuthEmail(userData.email);
                    setAuthUserId(userData.id);
                } else {
                    resetUserData();
                }
            } catch (error) {
                console.error(error);
                resetUserData();
            } finally {
                setLoading(false);
            };
        };
        authStatus();

    }, [navigate]);
    return {
        isauth,
        loading,
        authName,
        authLastName, 
        authEmail, 
        authPhone,
        authDni,
        setAuthEmail,
        setAuthName,
        setAuthLastName,
        setAuthPhone,
        setAuthDni,
        authUserId,
        //logout
    };
};

export default useAuth;