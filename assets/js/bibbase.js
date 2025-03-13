document.addEventListener("DOMContentLoaded", function() {
    let bibbaseContainer = document.getElementById("bibbase-container");
    let loadingMessage = document.getElementById("loading-message");
  
    console.log("📢 MutationObserver script started.");
  
    if (bibbaseContainer) {
      console.log("✅ Found #bibbase-container, setting up observer...");
  
      let observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          mutation.addedNodes.forEach(function(node) {
            console.log("🔍 Node added:", node);
  
            if (node.nodeType === 1 && node.innerHTML.trim().length > 0) {
              console.log("🎉 BibBase content detected, hiding loading message!");
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
        console.log("⚠️ Timeout reached, hiding loading message as a fallback.");
        if (loadingMessage) {
          loadingMessage.style.display = "none";
        }
      }, 10000);
    } else {
      console.error("❌ #bibbase-container not found!");
    }
  });