document.addEventListener('DOMContentLoaded', () => {
    const tubes = document.querySelectorAll('.test-tube');
    
    // Function to handle the drag start
    function handleDragStart(event) {
        event.dataTransfer.setData('text', event.target.id); // Storing the id of the element being dragged
    }

    // Function to handle the drop event
    function handleDrop(event) {
        event.preventDefault();
        const draggedTubeId = event.dataTransfer.getData('text');
        const draggedTube = document.getElementById(draggedTubeId);
        const targetTube = event.target;

        // Ensure that the target is a valid test tube and not already filled
        if (targetTube.classList.contains('test-tube') && targetTube !== draggedTube) {
            const draggedWater = draggedTube.querySelector('.water');
            const targetWater = targetTube.querySelector('.water');

            // Allow water to be moved if conditions are met (e.g., matching color and space)
            if (!targetWater || (draggedWater && targetWater && draggedWater.style.backgroundColor === targetWater.style.backgroundColor)) {
                // Move the water
                targetTube.appendChild(draggedWater);
            }
        }
    }

    // Function to allow the drop event
    function handleAllowDrop(event) {
        event.preventDefault();
    }

    // Attach event listeners
    tubes.forEach(tube => {
        tube.addEventListener('dragstart', handleDragStart);
        tube.addEventListener('drop', handleDrop);
        tube.addEventListener('dragover', handleAllowDrop);
    });
});
