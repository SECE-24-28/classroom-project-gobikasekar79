document.getElementById("feedbackForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let course = document.getElementById("course").value;
    let rating = document.getElementById("rating").value;
    let feedback = document.getElementById("feedback").value;

    let card = `
      <div class="card">
        <p><b>${name}</b></p>
        <p><b>Course:</b> ${course}</p>
        <p><b>Rating:</b> ${rating} / 5</p>
        <p><b>Feedback:</b> ${feedback}</p>
      </div>
    `;

    document.getElementById("output").innerHTML += card;

    document.getElementById("feedbackForm").reset();
});
