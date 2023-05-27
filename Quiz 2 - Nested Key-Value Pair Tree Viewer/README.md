# Quiz 2 - Nested Key-Value Pair Tree Viewer

## 🛠 技術需求
✅ 使用 Vite 建立 Vue3 專案
✅ 使用 Composition API
✅ 使用 Pug 樣板語言

## 📝 筆記
- 追加 auto-imports plugin 自動引入 vue 常用函數，如：vue、vueuse、pinia 以及 component 與 router pages
- 使用 tailwind x iconify 作為網頁 icon
- 使用 eslint + auto-format 排版程式碼
- 使用 vueuse 函數庫
- 使用 pinia 管理資料

## 🔍 規格
1. 畫面分為兩側，一側為輸入區，一側為預覽區。
2. 輸入區中，每行 (Pair) 有兩個輸入框，一個用來輸入 Key，另一個用來輸入 Value。
3. Key 的輸入欄可以用 . 符號來標示其 Value 應屬於巢狀物件中某一節點的值。
4. 使用者可自行增減行數。
5. 尚未輸入任何字符時，輸入框內預設皆為空字串，如果使用者只輸入 Value，但 Key 值為空時，該行 (Pair) 不會顯示在預覽區。
6. 預覽區中，須清楚呈現對應輸入區內容的巢狀物件結構。
