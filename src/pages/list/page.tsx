import React from 'react';
import router from 'umi/router';
import styles from './page.less';
import {EchartsComponent} from '../../../pub/echarts/echarts.component';
// import {EchartsComponent} from '../../lib/echarts/echarts.component';
// import {Hello} from '../../lib/hello/hello.component';

export default () => (
    <div className={styles.normal}>
        <h2>List Page</h2>
        <div
            onClick={() => {
                router.goBack();
            }}
        >
            Back
        </div>

        <EchartsComponent />
    </div>
);
