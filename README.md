# 🚀 daily-arXiv-ai-enhanced

> [!CAUTION]
> 学術データの取り扱いに法的・規制上の要件がある法域では、必ず要件を確認した上で利用してください。二次配布を行う場合も、配布者自身の責任で法令順守・内容審査を行ってください。

`daily-arXiv-ai-enhanced` は、arXiv 論文の自動収集と AI 要約を組み合わせ、毎日の論文チェックを効率化するためのプロジェクトです。

## ✨ 主な機能

1. **サーバー不要で運用可能**
   GitHub Actions + GitHub Pages で動作し、専用サーバーは不要です。
2. **AI による要約生成**
   毎日クロールした論文を LLM で要約し、短時間で概要を把握できます。
3. **読みやすい閲覧 UI**
   キーワード・著者の関心設定、日付/期間での絞り込み、強調表示に対応しています。
4. **SKILL 拡張**
   フィルタリング処理をモジュール化して拡張できます。
5. **設定の再利用**
   Settings 画面からキーワード/著者設定をコピーし、他環境へ流用できます。

👉 **デモ**: https://dw-dengwei.github.io/daily-arXiv-ai-enhanced/

https://github.com/user-attachments/assets/b25712a4-fb8d-484f-863d-e8da6922f9d7

## 使い方

このリポジトリは既定で **cs.CV / cs.GR / cs.CL / cs.AI** を対象に日次実行し、要約データを生成します。  
カテゴリ・言語・モデルは GitHub の Variables/Secrets で変更できます。

### セットアップ手順

1. このリポジトリを自分の GitHub アカウントに Fork します。  
   必要に応じて [buy-me-a-coffee](./buy-me-a-coffee/README.md) の内容を自分用に変更してください。
2. `Settings` → `Secrets and variables` → `Actions` を開きます。
3. `Secrets` に以下を作成します。
   - `OPENAI_API_KEY`
   - `OPENAI_BASE_URL`
4. （任意）公開ページを保護したい場合は `ACCESS_PASSWORD` を設定します。
5. `Variables` に以下を作成します。
   - `CATEGORIES`（例: `cs.CL, cs.CV`）
   - `LANGUAGE`（例: `Chinese` / `English`）
   - `MODEL_NAME`（例: `deepseek-chat`）
   - `EMAIL`（コミット用メール）
   - `NAME`（コミット用名前）
6. `Actions` → `arXiv-daily-ai-enhanced` を開き、`Run workflow` で手動実行して動作確認します。  
   （初回は時間がかかる場合があります）
7. GitHub Pages を有効化します。  
   `Settings` → `Pages` → `Build and deployment` で `Deploy from a branch`、`main`、`/(root)` を選択します。
8. 数分待ってから `https://<username>.github.io/daily-arXiv-ai-enhanced/` を開きます。

## 計画（Plans）

https://github.com/users/dw-dengwei/projects/3

## コントリビューター（Contributors）

本プロジェクトにコード提供・バグ報告・改善提案をしてくださった皆さまに感謝します。

<table>
  <tbody>
    <tr>
      <td align="center" valign="top">
        <a href="https://github.com/JianGuanTHU"><img src="https://avatars.githubusercontent.com/u/44895708?v=4" width="100px;" alt="JianGuanTHU"/><br /><sub><b>JianGuanTHU</b></sub></a><br />
      </td>
      <td align="center" valign="top">
        <a href="https://github.com/Chi-hong22"><img src="https://avatars.githubusercontent.com/u/75403952?v=4" width="100px;" alt="Chi-hong22"/><br /><sub><b>Chi-hong22</b></sub></a><br />
      </td>
      <td align="center" valign="top">
        <a href="https://github.com/chaozg"><img src="https://avatars.githubusercontent.com/u/69794131?v=4" width="100px;" alt="chaozg"/><br /><sub><b>chaozg</b></sub></a><br />
      </td>
      <td align="center" valign="top">
        <a href="https://github.com/quantum-ctrl"><img src="https://avatars.githubusercontent.com/u/16505311?v=4" width="100px;" alt="quantum-ctrl"/><br /><sub><b>quantum-ctrl</b></sub></a><br />
      </td>
      <td align="center" valign="top">
        <a href="https://github.com/Zhao2z"><img src="https://avatars.githubusercontent.com/u/141019403?v=4" width="100px;" alt="Zhao2z"/><br /><sub><b>Zhao2z</b></sub></a><br />
      </td>
      <td align="center" valign="top">
        <a href="https://github.com/eclipse0922"><img src="https://avatars.githubusercontent.com/u/6214316?v=4" width="100px;" alt="eclipse0922"/><br /><sub><b>eclipse0922</b></sub></a><br />
      </td>
    </tr>
  </tbody>
  <tbody>
   <tr>
      <td align="center" valign="top">
        <a href="https://github.com/xuemian168"><img src="https://avatars.githubusercontent.com/u/38741078?v=4" width="100px;" alt="xuemian168"/><br /><sub><b>xuemian168</b></sub></a><br />
      </td>
      <td align="center" valign="top">
        <a href="https://github.com/Lrrrr549"><img src="https://avatars.githubusercontent.com/u/71866027?v=4" width="100px;" alt="Lrrrr549"/><br /><sub><b>Lrrrr549</b></sub></a><br />
      </td>
      <td align="center" valign="top">
        <a href="https://github.com/AinzRimuru"><img src="https://avatars.githubusercontent.com/u/59441476?v=4" width="100px;" alt="AinzRimuru"/><br /><sub><b>AinzRimuru</b></sub></a><br />
      </td>
      <td align="center" valign="top">
        <a href="https://github.com/fengxueguiren"><img src="https://avatars.githubusercontent.com/u/153522370?v=4" width="100px;" alt="fengxueguiren"/><br /><sub><b>fengxueguiren</b></sub></a><br />
      </td>
      <td align="center" valign="top">
        <a href="https://github.com/zerocpp"><img src="https://avatars.githubusercontent.com/u/2630297?v=4" width="100px;" alt="zerocpp"/><br /><sub><b>zerocpp</b></sub></a><br />
      </td>
   </tr>
  </tbody>
</table>

## 謝辞（Acknowledgement）

本プロジェクトの紹介・拡散・支援に感謝します。

<table>
  <tbody>
    <tr>
      <td align="center" valign="top">
        <a href="https://x.com/GitHub_Daily/status/1930610556731318781"><img src="https://pbs.twimg.com/profile_images/1660876795347111937/EIo6fIr4_400x400.jpg" width="100px;" alt="Github_Daily"/><br /><sub><b>Github_Daily</b></sub></a><br />
      </td>
      <td align="center" valign="top">
        <a href="https://x.com/aigclink/status/1930897858963853746"><img src="https://pbs.twimg.com/profile_images/1729450995850027008/gllXr6bh_400x400.jpg" width="100px;" alt="AIGCLINK"/><br /><sub><b>AIGCLINK</b></sub></a><br />
      </td>
      <td align="center" valign="top">
        <a href="https://www.ruanyifeng.com/blog/2025/06/weekly-issue-353.html"><img src="https://avatars.githubusercontent.com/u/905434" width="100px;" alt="阮一峰的网络日志"/><br /><sub><b>阮一峰のネットログ <br> 科技愛好者週刊 <br> （第 353 期）</b></sub></a><br />
      </td>
      <td align="center" valign="top">
        <a href="https://hellogithub.com/periodical/volume/111"><img src="https://github.com/user-attachments/assets/eff6b6dd-0323-40c4-9db6-444a51bbc80a" width="100px;" alt="《HelloGitHub》第 111 期"/><br /><sub><b>HelloGitHub <br> 月刊第 111 期</b></sub></a><br />
      </td>
    </tr>
  </tbody>
</table>

## Star 履歴

[![Stargazers over time](https://starchart.cc/dw-dengwei/daily-arXiv-ai-enhanced.svg?variant=adaptive)](https://starchart.cc/dw-dengwei/daily-arXiv-ai-enhanced)

## サポート

[こちら](./buy-me-a-coffee/README.md)
