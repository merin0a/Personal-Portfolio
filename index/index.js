document.addEventListener('DOMContentLoaded', () => {
    const clouds = document.querySelectorAll('.cloud');
    const boats = document.querySelectorAll('.boat');
    const fish = document.querySelectorAll('.fish');

    // --- 1. CLOUD INTERACTION (Poof!) ---
    clouds.forEach(cloud => {
        cloud.addEventListener('click', () => {
            cloud.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
            cloud.style.transform = 'scale(1.5)';
            cloud.style.opacity = '0';
            
            setTimeout(() => {
                cloud.style.transform = 'scale(1)';
                cloud.style.opacity = '0.5';
            }, 2000);
        });
    });

    // --- 2. BOAT INTERACTION (Move & Play) ---
    boats.forEach(boat => {
        // Speed boost on touch/hover
        boat.addEventListener('mouseenter', () => {
            boat.style.animationDuration = '5s'; 
        });
        
        boat.addEventListener('mouseleave', () => {
            boat.style.animationDuration = '25s';
        });

        // Physical movement when "playing" with it (Click)
        boat.addEventListener('mousedown', () => {
            boat.classList.add('boat-active');
            boat.style.marginTop = '-25px'; // Jump up
        });

        window.addEventListener('mouseup', () => {
            boat.classList.remove('boat-active');
            boat.style.marginTop = '0px'; // Splash back down
        });
    });

    // --- 3. FISH INTERACTION (Scared Away) ---
    fish.forEach(f => {
        f.addEventListener('mouseover', () => {
            f.style.transition = 'margin-left 0.5s ease-out, background-color 0.3s';
            f.style.marginLeft = '100px';
            
            const originalColor = window.getComputedStyle(f).backgroundColor;
            f.style.backgroundColor = '#ff4757'; // Flash red
            
            setTimeout(() => {
                f.style.marginLeft = '0px';
                f.style.backgroundColor = '';
            }, 1000);
        });
    });
});