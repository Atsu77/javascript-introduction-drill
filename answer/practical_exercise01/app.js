'use strict';

/***************************************
 * Playerを管理するクラス
 * @props {Array[Object]} cards 自分の手札プロパティ
 */
class Player {
  /**
   * コンストラクタ
   * 処理内容：cardsプロパティを空配列で初期化する
   * @param なし
   */
  constructor() {
    // cardsプロパティを空配列で初期化する
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
      //totalScoreが10以下であれば、エースは11として加算
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
    //openArea.style.displayを'none'から'block'にする
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

/***************************************
 * 52枚のカードからなるカードデッキを管理するクラス
 * @props {Array[Object]} deck  カードオブジェクトを持つカードデッキ配列プロパティ
 * @props {number} cardCount 引いたカードの枚数プロパティ
 */
class Deck {
  constructor() {
    //52枚のカードオブジェクトを持つカードデッキ配列プロパティ
    this.deck = [];
    //何枚カードを引いたかのカウンター用プロパティ（最初は51=配列の一番最後の添字）
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
    //引いた枚数をカードカウンター用プロパティから1減算する
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
   * 引数で受けたマークの1~13までのカードを生成し、デッキ配列プロパティに追加するメソッド
   * @param {String} mark 生成する1~13のカードのマーク文字列
   */
  deckAddCard(mark) {
    for (let cardNumber = 1; cardNumber <= 13; cardNumber++) {
      //カードナンバーを0埋めで２桁にし変数cardNumberStrに入れる
      const cardNumberStr = ('00' + cardNumber).slice(-2);

      //画像ファイル名を生成し、変数imgFileNameに入れる
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

/***************************************
 * ゲーム全体を管理するクラス
 * @props {Deck} deck カードデッキ配列プロパティ
 * @props {Player} player プレイヤーを表すインスタンス
 * @props {Player} dealer ディーラーを表すインスタンス
 */
class Game {
   /**
   * コンストラクタ
   * @constructor
   */
  constructor() {
    //カードデッキ(Deckクラスのインスタンス)プロパティを生成
    this.deck = new Deck();

    //プレイヤーと、ディーラーを表すインスタンスを生成し、プロパティに持たせる
    this.player = new Player();
    this.dealer = new Player();

    //プレイヤー、ディーラーともに2枚カードを引く
    for (let i = 0; i < 2; i++) {
      this.player.drawCard(this.deck);
      this.dealer.drawCard(this.deck);
    }
  }

  /**
   * プレイヤーのカード表示エリアを再描画するメソッド
   */
  refreshPlayerArea() {
    //プレイヤーのカードエリアの要素ノードを取得、初期化
    const playerCardArea = document.getElementById('player-card');
    playerCardArea.innerHTML = '';

    //プレイヤーインスタンスから、カードを表示するメソッドを呼ぶ
    this.player.openCard(playerCardArea, 120);

    //メッセージエリア表示
    this.outputMessage(true);
  }

  /**
   * 勝敗の判定と、メッセージの表示を行うメソッド
   * @param {Boolean} flg 1枚めくるかどうかのフラグ　true＝めくる　false＝めくらない
   */
  outputMessage(flg) {
    //要素ノード取得
    const textArea = document.getElementById('text-area');
    const dealerCardArea = document.getElementById('dealer-card');
    dealerCardArea.style.display = 'none';

    //プレイヤー、ディーラーの合計点数取得
    const playerTotal = this.player.calculateTotalScore();
    const dealerTotal = this.dealer.calculateTotalScore();

    const isPlayerBust = playerTotal > 21;
    const isDealerBust = dealerTotal > 21;

    //プレイヤーバーストチェック
    //ディーラーが21以下の場合
    if (isPlayerBust && !isDealerBust) {
      textArea.innerHTML = `
              現在のカードは${playerTotal}です。<br>
              ディーラーのカードは${dealerTotal}です。<br>
              プレイヤーはバーストです。
              <p class="judg">ディーラーの勝ちです！</p>
              残念でした！
              <p><a href="index.html">もう一度プレイする</a></p>
          `;
      this.dealer.openCard(dealerCardArea, 80);

      //どちらもバーストの場合
    } else if (isPlayerBust && isDealerBust) {
      textArea.innerHTML = `
              現在のカードは${playerTotal}です。<br>
              ディーラーのカードは${dealerTotal}です。<br>
              プレイヤー、ディーラー共にバーストです。
              <p class="judg">ディーラーの勝ちです！</p>
              残念でした！
              <p><a href="index.html">もう一度プレイする</a></p>
          `;
      this.dealer.openCard(dealerCardArea, 80);

      //プレイヤー21以下でflgがtrueのとき
    } else if (flg && !isPlayerBust) {
      textArea.innerHTML = `
              現在のカードは${playerTotal}です。<br>
              もう一枚引きますか？<br>
              <ul class="select-card">
                  <li data-select="yes">はい</li>
                  <li data-select="no">いいえ</li>
              </ul>
          `;

      //はい・いいえをクリックされたときのイベントリスナー
      const selectUl = document.querySelector('ul');
      selectUl.addEventListener('click', event => {
        const targetElement = event.target;

        //ディーラーのカードが17以上になるようにカードを引く
        while (this.dealer.calculateTotalScore() < 17) {
          this.dealer.drawCard(this.deck);
        }

        //はいが押された時
        if (targetElement.dataset.select === 'yes') {
          //プレイヤー、カードを一枚取得
          this.player.drawCard(this.deck);
          //画面再描画
          this.refreshPlayerArea();
          //いいえが押された時
        } else {
          //勝敗メッセージ表示
          this.outputMessage(false);
        }
      });

      //flgがfalseのとき
    } else {
      //ディーラーがバーストしたとき
      if (!isPlayerBust && isDealerBust) {
        textArea.innerHTML = `
                  現在のカードは${playerTotal}です。<br>
                  ディーラーのカードは${dealerTotal}です。<br>
                  ディーラーはバーストです。
                  <p class="judg">プレイヤーの勝ちです！</p>
                  おめでとうございます！
                  <p><a href="index.html">もう一度プレイする</a></p>
              `;
        this.dealer.openCard(dealerCardArea, 80);

        //プレイヤーがディーラーよりスコアが少ない
      } else if (playerTotal < dealerTotal) {
        textArea.innerHTML = `
                  現在のカードは${playerTotal}です。<br>
                  ディーラーのカードは${dealerTotal}です。
                  <p class="judg">ディーラーの勝ちです！</p>
                  残念でした！
                  <p><a href="index.html">もう一度プレイする</a></p>
              `;
        this.dealer.openCard(dealerCardArea, 80);

        //プレイヤーがディーラーより大きい
      } else if (playerTotal > dealerTotal) {
        textArea.innerHTML = `
                  現在のカードは${playerTotal}です。<br>
                  ディーラーのカードは${dealerTotal}です。
                  <p class="judg">プレイヤーの勝ちです！</p>
                  おめでとうございます！
                  <p><a href="index.html">もう一度プレイする</a></p>
              `;
        this.dealer.openCard(dealerCardArea, 80);
        //同点のとき
      } else {
        textArea.innerHTML = `
                  現在のカードは${playerTotal}です。<br>
                  ディーラーのカードは${dealerTotal}です。<br>
                  <p class="judg">引き分けです！</p>
                  <p><a href="index.html">もう一度プレイする</a></p>
              `;
        this.dealer.openCard(dealerCardArea, 80);
      }
    }
  }
}

/***************************************
*　メイン処理の開始
*/
//Gameインスタンス生成
const game = new Game();
//プレイヤーカード、メッセージの再描画
game.refreshPlayerArea();
