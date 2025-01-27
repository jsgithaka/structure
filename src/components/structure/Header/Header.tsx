import styles from './Header.module.css';
import { Trigger } from '@sharedComponents';

export default function Header() {
    return (
        <header className={styles.Header}>
            <Trigger />
        </header>
    );
}
