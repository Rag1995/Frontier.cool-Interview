

# Quiz 1 - Random User

> 🎨 UI 參考：[Wireframe](https://whimsical.com/coding-test-1st-round-HYsHYorjq52z62jHATwFT3)
> 📁 API 來源：[Random User Generator API](https://randomuser.me/documentation)

## 🛠 技術需求
✅ 使用 Vite 建立 Vue3 專案
✅ 使用 Composition API
✅ 使用 Pug 樣板語言
✅ 使用 Tailwind CSS 進行切版

## 📝 筆記
- 追加 auto-imports plugin 自動引入 vue 常用函數，如：vue、vueuse、pinia 以及 component 與 router pages
- 使用 tailwind x iconify 作為網頁 icon
- 使用 eslint + auto-format 排版程式碼
- 使用 vueuse 函數庫
- 使用 pinia 管理資料

## ⚔️ 開發流程

1. 初始化 Vite 專案
2. 引入常用的 eslint + vscode 設定
3. 在 .evn 設定環境參數，如：API_URL、API_SEED
4. 其他詳見註解

## 🔍 規格
1. 首頁
   1. 以總數 3010 筆，並且可以自由選擇以每頁 10/30/50 筆資料呈現 (預設 30 筆)。
   2. 可以切換 Card 和 List 模式 (預設為 Card 模式)。
   3. Card 和 List 中顯示的資訊和可自由發揮，其中只要求一定要有 User 的頭像。
   4. 點擊每一筆資料時會開啟一個 User 詳細資訊的 Modal，而點擊右上角的 X icon 或點擊 Modal 外的任意處皆可將 Modal 關閉。
   5. 可將任意使用者資料添加至我的收藏中。
   6. 可將已添加至我的收藏的資料取消收藏。
   7. 重新整理網頁會維持以下條件：
      1. 每頁呈現幾筆。
      2. 分頁。
      3. 顯示模式。
   
2. 我的收藏
   1. 取消收藏功能。
   2. 其餘功能體驗與首頁一致。


