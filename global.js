document.addEventListener("DOMContentLoaded", () => {
    // 1. Check if we are already on the index page so we don't display it there
    const currentPage = window.location.pathname.split("/").pop();
    if (currentPage === "index.html" || currentPage === "") return;

    // 2. Create the "Back to Index" button element
    const backButton = document.createElement("a");
    backButton.innerText = "← Back to Index";
    backButton.href = "index.html";
    
    // 3. Apply basic styles so it looks nice and stays pinned/accessible
    Object.assign(backButton.style, {
        position: "fixed",
        top: "20px",
        left: "20px",
        padding: "10px 15px",
        backgroundColor: "#007bff",
        color: "#ffffff",
        textDecoration: "none",
        borderRadius: "5px",
        fontFamily: "sans-serif",
        boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
        zIndex: "10000"
    });

    // 4. Inject the button into the very top of the body
    document.body.prepend(backButton);
});