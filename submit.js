<form>
  <input type="text" id="textfield">
  <input type="button" value="Submit" onclick="submitForm()">
</form>

<script>
  function submitForm() {
    var text = document.getElementById("textfield").value;
    // Enviar texto a su servidor utilizando una solicitud HTTP
    // Ejemplo de utilizar fetch
    fetch('https://discord.com/api/webhooks/YOUR_WEBHOOK_ID', {
      method: 'POST',
      body: JSON.stringify({content: text}),
      headers: { 'Content-Type': 'application/json' }
    });
  }
</script>
