import { PathLike, readFile } from "fs";

export default function readFileAsync(path: number | PathLike) {
    return new Promise<Buffer>(function (resolve, reject) {
        readFile(path, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}
