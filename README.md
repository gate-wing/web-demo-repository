# Webマーケのデモリポジトリへようこそ
このリポジトリは、GitHubの便利な機能をシンプルにご紹介するためのデモ用プロジェクトです。

---

## 制作の流れ

### 1. リポジトリのクローン
GitHubからリポジトリをローカルにコピーします。

```bash
git clone https://github.com/gate-wing/web-demo-repository.git
cd web-demo-repository
```

### 2. 作業ブランチの作成
`main` ブランチを直接編集せず、作業用ブランチを作成します。

```bash
git checkout -b ブランチ名
```

### 3. ファイルの編集
HTML・CSS・画像などのファイルを編集します。

### 4. 変更をコミット
編集内容をGitに記録します。

```bash
git add .
git commit -m "変更内容のメモ"
```

### 5. リモートにプッシュ
ローカルの変更をGitHubにアップロードします。

```bash
git push origin ブランチ名
```

### 6. プルリクエストの作成
GitHubの画面からプルリクエストを作成し、レビューを依頼します。

### 7. `main` へのマージ
レビュー承認後、`main` ブランチにマージして完了です。

