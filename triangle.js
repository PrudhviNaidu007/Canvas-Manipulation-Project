document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    
    // Draw Triangle
    document.getElementById("drawTriangleBtn").addEventListener("click", function() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        context.moveTo(120, 35); // Adjusted position by subtracting 10px from the y-coordinate and adding 20px to the x-coordinate
        context.lineTo(70, 135); // Adjusted position by subtracting 10px from the y-coordinate and adding 20px to the x-coordinate
        context.lineTo(170, 135); // Adjusted position by subtracting 10px from the y-coordinate and adding 20px to the x-coordinate
        context.closePath();
        context.fillStyle = "red";
        context.fill();
        context.strokeStyle = "black";
        context.stroke();
    });
    
    // Draw Rotated Triangle
    document.getElementById("drawRotatedTriangleBtn").addEventListener("click", function() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.save();
        context.translate(100, 100);
        context.rotate(Math.PI / 4);
        context.beginPath();
        context.moveTo(-50, -50);
        context.lineTo(50, -50);
        context.lineTo(0, 50);
        context.closePath();
        context.fillStyle = "red";
        context.fill();
        context.strokeStyle = "black";
        context.stroke();
        context.restore();
    });
    
    // Clear Canvas
    document.getElementById("clearCanvasBtn").addEventListener("click", function() {
        context.clearRect(0, 0, canvas.width, canvas.height);
    });
});
