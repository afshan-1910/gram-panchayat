function openEmergency() {
    document.getElementById("emergencyPopup").style.display = "block";
  }
  
  function closeEmergency() {
    document.getElementById("emergencyPopup").style.display = "none";
  }
  
  // Function to open GPS / Maps
  function openGPS() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
  
        // Open Google Maps with current location
        window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lon}`);
      }, function(error) {
        alert('Unable to fetch location. Please allow GPS permission.');
      });
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  }
  