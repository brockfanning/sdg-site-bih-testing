$( document ).ready(function() {
  $("a[href*='/1-a-3']").parent().remove();
  $("a[href*='/8-9-2']").parent().remove();
  $("a[href*='/13-3-2']").parent().remove();
  $("a[href*='/17-6-2']").parent().remove();
});

$( document ).ready(function() {
  $('.zip-download-container').addClass('container');
});

$( document ).ready(function() {
  opensdg.chartConfigAlter(function(config, info) {
    var overrides = {
      options: {
        tooltips: {
          callbacks: {
            title: function(tooltipItem, data) {
              var label = (Array.isArray(tooltipItem)) ? tooltipItem[0].label : tooltipItem.label;
              return convertXAxisLabel(label);
            }
          }
        },
        scales: {
          xAxes: [{
            ticks: {
              callback: function(value, index, values) {
                return convertXAxisLabel(value);
              }
            },
          }]
        },
      }
    }

    // Add these overrides onto the normal config.
    $.extend(true, config, overrides);
  });

  function convertXAxisLabel(label) {
    let strVal = label.toString();
    let newLabel = label;
    if (strVal.length > 1 && label.charAt(1) == ")") {
      newLabel = label.substing(2);
    }
    
    return newLabel;
  }
});
