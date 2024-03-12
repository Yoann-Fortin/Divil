function getURL() {
  window.location.pathname = window.location.pathname.split("/")[0] + "/test";
  return window.location.pathname;
}
