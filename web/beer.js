$('#order').click(function() {
  var name = $('#name').val();
  var amount = $('#amount').val();
  if (!isNaN(amount) && amount > 0) {
    var order = {
      name: name,
      amount: amount
    };
    console.log('Order: ' + JSON.stringify(order));
    $.ajax('/order', {
      data: JSON.stringify(order),
      contentType: 'application/json',
      type: 'POST',
      success: function(result, status, xhr) {
        console.log('Result: ' + result);
        var result = JSON.parse(result);
        $('#message').text('Your ' + amount + ' beer(s) will be ready in ' + result.wait_time + ' minutes.');
      }
    });
  }
});
