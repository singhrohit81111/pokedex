import styles from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {Logo} from '../Logo';

export default function Navbar({inputVal}) {
    const handleChange=(e)=>{
        inputVal(e.target.value);
    }
    return (
        <div className={styles.navBar}>
            <Logo />
            <div className={styles.navRight}>
                <div className={styles.favoriteBadge}>
                    <FontAwesomeIcon icon={faHeart} />
                    <span className={styles.badge}>3</span>
                </div>
                <div className={styles.searchBar}>
                    <input type="text" placeholder="Search..." onChange={handleChange}/>
                </div>
            </div>
        </div>
    );
}
