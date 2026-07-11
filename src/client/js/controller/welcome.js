const $ = require('jquery');

class Welcome {
  constructor(view, controller) {
    this.view = view;
    this.controller = controller;

    this._isRunning;
    this._wasDismissed = false;
  }

  isRunning() {
    return this._isRunning;
  }

  wasDismissed() {
    return this._wasDismissed;
  }

  start() {
    this._isRunning = true;
    this.view.graph.disableAnimations();

    this.run();
  }

  end() {
    this.stop();
  }

  stop() {
    this._isRunning = false;
    this._wasDismissed = true;
    this.view.help.hideWelcome();
    this.view.popup.toggleHighlight('split', false);

    if (!this.view.graph.isSmallScreen()) {
      this.view.graph.enableAnimations();
    }
    this.view.graph.removeSelection();
  }

  coordinate() {
    let { x1, y2 } = this.view.searchbar.getBoundingBox();

    return { x: x1 + 16 + 35, y: y2 };
  }

  position() {
    return 'below-right';
  }

  run() {
      
    (() => {
      let d = $.Deferred();

      d.resolve();
      return d;
    })()
      .then(() => {
        // Update and display welcome.
        this.view.help.setWelcomeContent(
          'CIRCE',
          [
            'Welcome to <b>CIRCE: <u>C</u>onnectome <u>I</u>ntegration &amp; <u>R</u>easoning for <u>C</u>. <u>E</u>legans</b>',
            '<p>',
            'CIRCE integrates published connectome datasets of the nematode <i>C. elegans</i> into a ' +
            'single knowledge graph you can browse and reason over. The connectome is not one fixed ' +
            'wiring diagram &mdash; it varies with sex, developmental age, and how each animal was ' +
            'reconstructed &mdash; so CIRCE keeps every dataset distinct and lets you compare across them.',
            '<p>',
            'It brings together chemical-synapse and gap-junction wiring (White et al., 1986; ' +
            '<a href="https://doi.org/10.1038/s41586-019-1352-7" target="_blank">Cook et al., 2019</a>; ' +
            '<a href="https://doi.org/10.1038/s41586-021-03778-8" target="_blank">Witvliet et al., 2021</a>) ' +
            'with functional connectivity measured by neural activation (' +
            '<a href="https://www.nature.com/articles/s41586-023-06683-4" target="_blank">Randi et al., 2023</a>), ' +
            'and grounds every cell to <a href="https://wormbase.org/" target="_blank">WormBase</a> anatomy ' +
            'ontology terms. Extrasynaptic neuropeptide&ndash;receptor signaling and ' +
            'receptor-expression-inferred connection sign (activating vs. suppressing) are being added.',
            '<p>',
            'Search for a cell or class to see its connections, then open any cell to view its complete ' +
            'knowledge-graph connectivity across every dataset &mdash; including connections hidden from the ' +
            'current view by display thresholds &mdash; and download it as CSV.',
            '<p>',
            '<b><u>IMPORTANT: only functional connections with strong statistical confidence are shown ' +
            '(many observations, large transients, q&lt;0.05); see ' +
            '<a href="https://www.nature.com/articles/s41586-023-06683-4" target="_blank">Randi et al.</a> ' +
            'for evidence of additional functional connections.</u></b> The absence of significance does ' +
            'not imply significance of absence.',
            '<p>',
            'CIRCE is developed by <a href="https://wormbase.org/" target="_blank">WormBase</a> and the ' +
            '<a href="https://www.alliancegenome.org/" target="_blank">Alliance of Genome Resources</a>. ' +
            'It is built on FunCoNN (<a href="http://leiferlab.princeton.edu/" target="_blank">Leifer Lab</a>, ' +
            'Princeton) and <a href="https://nemanode.org/" target="_blank">NemaNode</a> (' +
            '<a href="https://www.zhenlab.com/" target="_blank">Zhen</a>, ' +
            '<a href="https://scholar.harvard.edu/aravisamuel" target="_blank">Samuel</a>, and ' +
            '<a href="https://lichtmanlab.fas.harvard.edu" target="_blank">Lichtman</a> labs).',
            '<p>',
            'This project is in beta and has not yet been peer reviewed. Source code, feature requests, and ' +
            'bug reports: <a href="https://github.com/raymond91125/circe" target="_blank">' +
            'github.com/raymond91125/circe</a>.'
          ]
        );
        this.view.help.showWelcome(this.coordinate(), this.position());
      });
  }
}

module.exports = Welcome;
