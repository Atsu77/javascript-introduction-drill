'use strict';

/***************************************
 * Playerを管理するクラス
 * @props {Array[Object]} cards 自分の手札プロパティ
 */
class Player {
  /**
   * コンストラクタ
   * 処理内容：cardsプロパティを空配列で初期化する
 　* @constructor
   * @param なし
   */
  
  //TODO

  /**
   * カードデッキからカードを１枚引き、手札に加えるメソッド
   * 処理内容：
   * 　Deckクラスのインスタンスからカードオブジェクトを1つ取得し、
   * 　cardsプロパティに追加する
   * メソッド名：drawCard
   * @param {Array[Object]} cardDeck  Deckクラスのインスタンス
   */
  
  //TODO
  
  /**
   * 手札の合計点を計算するメソッド
   * 処理内容：
   * 　cardsプロパティ内のカードオブジェクトのnumberプロパティの総合計点数を計算し返す
   * 　ただし1(エース)は特別ルールを適用する
   * 　　　その時点の総合計点数が10以下であれば、エースは11として加算
   * 　　　その時点の総合計点数が11以上であれば、エースは1として加算
   * 　　　上記の判定をエースの枚数分繰り返す
   * 　最後に総合計点数を返す
   * メソッド名：calculateTotalScore
   * @return {Number} 合計点数
   */

  //TODO

  /**
   * 指定された要素にカード画像を表示するメソッド
   * 処理内容：
   *  ディーラーのカード表示域は非表示になってるので表示する
   *  具体的にはopenArea.style.displayを'none'から'block'にする
   *  this.cardsのインスタンス数だけimg要素を生成し、表示域に追加
   * メソッド名：openCard
   * @param {Element} openArea  表示する要素ノードオブジェクト
   * @param {Number} size カード画像の大きさ
   */

  //TODO

}


/***************************************
 * 52枚のカードからなるカードデッキを管理するクラス
 * @props {Array[Object]} deck  カードオブジェクトを持つカードデッキ配列プロパティ
 * @props {number} cardCount 引いたカードの枚数プロパティ
 */
class Deck {
  /**
   * コンストラクタ
   * 処理内容：
   * 　deck配列プロパティを空配列で初期化
   * 　cardCountプロパティを51で初期化（51=配列の一番最後の添字）
   * 　シャッフルするメソッド(this.cardShuffle())を実行
   * @constructor 
   */

  // TODO

  /**
   * カードを１枚取得するメソッド
   * 処理内容：
   * 　カードデッキ配列から1枚分のオブジェクトを取得し返す
   * 　引いた枚数をカードカウンター用プロパティから1減算する
   * メソッド名：getOneCard
   * @return {Object} カードデッキからめくったカード1枚を表すオブジェクト
   */

  // TODO

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
   * メソッド名：cardShuffle
   */

  // TODO  
  
  /**
   * 引数で受けたマークの1~13までのカードを生成しデッキ配列プロパティに追加するメソッド
   * 処理内容：
   *   カードナンバーを0埋めで２桁にし変数cardNumberStrに入れる
   * 　画像ファイル名を生成し、変数imgFileNameに入れる
   * 　1枚のカードを表すオブジェクトリテラル作成
   *   deck配列プロパティに追加
   * 形式：
   *   画像ファイル名の形式：
   * 　　　./image/card_${mark}_${cardNumberStr}.png`
   *   オブジェクトの形式:
   * 　　{ mark: mark, number: cardNumber, img: imgFileName }
   * メソッド名：deckAddCard
   * @param {String} mark 生成する1~13のカードのマーク文字列
   */


  // TODO

}

/***************************************
 * ゲーム全体を管理するクラス
 * @props {Deck} deck カードデッキ配列プロパティ
 * @props {Player} player プレイヤーを表すインスタンス
 * @props {Player} dealer ディーラーを表すインスタンス
 */
class Game {
  /**
   * コンストラクタ
   * 処理内容：
   *  カードデッキ(Deckクラスのインスタンス)プロパティを生成
   *  プレイヤーとディーラーを表すPlayerクラスのインスタンスを生成し各プロパティに代入
   *  プレイヤー、ディーラーともに2枚カードを引く(drawCardメソッドを呼ぶ)
   * @constructor
   */
  

  // TODO  

  /**
   * プレイヤーのカード表示エリアを再描画するメソッド
   * 処理内容：
   * 　id="player-card"の要素をgetする
   * 　Playerインスタンスからカードを表示するメソッドopenCardを呼ぶ
   * 　メッセージエリア表示のためメソッドoutputMessage(true)を呼ぶ
   * メソッド名：refreshPlayerArea
   */

  // TODO


  /**
   * 勝敗の判定と、メッセージの表示
   * 処理内容：
   * 　Idが"text-area"の要素を取得
   * 　ディーラーの表示領域を非表示にする
   * 　　（要素ノード.style.display = 'none'）
   * 　プレイヤー、ディーラーの合計点数取得
   * 　合計点数がバーストしているか(21以上か)のチェック
   * 　プレイヤーがバーストしディーラーが21以下の場合
   * 　　　"ディーラー勝利"の旨のメッセージを表示する
   * 　どちらもバーストの場合
   * 　　　"ディーラー勝利"の旨のメッセージを表示する 
   * 　プレイヤーがバーストせずflgがtrueの場合
   * 　　　"もう一枚引きますか？"と尋ねるメッセージを表示し、
   * 　　　"はい"か"いいえ"へのクリックイベントを受け付ける
   * 　　　はいの場合
   * 　　　　　プレイヤー、カードを一枚取得
   * 　　　　　画面再描画
   * 　　　いいえの場合
   * 　　　　　outputMessage(false)を呼ぶ
   * 　flgがfalseの場合
   * 　   プレイヤーがバーストせずディーラーがバーストした場合
   * 　     "プレイヤー勝利"の旨のメッセージを表示する
   *  　  プレイヤーがディーラーよりスコアが小さい場合
   * 　　　 "ディーラー勝利"の旨のメッセージを表示する 
   *   　 プレイヤーがディーラーよりスコアが大きい場合
   *   　   "プレイヤー勝利"の旨のメッセージを表示する
   *  　  同点の場合
   *   　   "引き分け"の旨のメッセージを表示する
   * メソッド名：outputMessage
   * @param {Boolean} flg 1枚めくるかどうかのフラグ　true＝めくる　false＝めくらない
   */

  // TODO

}

/***************************************
*　メイン処理の開始
*/
//Gameインスタンス生成
const game = new Game();
//プレイヤーカード、メッセージの再描画
game.refreshPlayerArea();