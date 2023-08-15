describe("Teste para confirmar funcionamento de funções do cypress-network-idle", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("Testando retorno de status 400 mas passando de forma errada", () => {
        cy.waitForNetworkIdlePrepare({
            alias: "getUser",
            method: "GET",
            pattern: "*",
        });
        
        cy.get('[data-cy="error-400"]').click();
        cy.waitForNetworkIdle(2000);
    });

    it("Testando retorno de status 400 e falhando como se deve", () => {
        cy.waitForNetworkIdlePrepare({
            alias: "getUser",
            method: "GET",
            pattern: "*",
            failOn4xx: true,
        });
        
        cy.get('[data-cy="error-400"]').click();
        cy.waitForNetworkIdle(2000);
    });

    it("Testando retorno de status 500 mas passando de forma errada", () => {
        cy.waitForNetworkIdlePrepare({
            alias: "getUser",
            method: "GET",
            pattern: "*",
        });

        cy.get('[data-cy="error-500"]').click();
        cy.waitForNetworkIdle(2000);
    });

    it("Testando retorno de status 500 e falhando como se deve", () => {
        cy.waitForNetworkIdlePrepare({
            alias: "getUser",
            method: "GET",
            pattern: "*",
            failOn5xx: true,
        });

        cy.get('[data-cy="error-500"]').click();
        cy.waitForNetworkIdle(2000);
    });
});
