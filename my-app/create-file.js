const fs = require('fs');

    const content = '1234';

    fs.writeFile('data.txt', content, (err) => {
        if (err) {
            console.error('Error creating file:', err);
            return;
        }
        console.log('data.txt created successfully!');
    });