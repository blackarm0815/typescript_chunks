// Prints complete URL
document.write(window.location.href);
  
// Prints protocol like http: or https:
document.write(window.location.protocol); 
 
// Prints hostname with port like localhost or localhost:3000
document.write(window.location.host);
  
// Prints hostname like localhost or www.example.com
document.write(window.location.hostname);
 
// Prints port number like 3000
document.write(window.location.port);
  
// Prints pathname like /products/search.php
document.write(window.location.pathname); 
 
// Prints query string like ?q=ipad
document.write(window.location.search);
 
// Prints fragment identifier like #featured
document.write(window.location.hash);


// servicenow client side
window.open("/nav_to.do?uri=%2Falm_hardware.do%3Fsys_id%3D" + closest.object.alm_hardware_sysid);

// servicenow server side
gs.getProperty("glide.servlet.uri")
