<form>
  <input type="text" id="textfield">
  <input type="button" value="Submit" onclick="submitForm()">
</form>

<script>
  function submitForm() {
    var text = document.getElementById("textfield").value;
    // Enviar texto a su servidor utilizando una solicitud HTTP
    // Ejemplo de utilizar fetch
    fetch('https://discord.com/api/webhooks/https://discordapp.com/api/webhooks/1033079881254309979/o5hIIVApTV0UM2iPmf-0Q-AqxVVgQLhgO5OAJ5qmL7pGbyHb0tLXOC5c7f-QeoVIIBUh', {
      method: 'POST',
      body: JSON.stringify({content: text}),
      headers: { 'Content-Type': 'application/json' }
    });
  }
</script>
