document.getElementById("searchButton").addEventListener("click", function() {
    const searchValue = document.getElementById("searchInput").value.toLowerCase();
    const products = document.querySelectorAll(".product-card");
  
    products.forEach(product => {
      const title = product.querySelector("h3").textContent.toLowerCase();
      const description = product.querySelector("p").textContent.toLowerCase();
  
      if (title.includes(searchValue) || description.includes(searchValue)) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });

  document.getElementById("searchInput").addEventListener("keyup", function(e) {
    if (e.key === "Enter") {
      document.getElementById("searchButton").click();
    }
  });