
/**
* このファイルを使って、独自の関数やブロックを定義してください。
* 詳しくはこちらを参照してください：https://minecraft.makecode.com/blocks/custom
*/

/**
 * Genome
 */
//% weight=100 color=#0fbc11 icon=""
namespace Genome {
    let xPos = -9
    //  デバッグ用座標
    let xPosMax = -2
    //  デバッグ用座標
    let isEdit = false
    let cmdCnt = 0
    let cmdCntMax = 5

    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    function CommandCheck(): boolean {
        isEdit = true
        if (cmdCnt == 0) {
            player.say(">>[処理開始]　最大実行可能回数:" + cmdCntMax)
        }

        let check = cmdCntMax < cmdCnt
        if (check) {
            player.say(">>[処理落ちしました]")
        } else {
            player.say(">>---残り実行可能回数:" + (cmdCntMax - cmdCnt))
        }

        if (isEdit) {
            isEdit = false
            cmdCnt += 1
        }

        return check
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function Space() {

        if (xPos > xPosMax || CommandCheck()) {
            return
        }
        blocks.place(AIR, world(xPos, 1, 24))
        xPos += 1
    }

    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function GenomeSet(num: number = 1) {
        if (CommandCheck()) {
            return
        }

        for (let i = 0; i < num; i++) {
            if (xPos <= xPosMax) {
                blocks.place(HONEYCOMB_BLOCK, world(xPos, 1, 24))
                xPos += 1
            } else {
                return
            }
        }
    }
}
