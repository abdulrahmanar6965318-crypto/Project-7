function handleResponse(answer) {
  let result = document.getElementById("result");

  if (answer === "yes") {
    result.innerText = "congratulations🥳";
  } else {
    result.innerText ="😭"
  }
}
<script>
  alert("JS is working");
</script>
