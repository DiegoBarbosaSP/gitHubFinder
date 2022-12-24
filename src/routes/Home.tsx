import Search from '../components/Search';
import { useState } from 'react';
import { UserProps } from '../types/user';
import  User  from '../components/User';
import Error from '../components/Error';

const Home = () => {
    const [user, setUser] = useState<UserProps | null>(null);
    const [error, setError] = useState(false)
    // Buscando dados na api
    const loadUser = async (userName: string) => {
        // Tratando erro de user 
        setError(false);
        setUser(null);
        

        const res = await fetch(`https://api.github.com/users/${userName}`)

        const data = await res.json();

        // Verificando api
        // console.log(data);

        // exibindo erro
        if(res.status === 404){
            setError(true);
            return;

        }
        // matching com os parâmetros da busca 
        const { avatar_url, login, location, followers, following } = data

        const userData: UserProps = {
            avatar_url,
            login,
            location,
            followers,
            following,
        };

        setUser(userData);
    };

    return (
        <div>
            {/* Enviando a função por meio de props para disparo */}
            <Search loadUser={loadUser} />
            {/* Exibindo dados do usuário */}
            {user && <User{...user}/>}
            {error && <Error/>}
        </div>
    );
};

export default Home