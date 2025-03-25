const axios = require('axios');
const { makesession } = require('./session');

async function createSession(sessionId) {
    try {
        // Retrieve session data from the API
        const response = await axios.get(`https://kavi-x-bot.onrender.com/api/retrieve-session?sessionId=7fe922083588321d2a7e86cfa6f58c25`);
        const sessionData = await response.data.sessionData;
        const result = makesession(sessionData, 'creds.json');
        
        if (result === 'exists') {
            console.log('Session file already exists.');
        } else if (result === 'true') {
            console.log('Session file saved successfully.');
            process.exit(0);
        } else {
            console.log('Failed to save session file.');
            process.exit(0);
        }
    } catch (err) {
      console.log(err)
        console.log('Error retrieving session data.');
        
    }
  }
  
  createSession();