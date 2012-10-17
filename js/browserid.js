ODS.ready(function() {
  $('#browseridLogin a').click(function(event) {
    event.preventDefault();
    $("#loginPopup").modal("hide");
    ODS.createBrowserIdSession(newSessionCallback);
  });
  $('#browseridRegister a').click(function(event) {
    event.preventDefault();
    $("#loginPopup").modal("hide");
    ODS.registerViaBrowserId(newSessionCallback);
  });
  $('#browseridAuto').click(function(event) {
    event.preventDefault();
    $("#loginPopup").modal("hide");
    ODS.registerOrLoginViaBrowserId(newSessionCallback);
  });
  $('#browseridConnect').click(function(event) {
    event.preventDefault();
    s_odsSession.connectToBrowserId(loadOnlineAccounts);
  });
});
