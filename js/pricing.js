// Pricing section JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Pricing tabs functionality
    const tabTriggers = document.querySelectorAll('.pricing-tabs .tab-trigger');
    const pricingTabs = document.querySelectorAll('.pricing-tab');
    
    tabTriggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            // Remove active class from all triggers and tabs
            tabTriggers.forEach(t => t.classList.remove('active'));
            pricingTabs.forEach(tab => tab.classList.remove('active'));
            
            // Add active class to clicked trigger
            this.classList.add('active');
            
            // Show corresponding tab
            const deviceCount = this.getAttribute('data-device');
            const targetTab = document.querySelector(`.pricing-tab[data-device="${deviceCount}"]`);
            if (targetTab) {
                targetTab.classList.add('active');
            }
        });
    });
    
    // Billgang product embedding
    const purchaseButtons = document.querySelectorAll('.purchase-btn');
    
    purchaseButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            // Get product path and domain from button attributes
            const productPath = this.getAttribute('data-billgang-product-path');
            const domain = this.getAttribute('data-billgang-domain');
            
            if (productPath && domain) {
                // Open product in new tab if Billgang embed script is not loaded
                if (typeof window.billgangEmbed === 'undefined') {
                    window.open(`https://${domain}/${productPath}`, '_blank');
                }
                // Otherwise, the Billgang embed script will handle the click event
            }
        });
    });
});
