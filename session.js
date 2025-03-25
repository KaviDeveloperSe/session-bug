// sessionUtils.js
const fs = require('fs');
const path = require('path');

/**
 * Saves session data as a JSON file.
 * @param {string} sessionId - The session ID (not used in this function but kept for consistency).
 * @param {object} data - The session data to save.
 * @param {string} [fileName='creds.json'] - The name of the file to save. Defaults to 'creds.json'.
 * @returns {void}
 */
function makesession(data, fileName = 'creds.json') {
    try {
        
        const sessionDir = path.join(__dirname, 'session');
        if (!fs.existsSync(sessionDir)) {
            fs.mkdirSync(sessionDir, { recursive: true });
        }

        const filePath = path.join(sessionDir, fileName);

        if (fs.existsSync(filePath)) {
            return `exists`;
        }

        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        return `true`;
    } catch (err) {
        return `false`;
    }
}

// Export the function
module.exports = { makesession };