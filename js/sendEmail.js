function resetForm() {
    // Reset all the inputs
    document.getElementById("name").value = "";
    document.getElementById("service").selectedIndex = 0; // Reset select to default
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
  
    // Optional: Scroll to the top of the form
    var form = document.getElementById("myForm");
    form.scrollIntoView({ behavior: "smooth" });
  }
  