# 🧠 SQL Injection Visualizer

An interactive, educational tool that **demonstrates how SQL injection payloads manipulate raw SQL queries**. Designed for developers, students, and security researchers to explore the behavior of SQL injection attacks in a safe and visual environment.

![banner](https://via.placeholder.com/1000x200?text=SQL+Injection+Visualizer)

---

## 🚀 Features

- 🔍 **Payload Explorer**: Browse, search, and categorize a wide variety of SQL injection payloads.
- 🧱 **Form Builder**: Simulate web forms dynamically with custom input fields.
- 🛠️ **SQL Template Editor**: Write SQL queries using placeholder variables (e.g., `$username`, `$id`).
- 🧬 **Live Injection Preview**: See exactly how form input alters the raw SQL query in real time.
- 🎨 **Syntax Highlighting & Diff View**: Highlighted changes between safe and injected queries.
- 🔐 **Educational Mode**: Safely learn and teach SQL injection concepts without risk to live databases.

---

## 🖥️ Tech Stack

- **Frontend**: [React 18](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 📦 Getting Started

### 1. Clone the Repository

```bash
https://github.com/LishuGupta652/sql-injection-visualizer
cd sql-injection-visualizer
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` to use the app.

---

## 🧪 Usage

1. ✏️ **Define a SQL Template**  
   e.g.,  
   ```sql
   SELECT * FROM users WHERE username = '$username' AND password = '$password';
   ```

2. 🧍 **Build Form Fields**  
   Add inputs like `username`, `password` to simulate a real login form.

3. 💉 **Choose or Type a Payload**  
   Select from predefined payloads or add your own, like:  
   ```
   ' OR 1=1 --
   ```

4. 🔎 **Visualize the Injection**  
   See the live-constructed query:  
   ```sql
   SELECT * FROM users WHERE username = '' OR 1=1 --' AND password = '';
   ```

---

## 📁 Project Structure

```
src/
├── components/         # Reusable UI components
├── pages/              # Main views (Visualizer, Payload List)
├── utils/              # Helper functions (e.g., query replacement)
├── assets/             # Icons, styles
├── App.tsx             # Root app
├── main.tsx            # Entry point
```

---

## 📘 Scripts

| Command        | Description                   |
|----------------|-------------------------------|
| `npm run dev`  | Start development server      |
| `npm run build`| Build for production          |
| `npm run preview` | Preview production build  |
| `npm run lint` | Run ESLint checks             |

---

## 🧠 Why This Tool?

> Understanding SQL injection isn’t just about knowing what it is—it’s about *seeing* how it actually works. This tool makes invisible attacks visible, one payload at a time.

---

## 🛡️ Disclaimer

This tool is strictly for **educational and authorized security testing purposes**. Do **not** use it on live or production systems without explicit permission.

---

## 🤝 Contributing

Contributions are welcome!  
Feel free to open issues or PRs for:
- New payloads
- UI/UX improvements
- Documentation fixes
- Additional features (e.g., WAF simulation, parameterized defense mode)

---

## 📜 License

MIT License © [lishugupta]
