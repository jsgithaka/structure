'use client';
import { useState, useEffect } from 'react';

import styles from './Trigger.module.css';

export default function Trigger() {
    const [aside, setAside] = useState<boolean>(false);
    const triggerAside = () => {
        setAside(!aside);
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const targetNode = document.querySelector('aside');
            if (aside) {
                targetNode?.setAttribute('style', 'display: flex');
            } else {
                targetNode?.setAttribute('style', 'display: none');
            }
        }
    }, [aside]);

    return (
        <div
            className={styles.Trigger}
            onClick={triggerAside}
        >
            <p style={{ color: 'white' }}>Trigger Aside</p>
        </div>
    );
}
