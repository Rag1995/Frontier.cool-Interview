

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











Quiz 2 - Nested Key-Value Pair Tree Viewer

規格 (可參考此 Demo) 
●	畫面分為兩側，一側為輸入區，一側為預覽區。
●	輸入區中，每行 (Pair) 有兩個輸入框，一個用來輸入 Key，另一個用來輸入 Value。
●	Key 的輸入欄可以用 . 符號來標示其 Value 應屬於巢狀物件中某一節點的值。
●	使用者可自行增減行數。
●	尚未輸入任何字符時，輸入框內預設皆為空字串，如果使用者只輸入 Value，但 Key 值為空時，該行 (Pair) 不會顯示在預覽區。
●	預覽區中，須清楚呈現對應輸入區內容的巢狀物件結構。

技術要求
●	使用 Vite 建立 Vue3 專案。
●	使用 Composition API。
●	使用 Pug 樣板語言。

加分建議
●	良好的使用者介面設計與體驗。
●	程式的可讀性、可維護性與模組化程度。












提交方式
●	使用 git / GitHub 來做整個測驗的版本控管。
●	一個 Repository 兩題測驗 (Repo 下兩個專案資料夾)。
●	每一題分別提供一份 README 文件說明：
○	該如何執行你完成的專案。
○	在這份專案中你遇到的困難、問題，以及解決的方法。
●	使用 GitHub Page 以外的方式部署這份專案並提供 Live Demo 連結
●	確認沒有問題後請將您的 GitHub Repository 與專案 Live Demo 連結發送至下方的聯絡信箱。

注意事項
請檢查是否完全滿足 #規格 與 #技術要求，如有缺少將直接評未通過！如在過程中有任何問題，也歡迎直接與我們討論。
* 聯絡信箱：mia.yang@frontier.cool
