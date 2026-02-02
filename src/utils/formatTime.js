export  function formatTime(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const hoursDisplay = String(hours).padStart(2, "0");
    const minutesDisplay = String(minutes).padStart(2, "0");
    const secondsDisplay = String(seconds).padStart(2, "0");
    return `${hoursDisplay}:${minutesDisplay}:${secondsDisplay}`;
}