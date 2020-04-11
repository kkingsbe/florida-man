function submit() {
  localStorage.setItem("month", document.getElementById("monthSelect").value)
  localStorage.setItem("day", document.getElementById("dayInput").value)
  window.location.href = "html/results.html"
}