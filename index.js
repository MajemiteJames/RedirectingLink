function mapsSelector() {
    if /* if we're on iOS, open in Apple Maps */
      ((navigator?.userAgentData?.platform.indexOf("iPhone") != -1) || 
       (navigator?.userAgentData?.platform.indexOf("iPod") != -1) || 
       (navigator?.userAgentData?.platform.indexOf("iPad") != -1))
      window.open("maps://www.google.com/maps?saddr=6.59123,3.3424&daddr=6.44468,3.412075");
      
    else /* else use Google */
      window.open("http://maps.google.com/maps?saddr=6.59123,3.3424&daddr=6.44468,3.412075");
  }