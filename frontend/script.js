document.getElementById("travelForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const response = await fetch("http://localhost:5000/generate", {
    method: "POST",
    body: JSON.stringify(Object.fromEntries(formData)),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  document.getElementById("result").innerText = result.itinerary;
});
