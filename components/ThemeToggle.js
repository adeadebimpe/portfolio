import { useTheme } from "../contexts/ThemeContext";
import { Sun, Moon } from "lucide-react";
import styles from "../styles/ThemeToggle.module.css";

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? (
        <Sun size={18} strokeWidth={1.5} />
      ) : (
        <Moon size={18} strokeWidth={1.5} />
      )}
    </button>
  );
}
