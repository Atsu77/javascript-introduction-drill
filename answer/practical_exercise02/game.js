//Deck、Playerクラスをインポート
import Deck from './deck.js';
import Player from './player.js';

/***************************************
 * ゲーム全体を管理するクラス
 * @props {Deck} deck カードデッキ配列プロパティ
 * @props {Player} player プレイヤーを表すインスタンス
 * @props {Player} dealer ディーラーを表すインスタンス
 */
export default class Game {
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
