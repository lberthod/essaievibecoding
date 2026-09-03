// JavaScript point added to the site

// Main initialization function that can be exported
function initWebsite() {
    document.addEventListener('DOMContentLoaded', function() {
        const button = document.getElementById('changeTextButton');
        const textElement = document.getElementById('dynamicText');
        
        const texts = [
            "JavaScript a ajouté une fonctionnalité interactive à ce site !",
            "Cliquez encore pour voir d'autres messages !",
            "Les scripts JavaScript rendent les pages web dynamiques.",
            "Vous pouvez ajouter autant de JavaScript que vous voulez ici !"
        ];
        
        let currentIndex = 0;
        
        button.addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % texts.length;
            textElement.textContent = texts[currentIndex];
            
            // Add a little animation effect
            textElement.style.transform = 'scale(1.1)';
            setTimeout(() => {
                textElement.style.transform = 'scale(1)';
            }, 200);
        });
        
        // Additional interactive features
        const featureCards = document.querySelectorAll('.feature-card');
        
        featureCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.05)';
                this.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.3)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)';
            });
        });
        
        // Add click effect to stat cards
        const statCards = document.querySelectorAll('.stat-card');
        
        statCards.forEach(card => {
            card.addEventListener('click', function() {
                this.style.animation = 'pulse 0.5s';
                setTimeout(() => {
                    this.style.animation = '';
                }, 500);
            });
        });
        
        // Add a simple animation to the container on page load
        const container = document.querySelector('.container');
        container.style.opacity = '0';
        container.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            container.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            container.style.opacity = '1';
            container.style.transform = 'translateY(0)';
        }, 300);
    });
}

// Export the function for use in index.html
if (typeof window !== 'undefined') {
    window.myWebsiteFunctions = window.myWebsiteFunctions || {};
    window.myWebsiteFunctions.init = initWebsite;
}

// Initialize the website functionality
initWebsite();