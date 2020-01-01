const fs = require('fs');

const interval = setInterval(() => {
    try{
        fs.unlink('./abcdefg.js', (err) => {
            if (err) {
                console.error(err);
                throw err;
            }
        });
    } catch(err) {
        clearInterval(interval);
    }
}, 1000);