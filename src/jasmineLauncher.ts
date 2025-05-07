
import Jasmine from 'jasmine';

process.on('message', async (specs: []) => {
    try {
        await new JasmineLauncher(specs).run();
        process.send('done');
        process.exit(0);
    }
    catch (err) {
        console.error('Error in child process:', err);
        process.exit(1);
    }
});

/**
 * Common jasmine-launcher
 *
 * @class
 */
export class JasmineLauncher {
    private readonly jasmineRunner: Jasmine;

    constructor(private readonly specs: string[]) {
        this.jasmineRunner = new Jasmine();

        this.configureJasmine();
    }

    /**
     * Default jasmine settings
     */
    private configureJasmine() {
        jasmine.getEnv().configure({
            random: false,
        });
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
    }

    /**
     * Jasmine runner
     *
     * @returns Execution of jasmine-specs
     */
    async run() {
        return new Promise((resolve, reject) => {
            this.jasmineRunner.addMatchingSpecFiles(this.specs);
            this.jasmineRunner.exitOnCompletion = false;
            this.jasmineRunner.execute()
                .then(async passed => {
                    try {
                        resolve(passed);
                    }
                    catch (err) {
                        reject(err);
                    }
                })
                .catch(e => {
                    console.log(e);
                });
        });
    }
}

