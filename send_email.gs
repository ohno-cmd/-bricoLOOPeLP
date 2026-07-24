function sendBulkEmail() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = sheet.getDataRange().getValues();

  const subject = "【クラファン支援者限定】20%OFF＋返金保証で愛犬の人生を変える2日間";

  const bodyTemplate = `○○様

この度はbricoのクラウドファンディングをご支援いただき、誠にありがとうございました。

あなたのご支援があったからこそ、「犬が本当に必要とする栄養」を形にすることができました。

今回はその感謝の意を込めて特別のオファーがあります。
【限定オファーをチェックする】
https://brico-loo-pe-lp.vercel.app/
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
感謝キャンペーン：2日間限定
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1日約194円で愛犬の健康を守る内臓3種セットのご案内

初回20%OFF（¥7,260 → ¥5,808）
＋ 3ヶ月返金保証

【期間】6月27日(金) 10:30 ～ 6月28日(土) 10:30
※ わずか2日間です

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
「クラファンで応援してくれた支援者様だからこそ」最初に、最高級の内臓を確保してお届けします。

限られた自然の食べ物だからこそ、ご支援いただいた皆様に優先的に。

これが、私たちからの「本当の感謝」です。

【今すぐ確認する】
https://brico-loo-pe-lp.vercel.app/
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
定期便だからこそ、愛犬の身体が変わり続ける。

✓ 狩猟から24時間以内に商品化
✓ 完全無添加・人間都合の加工なし
✓ いつでも休止・解約可能
✓ 3ヶ月返金保証付き

犬の寿命は、飼い主の選択で変わります。

愛犬に最高の選択を

マグ`;

  // 2行目以降のデータをループ
  for (let i = 1; i < data.length; i++) {
    const email = data[i][0];
    const name = data[i][1];

    if (email && email.indexOf('@') > -1) {
      const personalizedBody = bodyTemplate.replace('○○様', name + '様');

      try {
        GmailApp.sendEmail(email, subject, personalizedBody);
        sheet.getRange(i + 1, 3).setValue('送信済み');
        Logger.log(name + ' (' + email + ') に送信しました');
      } catch (error) {
        sheet.getRange(i + 1, 3).setValue('エラー');
        Logger.log('エラー: ' + error.message);
      }
    }
  }

  SpreadsheetApp.getUi().alert('メール送信完了！');
}
