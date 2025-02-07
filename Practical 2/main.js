// Function to display data in the table
let displayData = () => {
  let tbody = document.getElementById("tbody");
  tbody.innerHTML = ""; // Clear the table before adding new rows
  let storedUser = JSON.parse(localStorage.getItem("users")) || []; // Get users from localStorage

  storedUser.forEach((user, index) => {
    tbody.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td>${user.address.city}</td>
      </tr>
    `;
  });
};

// Handle form submission to add a new user
let btn = document.getElementById("btn");
btn.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent page reload when the form is submitted

  const email = document.getElementById("email").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const name = document.getElementById("name").value;
  const city = document.getElementById("city").value;
  const phone = document.getElementById("phone").value;

  let postObject = {
    email,
    password,
    name,
    phone,
    username,
    address: {
      city: city,
    },
  };

  // Save the new user to localStorage
  let storedUser = JSON.parse(localStorage.getItem("users")) || [];
  storedUser.push(postObject);
  localStorage.setItem("users", JSON.stringify(storedUser));

  // Display the updated data
  displayData();
});

