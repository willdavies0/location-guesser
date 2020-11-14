export function capitalise(txt) {
  if (!txt) return 'n/a';
  return txt.replace(/_/g, ' ').replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
