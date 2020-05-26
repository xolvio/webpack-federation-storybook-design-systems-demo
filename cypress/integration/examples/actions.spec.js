// const getAutomaticallyDeployedURL = () => {
//   const branchName = Cypress.env("GITHUB_REF").replace("refs/heads/", "")
//   return `https://xolvio-ui.s3.amazonaws.com/${branchName}/App/index.html`
// }

context('Smoke test', () => {
  beforeEach(() => {
    // const path = getAutomaticallyDeployedURL()
    // console.log("GOZDECKI path", path)
    cy.visit( `https://xolvio-ui.s3.amazonaws.com/training-demo/App/index.html`)
    // cy.visit(getAutomaticallyDeployedURL())
  })

  it('The app shows up', () => {
    // https://on.cypress.io/type
    cy.findByText(/Prepare your team and product for success./)
  })

})
