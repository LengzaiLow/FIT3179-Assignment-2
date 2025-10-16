// JavaScript to embed Vega-Lite visualisations into the HTML page.

// Function to embed a Vega-Lite spec into a target element.
function embedVis(target, spec) {
  vegaEmbed(target, spec, { actions: false })
    .then((result) => {
      // result.view provides access to the Vega view instance.
    })
    .catch((error) => console.error(error));
}

// When the DOM is ready, embed all visualisations.
document.addEventListener('DOMContentLoaded', function () {
  embedVis('#gdp_map', 'js/gdp_choropleth.vg.json');
  embedVis('#fuel_bar_chart', 'js/fuel_type_bar_chart.vg.json');
  embedVis('#engine_price_chart', 'js/engine_price_chart.vg.json');
  embedVis('#brand_bar_chart', 'js/brand_bar_chart.vg.json');
});
