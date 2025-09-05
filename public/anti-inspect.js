// Anti-Inspect Protection
(function() {
    'use strict';
    
    // Check if we're on a video/watch page
    const isWatchPage = window.location.pathname.includes('/watch/') || 
                       window.location.pathname.includes('/video/') ||
                       document.querySelector('video');
    
    // Disable right-click context menu (but allow on video elements)
    document.addEventListener('contextmenu', function(e) {
        // Allow right-click on video elements for video controls
        if (e.target.tagName === 'VIDEO' || e.target.closest('.video-player')) {
            return true;
        }
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
        // Only block these on non-video pages or allow them for functionality
        if (!isWatchPage) {
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
        }
    });
    
    // Disable text selection (but allow on input fields and video pages)
    document.addEventListener('selectstart', function(e) {
        // Allow text selection on input fields, video pages, and interactive elements
        if (e.target.tagName === 'INPUT' || 
            e.target.tagName === 'TEXTAREA' || 
            e.target.contentEditable === 'true' ||
            isWatchPage ||
            e.target.closest('.search-input') ||
            e.target.closest('.video-player')) {
            return true;
        }
        e.preventDefault();
        return false;
    });
    
    // Allow drag and drop on video pages for better functionality
    if (!isWatchPage) {
        document.addEventListener('dragstart', function(e) {
            e.preventDefault();
            return false;
        });
    }
    
    // Console warning message
    console.clear();
    console.log('%c⚠️ WARNING ⚠️', 'color: red; font-size: 30px; font-weight: bold;');
    console.log('%cThis is a browser feature intended for developers. Unauthorized access is prohibited.', 'color: red; font-size: 16px;');
    console.log('%cZ-ANIME © 2024', 'color: orange; font-size: 14px;');
    
    // Only apply strict devtools detection on non-video pages
    if (!isWatchPage) {
        // Detect if developer tools is open
        let devtools = {
            open: false,
            orientation: null
        };
        
        const threshold = 200;
        
        setInterval(() => {
            if (window.outerHeight - window.innerHeight > threshold || 
                window.outerWidth - window.innerWidth > threshold) {
                if (!devtools.open) {
                    devtools.open = true;
                    // Show warning but don't break the page completely
                    console.clear();
                    console.log('%c⚠️ DEVELOPER TOOLS DETECTED ⚠️', 'color: red; font-size: 20px; font-weight: bold;');
                    console.log('%cPlease close developer tools to respect our terms.', 'color: orange; font-size: 14px;');
                }
            } else {
                devtools.open = false;
            }
        }, 1000);
    }
    
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
