import { JasmineLauncher } from "./jasmineLauncher";
import * as child_process from 'child_process';

(async () => {
    const tests = [
        '.dist/src/tests/tc1.js',
        '.dist/src/tests/tc2.js'
    ];

    const createForkedProcess = (test) => {
        const fork = child_process.fork('./.dist/src/jasmineLauncher.js', {
            stdio: 'inherit'
        });
    
        fork.send([test]);
    
        fork.on('message', (msg) => {
            if (msg === 'done') {
                console.log('Tests completed successfully');
                fork.kill();
            }
        });
    };

    /**
     * To emulate the parallel execution of tests
     */
    for (const test of tests) {
        createForkedProcess(test);
    }
})();