import styles from './Header.module.css'

function Header() {

    return (
        <img className={styles.logo} src="/Logo.svg" alt="Logo" />
    );
}

export default Header;
