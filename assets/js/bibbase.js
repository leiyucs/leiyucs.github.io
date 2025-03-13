document.addEventListener("DOMContentLoaded", function() {
    let bibbaseContainer = document.getElementById("bibbase-container");
    let loadingMessage = document.getElementById("loading-message");
  
  
    if (bibbaseContainer) {
  
      let observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          mutation.addedNodes.forEach(function(node) {
  
            if (node.nodeType === 1 && node.innerHTML.trim().length > 0) {
              if (loadingMessage) {
                loadingMessage.style.display = "none";
              }
              observer.disconnect();
            }
          });
        });
      });
  
      observer.observe(bibbaseContainer, { childList: true, subtree: true });
  
      setTimeout(function() {
        if (loadingMessage) {
          loadingMessage.style.display = "none";
        }
      }, 10000);
    }
    
  });