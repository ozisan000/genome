
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
     * TODO: 空間を空ける
     */
    //% block
    export function Space() {
        if (xPos > xPosMax || CommandCheck()) {
            return
        }
        let placePos = world(xPos, 1, 24)
        blocks.fill(AIR, placePos, placePos,FillOperation.Replace)
        xPos += 1
    }

    /**
     * TODO: DNAブロックを設置する
     * @param loop 何回ループさせるかどうか
     */
    //% block
    export function GenomeSet(loop = 1) {
        //コマンドの実行回数をチェック
        if (CommandCheck()) {
            return
        }

        //ループでDNAブロックを設置する
        for (let i = 0; i < loop; i++) {
            if (xPos <= xPosMax) {
                let placePos = world(xPos, 1, 24)
                blocks.fill(HONEYCOMB_BLOCK, placePos, placePos, FillOperation.Replace)
                xPos += 1
            } else {
                return
            }
        }
    }
}
