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
        expect(value).toEqual("World")
    })

    it("should check if the field is writeable", async () => {
        await browser.screenshot("before-changed-value")

        const input = await browser.asControl(selector)
        await (input).setValue("Smith")

        await browser.screenshot("after-changed-value")
        const changedValue = await (input).getValue()

        expect(changedValue).toEqual("Smith")
    })
})