# ベースイメージを指定
FROM node:14

# コンテナ内の作業ディレクトリを設定
WORKDIR /app

# ローカルのReactプロジェクトをコピー（Dockerfileと同じディレクトリにある前提）
COPY ./my-app /app

# ポートを公開 (Reactアプリケーションのデフォルトポートは3000です)
EXPOSE 3000

# アプリケーションの実行コマンド
CMD ["npm", "start"]
