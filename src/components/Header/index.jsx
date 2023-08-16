
import './Header.css';
import casa from '../../assets/ico/casa.svg';
import mensagens from '../../assets/ico/mensagens.svg';
import iconeUsuario from '../../assets/ico/usuario.png';
import joana from '../../assets/img/joana.png';
import { Link } from 'react-router-dom';
import logopetadote from '../../assets/img/logopetadote.svg'

export const Header = () => {

    const { pathname } = window.location;
    let classeUsuario = '';
    let classePerfil = 'none';
    let classeHeader = '';
    let classeNone = 'none';

    if (pathname === '/' || pathname === '/mensagens' || pathname === '/perfil') {
        classeHeader = 'header';
        classeNone = 'icone-header-usuario'
    };

    const user = localStorage.getItem("idUser")
    if (pathname === '/perfil') {
        classePerfil = ''
        classeUsuario = 'none';

    };
    console.log(user);
    return (
        <header className={classeHeader} data-header>
            <nav className='nav-header' style={{ minWidth: '9rem' }} >
                <Link to='/'><img src={logopetadote} alt='Logo PetAdote' className='logo-header' /></Link>
                <Link to='/' ><img src={casa} alt='' className='icone-header' /></Link>
                <Link to='mensagens'><img src={mensagens} alt='' className='icone-header' /></Link>
            </nav>
            <Link to={!user ? `${"login"}` : `${"/"}`} className={classeNone + ' icone-usuario'} data-usuario >
                <img src={iconeUsuario} alt='' className={classeUsuario} data-usuario-icone /> <img src={joana} alt='' className={classePerfil} data-usuario-foto />
            </Link>
        </header>
    )
}

