export default function FixedQueue<T>(size: number, initialValues: T[] = []) {
    var queue = Array.apply(null, initialValues);

    const trimHead = function() {
        if (queue.length <= size) {
            return;
        }

        Array.prototype.splice.call(queue, 0, queue.length - size);
    };

    const trimTail = function() {
        if (queue.length <= size) {
            return;
        }

        Array.prototype.splice.call(queue, size, queue.length - size);
    };

    const wrapMethod = function(
        methodName: string,
        trimMethod: typeof trimTail | typeof trimHead
    ) {
        var wrapper = function() {
            var method = Array.prototype[methodName as any];

            var result = method.apply(queue, arguments);

            trimMethod.call(queue);

            return result;
        };

        return wrapper;
    };

    queue.push = wrapMethod("push", trimHead);
    queue.splice = wrapMethod("splice", trimTail);
    queue.unshift = wrapMethod("unshift", trimTail);

    trimTail();

    return queue;
}
