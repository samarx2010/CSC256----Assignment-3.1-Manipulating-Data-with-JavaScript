 const form = document.getElementById('multiForm');
    const outputDiv = document.getElementById('output');
    const outputBtn = document.getElementById('outputBtn');
    const resetBtn = document.getElementById('resetBtn');

    outputBtn.addEventListener('click', function() {
      const field1 = document.getElementById('field1').value.trim();
      const field2 = document.getElementById('field2').value.trim();
      const field3 = document.getElementById('field3').value.trim();
      const field4 = document.getElementById('field4').value.trim();

      // Ensure all fields are filled
      if (!field1 || !field2 || !field3 || !field4) {
        alert('Please fill all fields before displaying titles.');
        return;
      }

      // Prepare the output HTML
      const outputHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <title>All Entered Movie Titles</title>
          <style>
            body { font-size: 1.2em; font-family: sans-serif; padding: 2em; }
            ul { list-style: none; padding: 0; }
            li { margin-bottom: 1em; }
          </style>
        </head>
        <body>
          <h3>All Entered Movie Titles</h3>
          <ul>
            <li><b>Movie 1:</b> ${escapeHTML(field1)}</li>
            <li><b>Movie 2:</b> ${escapeHTML(field2)}</li>
            <li><b>Movie 3:</b> ${escapeHTML(field3)}</li>
            <li><b>Movie 4:</b> ${escapeHTML(field4)}</li>
          </ul>
        </body>
        </html>
      `;

      // Open in new window
      const win = window.open('', '_blank', 'width=500,height=400');
      win.document.write(outputHTML);
      win.document.close();

 });

    resetBtn.addEventListener('click', function() {
      form.reset();
      outputDiv.innerHTML = '';
    });

    // Function to escape HTML
    function escapeHTML(str) {
      return str.replace(/[&<>"']/g, function (m) {
        return ({
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#39;'
        })[m];
      });
    }