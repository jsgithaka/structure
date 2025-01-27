import styles from './Page.module.css';
import { Header, Main } from '@structureComponents';

export default function Page() {
    return (
        <body className={styles.Page}>
            <Header />
            <Main />
        </body>
    );
}
