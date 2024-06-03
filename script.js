// JavaScript code
document.addEventListener('DOMContentLoaded', function() {
    const loginRegisterPanel = document.getElementById('loginRegisterPanel');
    const dashboard = document.getElementById('dashboard');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const backButton = document.getElementById('backButton');
    const ownerControls = document.getElementById('ownerControls');
    const fileUploadForm = document.getElementById('fileUploadForm');
    const fileSettings = document.getElementById('fileSettings');
    const filesContainer = document.getElementById('filesContainer');

    function showLoginRegisterPanel() {
        loginRegisterPanel.classList.remove('hidden');
        dashboard.classList.add('hidden');
    }

    function showDashboard() {
        dashboard.classList.remove('hidden');
        loginRegisterPanel.classList.add('hidden');
    }

    function showBackButton() {
        backButton.classList.remove('hidden');
    }

    function hideBackButton() {
        backButton.classList.add('hidden');
    }

    function showOwnerControls() {
        ownerControls.classList.remove('hidden');
    }

    function hideOwnerControls() {
        ownerControls.classList.add('hidden');
    }

    function showFileUploadForm() {
        fileUploadForm.classList.remove('hidden');
    }

    function hideFileUploadForm() {
        fileUploadForm.classList.add('hidden');
    }

    function addFilePanel(title, price) {
        const filePanel = document.createElement('div');
        filePanel.classList.add('filePanel');
        
        const titleElement = document.createElement('h3');
        titleElement.textContent = title;
        filePanel.appendChild(titleElement);
        
        const priceElement = document.createElement('p');
        priceElement.textContent = 'Price: $' + price;
        filePanel.appendChild(priceElement);
        
        const button = document.createElement('button');
        button.textContent = price === '0' ? 'Get' : 'Buy';
        filePanel.appendChild(button);

        if (price === '0') {
            button.addEventListener('click', function() {
                // Simulate downloading the file (replace with actual download logic)
                alert('File downloaded!');
            });
        } else {
            button.addEventListener('click', function() {
                // Simulate purchasing the file (replace with actual purchase logic)
                alert('File purchased!');
            });
        }
        
        filesContainer.appendChild(filePanel);
    }

    // Handle login form submission
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const usernameInput = loginForm.querySelector('input[type="text"]').value;
        const passwordInput = loginForm.querySelector('input[type="password"]').value;
        
        // Check if username and password match owner credentials
        if (usernameInput === '1234' && passwordInput === 'GIGEL') {
            showDashboard();
            showBackButton();
            showOwnerControls();
            showFileUploadForm(); // Show file upload form for owner
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });

    // Handle register form submission
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Your registration logic goes here
        // For now, let's just call showDashboard() to simulate successful registration
        showDashboard();
        showBackButton();
        showOwnerControls(); // Show owner controls for demonstration
    });

    // Handle back button click
    backButton.addEventListener('click', function() {
        showLoginRegisterPanel();
        hideBackButton();
        hideOwnerControls(); // Hide owner controls when returning to login/register panel
        hideFileUploadForm(); // Hide file upload form when returning to login/register panel
    });

    // Handle file upload form submission
    fileUploadForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const titleInput = fileUploadForm.querySelector('input[type="file"]').value;
        const priceInput = fileUploadForm.querySelector('input[type="text"]').value;
        
        // Your file upload logic goes here
        
        // Simulating file upload by adding a new file panel
        addFilePanel(titleInput, priceInput);
    });

    // Call showLoginRegisterPanel() initially
    showLoginRegisterPanel();
});
function downloadFile(filename, content) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
}

// Modify the addFilePanel function to handle downloading files
function addFilePanel(title, price, content) {
    const filePanel = document.createElement('div');
    filePanel.classList.add('filePanel');
    
    const titleElement = document.createElement('h3');
    titleElement.textContent = title;
    filePanel.appendChild(titleElement);
    
    const priceElement = document.createElement('p');
    priceElement.textContent = 'Price: $' + price;
    filePanel.appendChild(priceElement);
    
    const button = document.createElement('button');
    button.textContent = price === '0' ? 'Get' : 'Buy';
    filePanel.appendChild(button);

    if (price === '0') {
        button.addEventListener('click', function() {
            // Download the file
            downloadFile(title + '.txt', content);
        });
    } else {
        button.addEventListener('click', function() {
            // Simulate purchasing the file (replace with actual purchase logic)
            alert('File purchased!');
        });
    }
      filesContainer.appendChild(filePanel);
}
button.addEventListener('click', function() {
    if (price === '0') {
        // Download the file
        downloadFile(title + '.txt', content);
    } else {
        // Show payment panel
        showPaymentPanel();
    }
});
const processPaymentButton = document.getElementById('processPaymentButton');
processPaymentButton.addEventListener('click', function() {
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;

    // Validate card details (you would need a more robust validation)
    if (cardNumber && expiryDate && cvv) {
        alert('Payment successful!');
    } else {
        alert('Please fill in all the fields.');
    }
});