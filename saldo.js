// Verificar si MetaMask está instalado
if (typeof window.ethereum === 'undefined') {
  console.log('MetaMask no está instalado');
} else {
  // Obtener la dirección de la cuenta actual
  const web3 = new Web3(window.ethereum);
  window.ethereum.enable().then(() => {
    const address = web3.currentProvider.selectedAddress;
    console.log('Dirección de la cuenta: ' + address);

    // Obtener el saldo de la cuenta actual en Ether
    web3.eth.getBalance(address).then(balance => {
      const etherBalance = web3.utils.fromWei(balance, 'ether');
      console.log('Saldo de la cuenta en Ether: ' + etherBalance);

      // Mostrar la dirección y el saldo de la cuenta en tu sitio web
      const accountInfo = document.querySelector('.account-info');
      accountInfo.innerHTML = 'Dirección de la cuenta: ' + address + '<br>' + 'Saldo de la cuenta en Ether: ' + etherBalance;
    });
  });
}
