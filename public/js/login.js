const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect to the main page
      Swal.fire({
        text: "Ready To Tackle Your Tasks",
        icon: "success",
        background: "snow",
        confirmButtonText: "Go",
      }).then((result) => {
        document.location.replace("/homepage");
      });
    } else {
      Swal.fire({
        text: "Login Failed",
        icon: "error",
        background: "snow",
        confirmButtonText: "Ok",
      });
    }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
