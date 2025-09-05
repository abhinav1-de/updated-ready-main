// Anti-Inspect Protection
(function() {
    'use strict';
    
    // Disable right-click context menu
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });
    
    // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+S
    document.addEventListener('keydown', function(e) {
        // F12
        if (e.keyCode === 123) {
            e.preventDefault();
            return false;
        }
        // Ctrl+Shift+I (Developer Tools)
        if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
            e.preventDefault();
            return false;
        }
        // Ctrl+Shift+J (Console)
        if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
            e.preventDefault();
            return false;
        }
        // Ctrl+U (View Source)
        if (e.ctrlKey && e.keyCode === 85) {
            e.preventDefault();
            return false;
        }
        // Ctrl+S (Save Page)
        if (e.ctrlKey && e.keyCode === 83) {
            e.preventDefault();
            return false;
        }
        // Ctrl+A (Select All)
        if (e.ctrlKey && e.keyCode === 65) {
            e.preventDefault();
            return false;
        }
        // Ctrl+P (Print)
        if (e.ctrlKey && e.keyCode === 80) {
            e.preventDefault();
            return false;
        }
        // Ctrl+C (Copy)
        if (e.ctrlKey && e.keyCode === 67) {
            e.preventDefault();
            return false;
        }
    });
    
    // Disable text selection
    document.addEventListener('selectstart', function(e) {
        e.preventDefault();
        return false;
    });
    
    // Disable drag and drop
    document.addEventListener('dragstart', function(e) {
        e.preventDefault();
        return false;
    });
    
    // Console warning message
    console.clear();
    console.log('%c⚠️ WARNING ⚠️', 'color: red; font-size: 30px; font-weight: bold;');
    console.log('%cThis is a browser feature intended for developers. Unauthorized access is prohibited.', 'color: red; font-size: 16px;');
    console.log('%cZ-ANIME © 2024', 'color: orange; font-size: 14px;');
    
    // Detect if developer tools is open
    let devtools = {
        open: false,
        orientation: null
    };
    
    const threshold = 160;
    
    setInterval(() => {
        if (window.outerHeight - window.innerHeight > threshold || 
            window.outerWidth - window.innerWidth > threshold) {
            if (!devtools.open) {
                devtools.open = true;
                // Redirect or show warning
                document.body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100vh;background:#000;color:#ff6b35;font-family:Arial;font-size:24px;text-align:center;"><div><h1>⚠️ Access Denied</h1><p>Developer tools are not allowed on this site.</p><p style="font-size:16px;margin-top:20px;">Please close developer tools to continue.</p></div></div>';
            }
        } else {
            devtools.open = false;
        }
    }, 500);
    
    // Additional protection against console access
    Object.defineProperty(window, 'console', {
        get: function() {
            throw new Error('Console access is disabled');
        },
        set: function() {
            throw new Error('Console modification is not allowed');
        }
    });
    
    // Disable printing
    window.addEventListener('beforeprint', function(e) {
        e.preventDefault();
        return false;
    });
    
    // Disable save shortcuts in some browsers
    window.addEventListener('keydown', function(e) {
        if (e.ctrlKey && (e.keyCode === 83)) {
            e.preventDefault();
            return false;
        }
    });
    
})();
