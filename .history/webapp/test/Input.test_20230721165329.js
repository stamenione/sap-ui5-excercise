const selector = {
    selector: {
        id: "inputText",
        viewName: "sap.ui.demo.walkthrough.view.HelloPanel"
    }
}

describe("Input", async () => {
    it("should read text from field", async () => {
        const input = await browser.asControl(selector)
        const value = await (input).getValue()
        expect(value).toEqual("Test Radi")
    })
})