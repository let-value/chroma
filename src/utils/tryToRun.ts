type Function = (...args: any) => any;

class RunContext<T extends Function> {
    constructor(
        private func: T,
        private attempts: number,
        private timeout: number,
        private resolve: (
            value: ReturnType<T> | PromiseLike<ReturnType<T>>
        ) => void,
        private reject: (reason?: any) => void
    ) {}

    run = async () => {
        try {
            let result = this.func();

            if (result.then) {
                result = await result;
            }

            this.resolve(result);
            return;
        } catch {
            //
        }

        if (this.attempts === 0) {
            this.reject();
            return;
        }

        this.attempts--;
        setTimeout(this.run, this.timeout);
    };
}

export default function tryToRun<T extends Function>(
    func: T,
    attempts: number = 5,
    timeout: number = 1000
) {
    return new Promise<ReturnType<T>>((resolve, reject) => {
        const context = new RunContext(
            func,
            attempts,
            timeout,
            resolve,
            reject
        );
        context.run();
    });
}
