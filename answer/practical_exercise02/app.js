//Gameクラスをインポート
import Game from './game.js';

/***************************************
*　メイン処理の開始
*/
//Gameインスタンス生成
const game = new Game();

//プレイヤーカード、メッセージの再描画
game.refreshPlayerArea();
