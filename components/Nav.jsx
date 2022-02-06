import styles from './Nav.module.css';

export default function Nav() {
    return (
        <header className={styles.header}>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#archive">Episodes</a></li>
                </ul>
            </nav>
        </header>
    )
}