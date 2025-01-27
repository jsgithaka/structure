import styles from './Dashboard.module.css';
import { Aside, Header, Main } from '@structureComponents';

export default function Dashboard() {
    return (
        <body className={styles.Dashboard}>
            <Header />
            <Main />
            <Aside />
        </body>
    );
}
