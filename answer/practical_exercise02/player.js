/***************************************
 * Playerを管理するクラス
 * @props {Array[Object]} cards 自分の手札プロパティ
 */
export default class Player {
  /**
   * コンストラクタ
   * cardsプロパティを空配列で初期化する
   * @param なし
   */
  constructor() {
    // cards:自分の手札プロパティ
    this.cards = [];
  }

  /**
   * カードデッキからカードを１枚引き手札に加えるメソッド
   * 処理内容：
   * 　Deckクラスのインスタンスからカードオブジェクトを1つ取得し、
   * 　cardsプロパティに追加する
   * @param {Array[Object]} cardDeck  Deckクラスのインスタンス
   */
  drawCard(cardDeck) {
    //引数のカードデッキ配列から1枚引くメソッドを呼び出し、その戻り値をcards配列プロパティに追加
    this.cards.push(cardDeck.getOneCard());
  }

  /**
   * 手札の合計点を計算するメソッド
   * 処理内容：
   * 　cardsプロパティ内のカードオブジェクトのnumberプロパティ
   * 　の総合計点数を計算し返す
   * 　ただし1(エース)は特別ルールを適用する
   * 　　　その時点の総合計点数が10以下であれば、エースは11として加算
   * 　　　その時点の総合計点数が11以上であれば、エースは1として加算
   * 　　　上記の判定をエースの枚数分繰り返す
   * 　最後に総合計点数を返す
   * @return {Number} 合計点数
   */
  calculateTotalScore() {
    let totalScore = 0;
    let aceCards = 0;

    //カードの数値を見て、1（エース）の枚数を数える
    for (const card of this.cards) {
      if (card.number === 1) {
        aceCards++;
      } else if (card.number < 11) {
        totalScore += card.number;
      } else {
        totalScore += 10;
      }
    }
    //1（エース）の枚数だけ繰り返し、1か11で加算する
    for (let i = 0; i < aceCards; i++) {
      //totalScoreが11以下であれば、エースは11として加算
      if (totalScore <= 10) {
        totalScore += 11;
      } else {
        totalScore += 1;
      }
    }
    //合計点数を戻す
    return totalScore;
  }

  /**
   * 指定された要素にカード画像を表示するメソッド
   * 処理内容：
   *  ディーラーのカード表示域は非表示になってるので表示する
   *  具体的にはopenArea.style.displayを'none'から'block'にする
   *  this.cardsのインスタンス数だけimg要素を生成し、表示域に追加
   * @param {Element} openArea  表示する要素ノードオブジェクト
   * @param {Number} size カード画像の大きさ
   */
  openCard(openArea, size) {
    //ディーラーのカード表示域は非表示になってるので、表示化する
    //(openArea.style.displayを'none'から'block'にする)
    openArea.style.display = 'block';

    //インスタンスが持つcardsプロパティの数だけimg要素を生成し、表示域に追加
    for (const card of this.cards) {
      const imgElement = document.createElement('img');
      imgElement.src = card.img;
      imgElement.width = size;

      openArea.appendChild(imgElement);
    }
  }
}
