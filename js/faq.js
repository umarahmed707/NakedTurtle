// FAQ section JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // FAQ tabs functionality
    const tabTriggers = document.querySelectorAll('.faq-tabs .tab-trigger');
    const faqTabs = document.querySelectorAll('.faq-tab');
    
    tabTriggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            // Remove active class from all triggers and tabs
            tabTriggers.forEach(t => t.classList.remove('active'));
            faqTabs.forEach(tab => tab.classList.remove('active'));
            
            // Add active class to clicked trigger
            this.classList.add('active');
            
            // Show corresponding tab
            const category = this.getAttribute('data-category');
            const targetTab = document.querySelector(`.faq-tab[data-category="${category}"]`);
            if (targetTab) {
                targetTab.classList.add('active');
            }
        });
    });
    
    // Accordion functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const accordionItem = this.closest('.accordion-item');
            
            // Toggle active class on clicked item
            accordionItem.classList.toggle('active');
            
            // Optional: Close other accordion items when one is opened
            // const parentAccordion = this.closest('.accordion');
            // const siblingItems = parentAccordion.querySelectorAll('.accordion-item');
            // siblingItems.forEach(item => {
            //     if (item !== accordionItem) {
            //         item.classList.remove('active');
            //     }
            // });
        });
    });
});
