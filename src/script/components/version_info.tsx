import { useState, useEffect } from "react";

function Version_info() {

    const [time, settime] = useState(0);

    useEffect(() => {

        // 记录运行时长
        const playTime = setInterval((): void => {
            settime((prevCount) => {
                return prevCount + 1;
            });
        }, 1000);

        return function clear() {
            clearInterval(playTime);
        };
    }, []);

    return (
        <div id="version_info" className="info">
            Node.js: <span id="node-version"></span>
            <br />
            Chromium: <span id="chrome-version"></span>
            <br />
            Electron: <span id="electron-version"></span>
            <br />
            已运行&nbsp;:&nbsp;&nbsp;{time}s
            <br />
        </div>
    );
}

export default Version_info;