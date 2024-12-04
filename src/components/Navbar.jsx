import {Link} from 'react-router-dom';
import {logo} from '../utils/constants'

import SearchBar from './SearchBar';

const Navbar = ()=>
    {
        return (<div style={{display : 'flex' , flexDirection : 'row' , alignItems: 'center', padding: 2, background: 'black', top: 0, justifyContent: 'space-between'}}>
            <Link to='/' style={{display : 'flex', alignItems : 'center'}} >
            <img src={logo} alt="logo" height='45' /></Link>
             <SearchBar />  
        </div>)
    }


export default Navbar    
