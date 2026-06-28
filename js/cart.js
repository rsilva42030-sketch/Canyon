var Cart = (function () {
  var key = 'canyon_cart';
  var listeners = [];

  function get() {
    try { return JSON.parse(localStorage.getItem(key)) || []; } catch (e) { return []; }
  }

  function save(items) {
    localStorage.setItem(key, JSON.stringify(items));
    notify();
  }

  function notify() {
    listeners.forEach(function (fn) { fn(get()); });
  }

  function add(productId, qty) {
    qty = qty || 1;
    var items = get();
    var existing = items.filter(function (i) { return i.id === productId; });
    if (existing.length) {
      existing[0].qty += qty;
    } else {
      items.push({ id: productId, qty: qty });
    }
    save(items);
  }

  function remove(productId) {
    save(get().filter(function (i) { return i.id !== productId; }));
  }

  function update(productId, qty) {
    if (qty < 1) { remove(productId); return; }
    var items = get();
    var found = items.filter(function (i) { return i.id === productId; });
    if (found.length) found[0].qty = qty;
    save(items);
  }

  function clear() { save([]); }

  function count() {
    return get().reduce(function (sum, i) { return sum + i.qty; }, 0);
  }

  function total(products) {
    var items = get();
    return items.reduce(function (sum, ci) {
      var p = products.filter(function (pr) { return pr.id === ci.id; });
      if (p.length) sum += parseFloat(p[0].price.replace('€', '').replace(',', '.')) * ci.qty;
      return sum;
    }, 0);
  }

  function onChange(fn) {
    listeners.push(fn);
    fn(get());
  }

  return { get: get, add: add, remove: remove, update: update, clear: clear, count: count, total: total, onChange: onChange };
})();
