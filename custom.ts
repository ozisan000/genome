
/**
* このファイルを使って、独自の関数やブロックを定義してください。
* 詳しくはこちらを参照してください：https://minecraft.makecode.com/blocks/custom
*/

/**
 * Genome
 */
//% weight=100 color=#ffa500 icon="ξ"
namespace genomeanalysis {
    let xPos = -9
    //  デバッグ用座標
    let xPosMax = -2
    //  デバッグ用座標
    let isEdit = false
    let cmdCnt = 0
    let cmdCntMax = 5

    /**
     * TODO: コマンドが何回実行されたか調べる
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
     * TODO: 空間を開ける
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
     * TODO: DNAブロックを設置する
     * @param num 何回ループさせるかどうか, num: 1
     */
    //% block
    export function GenomeSet(num: number = 1) {
        //コマンドの実行回数をチェック
        if (CommandCheck()) {
            return
        }

        //ループでDNAブロックを設置する
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
