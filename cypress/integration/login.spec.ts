const url = '/Activity/Legislation/Laws/Pages/LawSuggestionsSearch.aspx?t=lawsuggestionssearch&st=allsuggestions&ki=22';
describe('navigate and wait to load:', () => {
  before(() => {
    cy.visit(url);
    cy.waitForResources();
  });

  it('scrap and store results', () => {
    const scrapped = [];
    cy.get('table')
      .find('.rgMasterTable')
      .eq(0)
      .then(el => {
        const rows = el.find('.rgRow');
        rows.each((index, row) => {
          cy.wrap(row)
            .find('td')
            .eq(1)
            .invoke('text')
            .then(cell => scrapped.push(cell.trim()))
            .then(() => cy.writeFile('cypress/fixtures/example.json', scrapped));
        });
      });
  });
});
