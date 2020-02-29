let list: number[] = []
let text_list: string[] = []
input.onButtonPressed(Button.B, function () {
    list = [1, 2]
    while (list.length > 0) {
        basic.showString("" + (list.shift()))
        basic.pause(1000)
    }
})
input.onButtonPressed(Button.A, function () {
    text_list = ["a", "b", "c"]
    while (text_list.length > 0) {
        basic.showString("" + (text_list.shift()))
        basic.pause(1000)
    }
})
