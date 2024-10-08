import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'

document.addEventListener('DOMContentLoaded', async () => {
  const response = await fetch('../components/header.html');
  const headerHTML = await response.text();
  document.getElementById('header-container').innerHTML = headerHTML;
}); 
