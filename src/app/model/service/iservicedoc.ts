
export interface IServiceDocumentation {

    getDocument(idDoc: string): void;

    getSummaries(): void;

    getSingleSummary(id: string): void;

    getAllOrganisations(): void;

    getSummariesForAnOrganisation(id: string): void;

}
