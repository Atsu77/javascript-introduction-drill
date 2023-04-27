/***************************************
 * 52枚のカードからなるカードデッキを管理するクラス
 * @props {Array[Object]} deck  カードオブジェクトを持つカードデッキ配列プロパティ
 * @props {number} cardCount 引いたカードの枚数プロパティ
 */
export default class Deck {
  constructor() {
    //52枚のカードオブジェクトを持つカードデッキ配列プロパティ
    this.deck = [];
    //何枚カードを引いたかのカウンター用プロパティ（最初は51　配列の一番最後の添字）
    this.cardCount = 51;
    //カードデッキ配列をシャッフル
    this.cardShuffle();
  }
  /**
   * カードを１枚取得するメソッド
   * 処理内容：
   * 　カードデッキ配列から1枚分のオブジェクトを取得し返す
   * 　引いた枚数をカードカウンター用プロパティから1減算する
   * @return {Object} カードデッキからめくったカード1枚を表すオブジェクト
   */
  getOneCard() {
    const card = this.deck[this.cardCount];
    //引いた枚入をカードカウンター用プロパティから1減算する
    this.cardCount--;
    return card;
  }

  /**
   * カードデッキに52枚のカードオブジェクトを生成し、シャッフルするメソッド
   * 処理内容：
   *  deckAddCardメソッドを四回使い、
   *  各マーク1~13の数値カードを生成しdeck配列プロパティに追加
   *  順番に並んでいるカードデッキをシャッフル
   *    カードデッキの最後のカードから並び替え
   * 　 カードデッキ内のカード数分繰り返し
   *  　　並び替えるカードの添字をランダムに取得
   *  　　指定した並び替え先の添字(j)と、現在の添字(i)のカードを交換
   */
  cardShuffle() {
    //各マークの1~13の数値のカードを生成し、deck配列プロパティに追加
    this.deckAddCard('club');
    this.deckAddCard('diamond');
    this.deckAddCard('heart');
    this.deckAddCard('spade');

    //順番に並んでいるカードデッキをシャッフル
    //カードデッキの最後のカードから並び替え(this.deck.length -1 は最後のカードを持つ添字)
    for (let i = this.deck.length - 1; i >= 0; i--) {
      //並び替えるカードの添字をランダムに取得
      const j = Math.floor(Math.random() * (i + 1));

      //指定した並び替え先の添字(j)と、現在の添字(i)のカードを交換
      [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
    }
  }

  /**
   * 引数で受けたマークの1~13までのカードを生成し、デッキ配列プロパティに追加する
   * @param {String} mark 生成する1~13のカードのマーク文字列
   */
  deckAddCard(mark) {
    for (let cardNumber = 1; cardNumber <= 13; cardNumber++) {
      //カードナンバーを0埋めで２桁にする
      const cardNumberStr = ('00' + cardNumber).slice(-2);

      //画像ファイル名を生成し、画像要素ノードのsrc属性に設定
      const imgFileName = `./image/card_${mark}_${cardNumberStr}.png`;

      //1枚のカードを表すオブジェクトリテラル作成
      const card = {
        mark: mark,
        number: cardNumber,
        img: imgFileName,
      };

      //deck配列プロパティに追加
      this.deck.push(card);
    }
  }
}
